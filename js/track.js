var trackEls = document.querySelectorAll('.js-track');
for (var i = 0; i < trackEls.length; i++) {
  trackEls[i].addEventListener('click', function(ev){
    var url = ev.currentTarget.href;
    ga('send', 'event', 'Download', 'click', url, {
      'transport': 'beacon'
    });
  });
}
