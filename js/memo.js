//스크롤 이벤트
$('#startIntro_01').on('mousewheel',function(e){
  var wheel = e.originalEvent.wheelDelta;
  if(wheel > 0){ //스크롤 올릴때
  } else {  //스크롤  내릴때
    let offset = $("#startIntro_02").offset();
    $("#startIntro_01").animate({opacity:0},700);
    $("#startIntro_02").delay(400).animate({opacity:1},800);
    $('html, body').animate({scrollTop : offset.top}, 1000);
  }
});

$('#startIntro_02').on('mousewheel',function(e){
  var wheel = e.originalEvent.wheelDelta;
  if(wheel > 0){ //스크롤 올릴때
    let offset = $("#startIntro_01").offset();
    // $("#startIntro_02").animate({opacity:0},500);
    $("#startIntro_01").delay(400).animate({opacity:1},500);
    $('html, body').animate({scrollTop : offset.top}, 1000);
  } else {  //스크롤  내릴때
    let offset = $("#selectMain").offset();
    // $('#startIntro_02').animate({opacity:0},500);
    $('#intro_logo, #img_bg_start01, #img_bg_start02').animate({opacity:0},500);
    $('html, body').animate({opacity:1 , scrollTop : offset.top}, 600);
    // $("#selectMain").animate({opacity:1},800);
  }
});

$('#selectMain').on('mousewheel',function(e){
  var wheel = e.originalEvent.wheelDelta;
  if(wheel > 0){ //스크롤 올릴때
    let offset = $("#startIntro_02").offset();
    // $("#selectMain").animate({opacity:0},700);
    $('#intro_logo, #img_bg_start01, #img_bg_start02').animate({opacity:1},800);
    $('html, body').animate({scrollTop : offset.top}, 1000);
  }
});
