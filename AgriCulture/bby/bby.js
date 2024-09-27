window.addEventListener('load',function(){
  const mynavi = this.document.querySelectorAll("#navmenu li"); // 배열형 데이터
  mynavi[3].innerHTML = `<a href="${navidata[0].d1href}">${navidata[0].d1text}</a>`;
  mynavi[2].innerHTML = `<a href="${navidata[1].d1href}">${navidata[1].d1text}</a>`;
  // 확인 요소검사
})