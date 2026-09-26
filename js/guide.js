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
      big.textContent = 'Eligible now';
      note.textContent = 'A car built in ' + y + ' is ' + (now - y) + ' years old in ' + now + ', so it can be imported as vintage.';
    } else {
      big.textContent = 'Eligible from ' + from;
      note.textContent = 'A car built in ' + y + ' turns 50 in ' + from + '. That is ' + (from - now) + (from - now === 1 ? ' year' : ' years') + ' away.';
    }
    eResult.append(big, note);
  });

  /* Landed cost ---------------------------------------------------------- */
  var cForm = document.getElementById('calc');
  var cResult = document.getElementById('calc-result');
  var cError = document.getElementById('calc-error');
  var KEY = 'nhm-calc';
  var names = ['price', 'fees', 'inland', 'freight', 'rate', 'duty', 'gst', 'clear', 'reg'];

  var inr = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });
  var jpy = new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY', maximumFractionDigits: 0 });

  try {
    var saved = JSON.parse(localStorage.getItem(KEY) || '{}');
    names.forEach(function (n) { if (saved[n] != null) cForm[n].value = saved[n]; });
  } catch (err) { /* storage unavailable: start empty */ }

  function num(n) { var v = parseFloat(cForm[n].value); return isNaN(v) ? 0 : v; }

  cForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var missing = ['price', 'rate', 'duty', 'gst'].filter(function (n) {
      var v = parseFloat(cForm[n].value);
      return isNaN(v) || v < 0 || (n !== 'duty' && n !== 'gst' && v === 0);
    });
    names.forEach(function (n) { cForm[n].removeAttribute('aria-invalid'); });
    if (missing.length) {
      missing.forEach(function (n) { cForm[n].setAttribute('aria-invalid', 'true'); });
      cError.textContent = 'Please fill in the car price, exchange rate, customs duty and IGST.';
      cResult.hidden = true;
      cForm[missing[0]].focus();
      return;
    }
    cError.textContent = '';

    var yen = num('price') + num('fees') + num('inland') + num('freight');
    var cif = yen * num('rate');
    var duty = cif * num('duty') / 100;
    var gst = (cif + duty) * num('gst') / 100;
    var total = cif + duty + gst + num('clear') + num('reg');

    var rows = [
      ['Costs in Japan', jpy.format(yen)],
      ['CIF value in rupees', inr.format(cif)],
      ['Customs duty (' + num('duty') + '%)', inr.format(duty)],
      ['IGST and cess (' + num('gst') + '%)', inr.format(gst)],
      ['Port, clearance and broker', inr.format(num('clear'))],
      ['Registration and delivery', inr.format(num('reg'))]
    ];
    var tbody = document.querySelector('#calc-breakdown tbody');
    tbody.replaceChildren();
    rows.concat([['Total', inr.format(total)]]).forEach(function (r, i, all) {
      var tr = document.createElement('tr');
      if (i === all.length - 1) tr.className = 'total';
      var th = document.createElement('th'); th.scope = 'row'; th.textContent = r[0];
      var td = document.createElement('td'); td.textContent = r[1];
      tr.append(th, td); tbody.appendChild(tr);
    });
    document.getElementById('calc-total').textContent = inr.format(total);
    cResult.hidden = false;

    try {
      var data = {};
      names.forEach(function (n) { data[n] = cForm[n].value; });
      localStorage.setItem(KEY, JSON.stringify(data));
    } catch (err) { /* storage unavailable: nothing to remember */ }
  });

  cForm.addEventListener('reset', function () {
    cResult.hidden = true;
    cError.textContent = '';
    names.forEach(function (n) { cForm[n].removeAttribute('aria-invalid'); });
    try { localStorage.removeItem(KEY); } catch (err) { /* ignore */ }
  });
})();
