const selectMain_section = document.getElementById('selectMain');
const section_intro01 = document.getElementById('startIntro_01');
const section_intro02 = document.getElementById('startIntro_02');
const btn_area = document.createElement('div'); //선택지 버튼 영역 선언
btn_area.className = 'btn_area';
// 스크린 사이즈 계산
let screenHeight = 0;
let screenWidth = 0;
const setImgSize = () => {
  screenWidth = window.innerWidth;
  screenHeight = window.innerHeight;
  selectMain_section.style.width = screenWidth + "px";
  selectMain_section.style.height = screenHeight + "px";
  section_intro01.style.width = screenWidth + "px";
  section_intro01.style.height = screenHeight + "px";
  section_intro02.style.width = screenWidth + "px";
  section_intro02.style.height = screenHeight + "px";

  console.log('width :   ' + screenWidth);
  console.log('height :   ' + screenHeight);
}

const goStart = (name, description, btnWidth, shadow, idx) => {
  $('.scroll_arrow').css('position', 'fixed');

  //로고
  $('#intro_logo').animate({opacity:1},500);
  // $("#selectMain").animate({opacity:0});

  //선택 섹션 만들기
  const sBg_div = document.createElement('div');
  sBg_div.className = 'sBg_div_' + name + ' start_img';
  selectMain_section.appendChild(sBg_div);
  $('.sBg_div_' + name).hide();

  //버튼 만들기
  const btn_div = document.createElement('div');
  btn_div.className = name + ' btn_bg';
  const btn_img = document.createElement('img');
  btn_img.src = 'img/start/btn_'+ name + '.png';
  btn_div.appendChild(btn_img);
  const btn_text = document.createElement('p');
  btn_text.innerHTML = description;
  btn_div.appendChild(btn_text);

  btn_area.appendChild(btn_div);
  selectMain_section.appendChild(btn_area);

  //스크롤 이벤트
  $('#startIntro_01').on('mousewheel',function(e){
    var wheel = e.originalEvent.wheelDelta;
    if(wheel > 0){ //스크롤 올릴때
    } else {  //스크롤  내릴때
      let offset = $("#startIntro_02").offset();
      $("#startIntro_01").animate({opacity:0},700);
      $("#startIntro_02").delay(400).animate({opacity:1},800);
      $('html, body').animate({scrollTop : offset.top}, 800);
    }
  });

  $('#startIntro_02').on('mousewheel',function(e){
    var wheel = e.originalEvent.wheelDelta;
    if(wheel > 0){ //스크롤 올릴때
      let offset = $("#startIntro_01").offset();
      // $("#startIntro_02").animate({opacity:0},500);
      $("#startIntro_01").delay(400).animate({opacity:1},500);
      $('html, body').animate({scrollTop : offset.top}, 800);
    } else {  //스크롤  내릴때
      let offset = $("#selectMain").offset();
      // $('#startIntro_02').animate({opacity:0},500);
      $('html, body').animate({scrollTop : offset.top});
      $('#intro_logo, #img_bg_start01, #img_bg_start02, #scrollDown_bg, #scrollDown').css('opacity', '0');
      // $("#selectMain").animate({opacity:1},800);
    }
  });

  $('#selectMain').on('mousewheel',function(e){
    var wheel = e.originalEvent.wheelDelta;
    if(wheel > 0){ //스크롤 올릴때
      let offset = $("#startIntro_02").offset();
      // $("#selectMain").animate({opacity:0},700);
      $('#intro_logo, #img_bg_start01, #img_bg_start02, #scrollDown_bg, #scrollDown ').delay(400).animate({opacity:1},800);
      $('html, body').animate({scrollTop : offset.top}, 800);
    }
  });

  // 마우스 호버
  let changeBtnWidth = 75;
  changeBtnWidth = btnWidth;

  $('.' + name ).mouseenter(function() {
    $( this ).css("cursor","pointer").animate({ width: changeBtnWidth}, 600).css('box-shadow', '3px 10px 30px '+ shadow );
    $('.'+ name + ' p').animate({opacity: '1'}, 800);
    $('.sBg_div_' + name ).css({width : screenWidth + 'px', height: screenHeight + 'px'}).fadeIn().show();
  })
  $('.'+ name ).mouseleave(function() {
    $( this ).animate({width: '75px'}, 300 ).css('box-shadow', '' );
    $('.'+ name + ' p').animate({opacity: '0'}, 200);
    $('.sBg_div_' + name ).fadeOut().hide();
  })

  // 클릭
  $('.' + name ).css("cursor","pointer").click(function(){
    $('#selectMain').fadeOut();
    setTimeout(() => {
    window.location.href = name + ".html";
  }, 200);
  });

}

const goSelect = () => { //배경 이미지 생성 및 버튼 변수 지정
  setImgSize();
  for (let i in selectList) {
    goStart(selectList[i].name, selectList[i].description, selectList[i].width, selectList[i].shadow, i);
  }
  $(window).resize(setImgSize);
}

window.addEventListener('DOMContentLoaded', function () {
  goSelect();
})
