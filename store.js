/* Ortak veri katmanı: menü ve yönetici paneli aynı kaydı okur */
(function () {
  var KEY = "freshblend_menu_v1";

  function clone(o) { return JSON.parse(JSON.stringify(o)); }

  function load() {
    var base = clone(window.FB_DEFAULTS);
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return base;
      var saved = JSON.parse(raw);
      base.settings = Object.assign(base.settings, saved.settings || {});
      if (Array.isArray(saved.categories) && saved.categories.length) base.categories = saved.categories;
      if (Array.isArray(saved.items)) base.items = saved.items;
      return base;
    } catch (e) {
      return base;
    }
  }

  function save(state) {
    var payload = { settings: state.settings, categories: state.categories, items: state.items };
    try {
      localStorage.setItem(KEY, JSON.stringify(payload));
      return true;
    } catch (e) {
      return false;
    }
  }

  function reset() {
    try { localStorage.removeItem(KEY); } catch (e) {}
  }

  function money(n) {
    return Number(n || 0).toLocaleString("tr-TR") + " ₺";
  }

  function allergenIcon(a, size) {
    size = size || 22;
    return '<span class="alg" title="' + a.name + '" style="--c:' + a.color + ';background:' + a.color +
      ';width:' + size + 'px;height:' + size + 'px"><svg viewBox="0 0 24 24" fill="#fff" width="' +
      Math.round(size * 0.72) + '" height="' + Math.round(size * 0.72) + '">' + a.svg + '</svg></span>';
  }

  function uid() { return "u" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }

  /* Fotoğrafı küçültüp JPEG olarak saklar (tarayıcı depolama sınırı için) */
  function readImage(file, maxSide) {
    maxSide = maxSide || 800;
    return new Promise(function (resolve, reject) {
      var fr = new FileReader();
      fr.onerror = reject;
      fr.onload = function () {
        var img = new Image();
        img.onerror = reject;
        img.onload = function () {
          var s = Math.min(1, maxSide / Math.max(img.width, img.height));
          var c = document.createElement("canvas");
          c.width = Math.round(img.width * s);
          c.height = Math.round(img.height * s);
          c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
          resolve(c.toDataURL("image/jpeg", 0.82));
        };
        img.src = fr.result;
      };
      fr.readAsDataURL(file);
    });
  }

  window.FB = { KEY: KEY, load: load, save: save, reset: reset, money: money, allergenIcon: allergenIcon, uid: uid, readImage: readImage };
})();
