/* Buying guide tools: vintage eligibility checker and landed-cost calculator. */
(function () {
  /* Eligibility ---------------------------------------------------------- */
  var eForm = document.getElementById('elig-form');
  var eResult = document.getElementById('elig-result');

  eForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var input = eForm.year;
    var now = new Date().getFullYear();
    var y = parseInt(input.value, 10);
    eResult.hidden = false;
    eResult.replaceChildren();
    var big = document.createElement('p');
    big.className = 'tool__big';
    var note = document.createElement('p');
    note.className = 'body';
    if (!y || y < 1886 || y > now) {
      input.setAttribute('aria-invalid', 'true');
      big.textContent = 'Enter a year between 1886 and ' + now + '.';
      eResult.appendChild(big);
      input.focus();
      return;
    }
    input.removeAttribute('aria-invalid');
    var from = y + NHM.VINTAGE_AGE;
    if (from <= now) {
      big.textContent = 'Potentially age-eligible';
      note.textContent = 'A ' + y + ' model may meet the age screen in ' + now + '. Confirm the specific vehicle’s first-registration date, originality, documents and current import and registration rules with a qualified broker before buying.';
    } else {
      big.textContent = 'Earliest model-year screen: ' + from;
      note.textContent = 'This is an estimate from model year only. The specific vehicle’s first-registration date and other conditions determine whether it qualifies.';
    }
    eResult.append(big, note);
  });

  /* Cash planning worksheet -------------------------------------------- */
  var cForm = document.getElementById('calc');
  var cResult = document.getElementById('calc-result');
  var cError = document.getElementById('calc-error');
  var KEY = 'nhm-calc-v2';
  var names = ['price', 'fees', 'inland', 'freight', 'insurance', 'rate', 'tax', 'clear', 'reg', 'concierge', 'buffer'];
  var inr = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });
  var jpy = new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY', maximumFractionDigits: 0 });

  try { localStorage.removeItem('nhm-calc'); } catch (err) { /* old worksheet data unavailable */ }
  try {
    var saved = JSON.parse(localStorage.getItem(KEY) || '{}');
    names.forEach(function (n) { if (saved[n] != null) cForm.elements[n].value = saved[n]; });
  } catch (err) { /* storage unavailable: start empty */ }

  cForm.addEventListener('submit', function (e) {
    e.preventDefault();
    names.forEach(function (n) { cForm.elements[n].removeAttribute('aria-invalid'); });
    var bad = names.filter(function (n) {
      var raw = cForm.elements[n].value.trim();
      var value = Number(raw);
      return (['price', 'rate', 'tax'].includes(n) && raw === '') || (raw !== '' && (!Number.isFinite(value) || value < 0 || (n === 'buffer' && value > 100))) || ((n === 'price' || n === 'rate') && value <= 0);
    });
    if (bad.length) {
      bad.forEach(function (n) { cForm.elements[n].setAttribute('aria-invalid', 'true'); });
      cError.textContent = 'Enter a positive car price and exchange rate, a broker tax quote (zero only if confirmed), and non-negative costs. Buffer must be 0–100%.';
      cResult.hidden = true;
      cForm.elements[bad[0]].focus();
      return;
    }
    var values = {};
    names.forEach(function (n) { values[n] = Number(cForm.elements[n].value || 0); });
    var plan;
    try { plan = NHM.costPlan(values); }
    catch (err) { cError.textContent = 'Check the entered amounts.'; cResult.hidden = true; return; }
    cError.textContent = '';
    var rows = [
      ['Purchase, fees and transport (JPY)', jpy.format(plan.foreign)],
      ['Converted purchase and transport', inr.format(plan.converted)],
      ['Broker-quoted customs duties and taxes', inr.format(values.tax)],
      ['Port and clearance', inr.format(values.clear)],
      ['Registration and delivery', inr.format(values.reg)],
      ['Concierge fee, if quoted', inr.format(values.concierge)],
      ['Subtotal before buffer', inr.format(plan.subtotal)],
      ['Planning buffer (' + values.buffer + '%)', inr.format(plan.reserve)],
      ['Planning total', inr.format(plan.total)]
    ];
    var tbody = document.querySelector('#calc-breakdown tbody');
    tbody.replaceChildren();
    rows.forEach(function (r, i) {
      var tr = document.createElement('tr');
      if (i === rows.length - 1) tr.className = 'total';
      var th = document.createElement('th'); th.scope = 'row'; th.textContent = r[0];
      var td = document.createElement('td'); td.textContent = r[1];
      tr.append(th, td); tbody.appendChild(tr);
    });
    document.getElementById('calc-total').textContent = inr.format(plan.total);
    cResult.hidden = false;
    try {
      var saved = {};
      names.forEach(function (n) { saved[n] = cForm.elements[n].value; });
      localStorage.setItem(KEY, JSON.stringify(saved));
    } catch (err) { /* storage unavailable */ }
  });

  cForm.addEventListener('reset', function () {
    cResult.hidden = true;
    cError.textContent = '';
    names.forEach(function (n) { cForm.elements[n].removeAttribute('aria-invalid'); });
    try { localStorage.removeItem(KEY); } catch (err) { /* ignore */ }
  });
})();
