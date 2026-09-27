/* Daily indicative rates; no amount is sent to the rate provider. */
(function () {
  var tool = document.getElementById('fx-tool');
  if (!tool) return;
  var source = document.getElementById('fx-source');
  var amount = document.getElementById('fx-amount');
  var result = document.getElementById('fx-result');
  var status = document.getElementById('fx-status');
  var use = document.getElementById('fx-use-rate');
  var data = null;
  var CACHE = 'nhm-fx-usd-v1';
  var HOUR = 3600000;
  var inr = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });

  function valid(payload) {
    if (!payload || payload.result !== 'success' || payload.base_code !== 'USD' || !payload.rates || !Number.isFinite(payload.time_last_update_unix)) return false;
    if (Date.now() - payload.time_last_update_unix * 1000 > 48 * HOUR || payload.time_last_update_unix * 1000 > Date.now() + HOUR) return false;
    return Array.from(source.options).every(function (option) { return Number.isFinite(payload.rates[option.value]) && payload.rates[option.value] > 0; }) && Number.isFinite(payload.rates.INR) && payload.rates.INR > 0;
  }
  function render() {
    var n = Number(amount.value);
    var rate = data && data.rates.INR / data.rates[source.value];
    if (use) use.disabled = !rate || !document.getElementById('calc');
    if (!rate) { result.textContent = 'Reference rates unavailable. Enter a quoted rate in the worksheet.'; return; }
    result.textContent = Number.isFinite(n) && n >= 0 && amount.value !== '' ? source.value + ' ' + n.toLocaleString('en') + ' ≈ ' + inr.format(n * rate) : 'Enter a non-negative amount.';
    status.textContent = '1 ' + source.value + ' ≈ ₹' + rate.toFixed(4) + ' · Rate updated ' + new Date(data.time_last_update_unix * 1000).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'UTC' }) + ' UTC.';
  }
  source.addEventListener('change', render);
  amount.addEventListener('input', render);
  if (use) use.addEventListener('click', function () {
    if (!data) return;
    var form = document.getElementById('calc');
    form.elements.currency.value = source.value;
    form.elements.currency.dispatchEvent(new Event('change', { bubbles: true }));
    form.elements.rate.value = (data.rates.INR / data.rates[source.value]).toPrecision(10);
    form.elements.rate.focus();
  });
  try {
    var cached = JSON.parse(localStorage.getItem(CACHE) || 'null');
    if (cached && valid(cached.payload) && Date.now() - cached.saved < 24 * HOUR) { data = cached.payload; render(); }
  } catch (err) { /* storage may be disabled */ }
  if (data) return;
  status.textContent = 'Fetching daily reference rates…';
  fetch('https://open.er-api.com/v6/latest/USD', { mode: 'cors' }).then(function (response) {
    if (!response.ok) throw new Error('Rate service unavailable');
    return response.json();
  }).then(function (payload) {
    if (!valid(payload)) throw new Error('Rates incomplete or too old');
    data = payload;
    try { localStorage.setItem(CACHE, JSON.stringify({ saved: Date.now(), payload: payload })); } catch (err) { /* storage may be disabled */ }
    render();
  }).catch(function () {
    status.textContent = 'Daily rate feed unavailable. Use a current bank or broker quote.';
    render();
  });
})();
