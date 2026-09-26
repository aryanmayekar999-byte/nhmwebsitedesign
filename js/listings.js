/* Listings page: filter, sort and render NHM.listings. Filters sync to the URL
   so a filtered view can be shared or bookmarked. */
(function () {
  var form = document.getElementById('filters');
  var results = document.getElementById('results');
  var count = document.getElementById('count');
  var empty = document.getElementById('empty');
  var fields = { q: form.q, make: form.make, elig: form.elig, sort: form.sort };

  NHM.listings
    .map(function (c) { return c.make; })
    .filter(function (m, i, a) { return a.indexOf(m) === i; })
    .sort()
    .forEach(function (m) {
      var o = document.createElement('option');
      o.value = o.textContent = m;
      form.make.appendChild(o);
    });

  var params = new URLSearchParams(location.search);
  Object.keys(fields).forEach(function (k) {
    var v = params.get(k);
    if (v === null) return;
    if (fields[k].tagName === 'SELECT' && !fields[k].querySelector('option[value="' + CSS.escape(v) + '"]')) return;
    fields[k].value = v;
  });

  function render() {
    var q = fields.q.value.trim().toLowerCase();
    var list = NHM.listings.filter(function (c) {
      var status = NHM.eligibility(c.from, c.to).status;
      if (fields.make.value && c.make !== fields.make.value) return false;
      if (fields.elig.value === 'now' && status === 'upcoming') return false;
      if (fields.elig.value === 'upcoming' && status !== 'upcoming') return false;
      if (q && (c.make + ' ' + c.model + ' ' + c.chassis).toLowerCase().indexOf(q) === -1) return false;
      return true;
    });
    list.sort(function (a, b) {
      if (fields.sort.value === 'newest') return b.from - a.from || b.to - a.to;
      if (fields.sort.value === 'name') return (a.make + a.model).localeCompare(b.make + b.model);
      return a.from - b.from || a.to - b.to;
    });

    results.replaceChildren.apply(results, list.map(NHM.card));
    empty.hidden = list.length > 0;
    count.textContent = list.length === NHM.listings.length
      ? 'Showing all ' + list.length + ' listings'
      : 'Showing ' + list.length + ' of ' + NHM.listings.length + ' listings';

    var next = new URLSearchParams();
    Object.keys(fields).forEach(function (k) {
      var v = fields[k].value.trim();
      if (v && !(k === 'sort' && v === 'oldest')) next.set(k, v);
    });
    var qs = next.toString();
    history.replaceState(null, '', qs ? '?' + qs : location.pathname);
  }

  form.addEventListener('input', render);
  form.addEventListener('submit', function (e) { e.preventDefault(); });
  document.getElementById('reset').addEventListener('click', function () {
    form.reset();
    render();
    fields.q.focus();
  });
  render();
})();
