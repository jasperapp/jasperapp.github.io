(function(){
  function changeTabActive() {
    var targetId = location.hash;
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
