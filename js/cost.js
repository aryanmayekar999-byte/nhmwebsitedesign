/* Planning worksheet only: quotes and taxes are supplied by the visitor. */
window.NHM = window.NHM || {};
NHM.costPlan = function (v) {
  var names = ['price', 'fees', 'inland', 'freight', 'insurance', 'rate', 'tax', 'clear', 'reg', 'concierge', 'buffer'];
  names.forEach(function (name) {
    if (!Number.isFinite(v[name]) || v[name] < 0) throw new Error('Invalid ' + name);
  });
  if (v.price <= 0 || v.rate <= 0 || v.buffer > 100) throw new Error('Invalid planning inputs');
  var foreign = v.price + v.fees + v.inland + v.freight + v.insurance;
  var converted = foreign * v.rate;
  var india = v.tax + v.clear + v.reg + v.concierge;
  var subtotal = converted + india;
  var reserve = subtotal * v.buffer / 100;
  return { foreign: foreign, converted: converted, india: india, subtotal: subtotal, reserve: reserve, total: subtotal + reserve };
};
