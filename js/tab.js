(function(){
  function changeTabActive() {
    var targetId = location.hash;
    if (!targetId) return;

    var targetTab = document.querySelector(targetId);
    if (targetTab) {
      var current = document.querySelector('.tab-active');
      if (current) current.classList.remove('tab-active');

      targetTab.classList.add('tab-active');
    }
  }

  window.addEventListener('hashchange', changeTabActive);

  changeTabActive();
})();
