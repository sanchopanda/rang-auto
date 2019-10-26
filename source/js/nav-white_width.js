widthWrapper();

function widthWrapper() {
  var b = document.querySelector('body');
  var normalw = 0;
  var scrollw = 0;
  normalw = window.innerWidth;
  scrollw = normalw - b.clientWidth;   

  var elem = document.querySelector('.nav-white');

  elem.style.width = 'calc(' + '100vw - ' + scrollw + 'px)';
}