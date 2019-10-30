var isToggle = true

setInterval(function() {
  slide(1); 
}, 1000);

function slide(move){
  // 현재 div이면서 active클래스를 가진 요소를 가져와라..
  var $cur = $('.slider-1 .slides > div.active');
  var $next = null;
  // 현재 페이지 점
  var $curDot = $('.pages > div.active');