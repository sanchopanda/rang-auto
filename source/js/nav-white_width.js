widthWrapper();

function widthWrapper() {
  var b = document.querySelector('body');
  var normalw = 0;
  var scrollw = 0;
  normalw = window.innerWidth;
  scrollw = normalw - b.clientWidth;

  var elem = document.querySelectorAll('.page-width');

  for (var i = 0; elem.length > i; i++) {
    elem[i].style.width = 'calc(' + '100vw - ' + scrollw + 'px)';
  }
}