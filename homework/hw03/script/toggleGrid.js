(function(global) {
   //var page = document.querySelector('#page');

  var _page = document.createElement('div'),
      _wrap = document.querySelector('.wrapper');
  _page.setAttribute('id', 'toggleGridLayer');

  if (_wrap) {
    _wrap.appendChild(_page);
  } else {
    document.body.appendChild(_page);
  }

  document.onkeydown = function(e) {
    var key = e.keyCode;
    // 사용자가 입력한 키가 Shift + G 키라면... 토글 그리드 실행
    // g === 71
    // d === 68 (Windows, Chrome 사용자)
    if (key === 71 && e.shiftKey === true) {
      _page.classList.toggle('grid');
    }
  }
})(window);
