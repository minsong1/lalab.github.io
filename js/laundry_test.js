const select = [];
let qNumber = 0;
const testArea = document.getElementById('test');
const answer_area = document.getElementById('answer');
const slot = document.getElementById('slot');
const calc = document.getElementById('calc');
const result = document.getElementById('result');
let slot_i;
let slot_name;
let selectKind = []; // 선택한 옷감
let selectM1 = []; //선택한 소다
let selectM2 = []; // 선택한 계면활성제
let selectM3 = []; // 선택한 추가재료
const explain = document.getElementById('explain');

$("#logo, .nav, .footerTxt, #footerLogo, #footer_arrow").css("cursor","pointer");

// 스크린 사이즈 계산
let screenHeight = 0;
let screenWidth = 0;
const setImgSize = () => {
  screenWidth = window.innerWidth;
  screenHeight = window.innerHeight;
  testArea.style.width = screenWidth + "px" ;
  testArea.style.height = screenHeight + "px" ;
  $('#result_preview').css({width : screenWidth, height : screenHeight});
  $('#result_detail').css({width : screenWidth});

  console.log('width :   ' + screenWidth);
  console.log('height :   ' + screenHeight);
}
$("#footerLogo, #home").click(function(){
  setTimeout(() => {
  window.location.href ="index.html";
}, 200);
})
$("#project").click(function(){
  setTimeout(() => {
    window.open(`http://thisplay.hongikdmd.com/html/dh/works_view?idx=71&cate_no=3`);
}, 200);
})

const goResult = () => {
  $('#result_preview').delay(200).show();
  $('#logo, #nav, #nav_bar_laundry').animate({opacity : '0'},300);
  let selectNum = selectKind[2] - 1;
  console.log(selectNum + ' goResult에 있음');
  const infoList = laundry_infoList[selectNum];
  console.log(infoList + ' goResult에 있음');

  // 결과 간략 버전
  $('#explain').css({opacity : '0'});
  $('#front_img').css('bottom', '-20px');

  $('#big_title').text(infoList.title);
  $('#description').text(infoList.description);
  for(let iconNum = 0 ; iconNum <= 2 ; iconNum++ ){
    const feature_area = document.createElement('div');
    feature_area.className = `feature_area feature${iconNum}`;
    const icon_img = document.createElement('img');
    icon_img.src = 'img/laundry/result/icon/' + selectNum + '/icon_' + (iconNum + 1) + '.png';
    icon_img.style.top = "8px";
    feature_area.appendChild(icon_img);
    const iconTitle_box = document.createElement('div');
    iconTitle_box.innerHTML = '<p>' + infoList.icon[iconNum] + '</p>';
    iconTitle_box.className = 'iconTitle_box';
      if (iconNum === 1){
        iconTitle_box.style.background = '#F2EFFE';
        iconTitle_box.style.color = '#6D46F5';
      } else if (iconNum === 2){
        iconTitle_box.style.background = '#FFCEBE';
        iconTitle_box.style.color = '#FF754B';
      }
    feature_area.appendChild(iconTitle_box);
    const iconText = document.createElement('div');
    iconText.innerHTML = '<p>' + infoList.iconText[iconNum] + '</p>';
    iconText.className = 'iconText';
    feature_area.appendChild(iconText);
    explain.appendChild(feature_area);
  }
  const front_img = document.getElementById('front_img');
  const fImg = document.createElement('img');
  fImg.src = 'img/laundry/result/front/' + selectKind[1] + '.png';
  front_img.appendChild(fImg);

  $('#explain').animate({opacity : '1'},800);
  $('#front_img').animate({bottom : '0', opacity : '1'},800);

  // 결과 디테일 버전
  const bg_box = document.getElementById('bg_box');

  const mini_img = document.getElementById('mini_img');
  const mImg = document.createElement('img');
  mImg.src = 'img/laundry/result/mini/' + selectKind[1] + '.png';
  mini_img.appendChild(mImg);
  for (l_i = 1 ; l_i <= 2 ; l_i++ ){
    const labBubble = document.getElementById(`t${l_i}`);
    const labBubbleSmall = document.createElement('p');
    labBubbleSmall.className = 't1';
    labBubbleSmall.innerHTML = infoList.title + ' 연구완료!';
    labBubble.appendChild(labBubbleSmall);

    const labBubbleBig = document.createElement('p');
    labBubbleBig.className = 't2'
    if (l_i === 1 ){
        labBubbleBig.innerHTML = '세탁세제 재료를 알아볼까요?'
    } else {
        labBubbleBig.innerHTML = '세탁세제 제조법을 알아볼까요?'
    }
    labBubble.appendChild(labBubbleBig);
  }
  // 재료 영역 - 반복문 안에 집어넣어서 돌렸다..
  const mBox_area = document.getElementById('mBox_area');
  let link0 = '';
  let link1 = '';
  let link2 = '';
  let link3 = '';

  for(let i = 0 ; i < 4 ; i++ ){
    const metarialBox = document.createElement('div');
    metarialBox.className = 'metarialBox';
    //재료 이미지
    const meterialImg_div = document.createElement('div');
    meterialImg_div.className = 'meterialImg';
    const meterialImg = document.createElement('img');
    // 재료 이름
    const meterialName = document.createElement('div');
    meterialName.className = 'meterialName';
    //재료 양
    const volumeBox = document.createElement('div');
    volumeBox.className = 'volumeBox';
    //재료 설명
    const meterialText = document.createElement('div');
    meterialText.className = 'meterialText';

    if ( i === 0 ){
      meterialImg.src = 'img/laundry/result/water.png';
      meterialName.innerHTML = '<p>정제수</p>';
      volumeBox.innerHTML = '47g | 1 소주잔';
      meterialText.innerHTML = '불순물이 없는 순수한 물로 피부자극, 알러지를 유발하지 않음';
      link0 = 'https://search.shopping.naver.com/search/all?bt=0&catId=50000002&frm=NVSHCAT&origQuery=%EC%A0%95%EC%A0%9C%EC%88%98&pagingIndex=1&pagingSize=40&productSet=total&query=%EC%A0%95%EC%A0%9C%EC%88%98&sort=rel&timestamp=&viewType=list';

    } else if ( i === 1 ){
      meterialImg.src = 'img/laundry/test/' + i + '/' + selectM1[1] + '.png';
      meterialName.innerHTML = '<p>' + selectM1[0] + '</p>';
      volumeBox.innerHTML = selectM1[2];
      meterialText.innerHTML = selectM1[3];
      link1 = selectM1[4];
    } else if ( i === 2 ){
      meterialImg.src = 'img/laundry/test/' + i + '/' + selectM2[1] + '.png';
      meterialName.innerHTML = '<p>' + selectM2[0] + '</p>';
      volumeBox.innerHTML = selectM2[2];
      meterialText.innerHTML = selectM2[3];
      link2 = selectM2[4];
    } else if ( i === 3 ){
      meterialImg.src = 'img/laundry/test/' + i + '/' + selectM3[1] + '.png';
      meterialName.innerHTML = '<p>' + selectM3[0] + '</p>';
      volumeBox.innerHTML = selectM3[2];
      meterialText.innerHTML = selectM3[3];
      link3 = selectM3[4];
    }
    //재료 이미지
    meterialImg_div.appendChild(meterialImg);
    metarialBox.appendChild(meterialImg_div);
    //재료 이름
    metarialBox.appendChild(meterialName);
    //재료 양
    metarialBox.appendChild(volumeBox);
    //재료 설명
    metarialBox.appendChild(meterialText);
    //링크 이동 박스
    const dimBox = document.createElement('div');
    dimBox.className = `dimBox`;
    const link_btn = document.createElement('div');
    link_btn.className = `link_btn linkNum${i}`;
    link_btn.innerHTML = '구매하기';
    dimBox.appendChild(link_btn);
    metarialBox.appendChild(dimBox);

    mBox_area.appendChild(metarialBox);
  }
  bg_box.appendChild(mBox_area);

  $(`.dimBox`).hover(function() {
    $(this).animate({ opacity : '1'},300);
  }, function () {
    $(this).animate({ opacity : '0'},300);
  });

  $('.link_btn').css("cursor","pointer");

  $('.linkNum0').click(function () { window.open(link0); });
  $('.linkNum1').click(function () { window.open(link1); });
  $('.linkNum2').click(function () { window.open(link2); });
  $('.linkNum3').click(function () { window.open(link3); });

  //만드는 법 영역
  const makingBox_area = document.getElementById('makingBox_area');
  for (let i = 1 ; i <= 4 ; i++ ) {
    const box = document.createElement('div');
    box.className = `makingBox`;

    const makingImg_div = document.createElement('div');
    makingImg_div.className = 'makingImg';
    const makingImg = document.createElement('img');
    makingImg.src = 'img/laundry/result/making/m' + i + '.png';
    makingImg_div.appendChild(makingImg);
    box.appendChild(makingImg_div);

    const makingNum = document.createElement('div');
    makingNum.className = 'makingNum';
    makingNum.innerHTML = '<p>' + i + '.</p>';
    box.appendChild(makingNum);

    const makingText = document.createElement('p');
    makingText.className = "makingText";

    if ( i === 1 ){
      $(box).css({top: '0', background : '#EEF3FF'});
      makingText.innerHTML = '정제수 및 워터류에 선택한 소다류를 섞습니다';
      const sub_text = document.createElement('p');
      sub_text.className = 'sub_text';
      sub_text.innerHTML = '※ 기포가 올라오는 것은 자연스러운 현상입니다';
      box.appendChild(sub_text);
    }else if ( i === 2 ){
      $(box).css({top: '475px', left : '610px', background : '#F1EFFA'});
      makingText.innerHTML = '내용물이 잘 섞였다면 선택한 계면활성제를 넣어 다시 잘 섞어줍니다';
    }else if ( i === 3 ){
      $(box).css({top: '890px', background : '#E7F2EB'});
      makingText.innerHTML = '기포가 사라진 후 선택한 추가 재료를 차례대로 넣어 잘 섞어줍니다';
    }else if ( i === 4 ){
      $(box).css({top: '1323px', left : '610px', background : '#ECEEED'});
      makingText.innerHTML = '기포가 사라질 때 까지 기다린 후 사용합니다';
    }
    box.appendChild(makingText);
  makingBox_area.appendChild(box);
  }
  //버튼 영역
  const btn_area = document.getElementById('btn_area');
  const btnList = ['섬유유연제 연구하기', '다시하기', '레시피 저장하기']
  for(let i = 0 ; i < 3 ; i++ ){
    const btn_div = document.createElement('div');
    btn_div.className = `btn btnNum${i}`;
    const btn_img = document.createElement('img');
    btn_img.src = 'img/laundry/result/btn_' + i + '.png';
    btn_div.appendChild(btn_img);
    const btn_text = document.createElement('p');
    btn_text.innerHTML = btnList[i];
    btn_div.appendChild(btn_text);
    btn_area.appendChild(btn_div);
    if ( i === 0 ){
      $(btn_div).css({left : '266px'});
      $(`.btnNum${i}>img`).css({left : '15px'});
      $(`.btnNum${i}>p`).css({left : '45px'});

    } else if ( i === 1 ){
      $(btn_div).css({left : '525px'});
      $(`.btnNum${i}>img`).css({left : '60px'});
      $(`.btnNum${i}>p`).css({left : '91px'});
    } else if ( i === 2 ){
      $(btn_div).css({left : '785px'});
      $(`.btnNum${i}>img`).css({left : '31px'});
        $(`.btnNum${i}>p`).css({left : '62px'});
    }
  }
  // 버튼 - 마우스 호버
  $(`.btn`).hover(function() {
    $(this).css("cursor","pointer").animate({ top : '3764px'},200);
    $(this).css({background : '#4B9EFF', color : "#FFFFFF"});
  }, function(){
    $(this).animate({top : '3769px'},200);
    $(this).css({background : '#FFFFFF', color : '#7783A6'});
  });

  $(`.btnNum0`).hover(function() {
    $(this).find("img").attr("src",`img/laundry/result/btnH_0.png`);
  }, function(){
    $(this).find("img").attr("src",`img/laundry/result/btn_0.png`);
  });
  $(`.btnNum1`).hover(function() {
    $(this).find("img").attr("src",`img/laundry/result/btnH_1.png`);
  }, function(){
    $(this).find("img").attr("src",`img/laundry/result/btn_1.png`);
  });
  $(`.btnNum2`).hover(function() {
    $(this).find("img").attr("src",`img/laundry/result/btnH_2.png`);
  }, function(){
    $(this).find("img").attr("src",`img/laundry/result/btn_2.png`);
  });


  // 버튼 - 클릭이벤트
  $('.btnNum0').click(function(){
    setTimeout(() => {
    window.location.href ="fabric.html";
  }, 200);
  })
  $('.btnNum1').click(function(){
    setTimeout(() => {
    $("#result_preview, #result_detail").hide(400);
    window.location.href ="laundry.html";
    }, 800);
  })
  $('.btnNum2').click(function(){
      window.open(infoList.save);
  })

  //푸터
  $("#footer_arrow").click(function(){
    let offset = $("#result_detail").offset();
    $('html, body').animate({scrollTop : offset.top}, 800);
  });

  // 마우스 스크롤 이벤트
  $('#result_preview').on('mousewheel',function(e){
    var wheel = e.originalEvent.wheelDelta;
    if(wheel > 0){ //스크롤 올릴때
    } else {  //스크롤  내릴때
      $('#logo, #nav').show();
      $(this).hide(500);
      $('#result_detail').delay(800).show(500);
    }
  });

  $('#result_detail').on('mousewheel',function(e){
    var wheel = e.originalEvent.wheelDelta;
    if(wheel > 0){ //스크롤 올릴때
      $('#logo, #nav').hide();
      let offset = $('#result_detail').offset();
      if ($(document).scrollTop() === offset.top )
        $('#result_detail').hide(500);
        $('#result_preview').delay(800).show(500);
    } else {  //스크롤  내릴때
    }
  });

}

const end = () => {
  setTimeout(() => {
    $('#test').hide();
  }, 1000);
  for (var b_i = 1; b_i < 4 ; b_i++) {
    $('#img-BG_laundry_0'+b_i).animate({opacity:'0'},300).delay(1000).hide();
  }
  goResult();
}

const addAnswerBtn = (answerTxt, answerTxt_d, name, color, left, volume, explanation, link, idx ) => {
  const answer_btn = document.createElement('div');
  // 흰배경
  const aBg_div = document.createElement('div');
  aBg_div.className = `laundry_aBg`;
  aBg_div.style.left = left;
  answer_btn.appendChild(aBg_div);
  // 컬러 배경
  const aBgColor_div = document.createElement('div');
  aBgColor_div.className = `laundry_aColorBg`;
  aBgColor_div.style.background = color;
  // 넘버 in 컬러배경
  const aNum = idx++ ;
  const aNumCount = document.createElement('p');
  aNumCount.className = 'laundry_aNumCount';
  aNumCount.innerHTML = '.0' + idx;
  aBgColor_div.appendChild(aNumCount);
  aBgColor_div.style.left = left;
  answer_btn.appendChild(aBgColor_div);
  //이미지
  const aImg_div = document.createElement('div');
  const aImg = document.createElement('img');
  const aImg_url = 'img/laundry/test/' + qNumber + '/' + name +'.png';
  aImg_div.className = `laundry_aImg`;
  aImg.alt = answerTxt;
  aImg.title = answerTxt;
  aImg.src = aImg_url;
  aImg_div.appendChild(aImg);
  aImg_div.style.left = left;
  answer_btn.appendChild(aImg_div);
  // 큰 이름
  const aText_div = document.createElement('div');
  aText_div.className = `laundry_aText`;
  aText_div.innerHTML = '<p>' + answerTxt + '</p>';
  aText_div.style.left = left;
  answer_btn.appendChild(aText_div);
  //작은 이름
  const aText_d_div = document.createElement('div');
  aText_d_div.className = `laundry_aText_d`;
  aText_d_div.innerHTML = '<p>' + answerTxt_d + '</p>';
  aText_d_div.style.left = left;
  answer_btn.appendChild(aText_d_div);

  //강도 표시용 원
  const makeDot = () => {
    value_dot = document.createElement('div');
    value_dot.className = 'value_dot';
  }
  var dot_i;
  const value_1_box = document.createElement('div');
  const value_1 = document.createElement('div');
  const value_2_box = document.createElement('div');
  const value_2 = document.createElement('div');

    if (qNumber === 1) { //2번 질문
        aBg_div.style.height = '449px';
        aBg_div.style.top = '310px';
        aBgColor_div.style.height = '234px';
        aBgColor_div.style.top = '310px';
        aImg_div.style.top = '175px';
        aText_div.style.top = '577px';

        // 표백력 이름 박스
        value_1_box.className = 'value_1_box';
        value_1.className = 'value_1';
        value_1.innerHTML = '<p>표백력</p>';
        value_1_box.appendChild(value_1);
        //표백력 세기
        if (idx === 1 ){
          for (dot_i = 1; dot_i <= 5 ; dot_i++){
            makeDot();
            value_1_box.appendChild(value_dot);
            value_dot.style.background = '#D2E9FF';
          }
        } else if (idx === 2 ){
          for (dot_i = 1; dot_i <= 3 ; dot_i++){
            makeDot();
            value_1_box.appendChild(value_dot);
            value_dot.style.background = '#D2E9FF';
          }
          for (dot_i = 1; dot_i <= 2 ; dot_i++){
            makeDot();
            value_1_box.appendChild(value_dot);
            value_dot.style.background = '#488FF7';
          }
        } else if (idx === 3 ){
          for (dot_i = 1; dot_i <= 5 ; dot_i++){
            makeDot();
            value_1_box.appendChild(value_dot);
            value_dot.style.background = '#488FF7';
          }
        }
        aBg_div.appendChild(value_1_box);

        // 세정력 이름 박스
        value_2_box.className = 'value_2_box';
        value_2.className = 'value_2';
        value_2.innerHTML = '<p>세정력</p>';
        value_2_box.appendChild(value_2);
        // 세정력 세기
        if (idx === 1 ){
          for (dot_i = 1; dot_i <= 3 ; dot_i++){
            makeDot();
            value_2_box.appendChild(value_dot);
            value_dot.style.background = '#FFCEBE';
          }
          for (dot_i = 1; dot_i <= 2 ; dot_i++){
            makeDot();
            value_2_box.appendChild(value_dot);
            value_dot.style.background = '#FF7145';
          }
        } else if (idx === 2 ){
          for (dot_i = 1; dot_i <= 2 ; dot_i++){
            makeDot();
            value_2_box.appendChild(value_dot);
            value_dot.style.background = '#FFCEBE';
          }
          for (dot_i = 1; dot_i <= 3 ; dot_i++){
            makeDot();
            value_2_box.appendChild(value_dot);
            value_dot.style.background = '#FF7145';
          }
        } else if (idx === 3 ){
          for (dot_i = 1; dot_i <= 5 ; dot_i++){
            makeDot();
            value_2_box.appendChild(value_dot);
            value_dot.style.background = '#FF7145';
          }
        }
        aBg_div.appendChild(value_2_box);

        if( idx === 3 ){
          const caution = document.createElement('img');
          caution.src = 'img/laundry/caution.png';
          caution.className = 'caution';
          aBg_div.appendChild(caution);
        }

 // 2번 질문
  } else if (qNumber === 2) { //3번질문
        aBg_div.style.height = '449px';
        aBg_div.style.top = '310px';
        aBgColor_div.style.height = '234px';
        aBgColor_div.style.top = '310px';
        aImg_div.style.top = '185px';
        aText_div.style.top = '577px';

        // 표백력 이름 박스
        value_1_box.className = 'value_1_box';
        value_1.className = 'value_1';
        value_1.innerHTML = '<p>세정력</p>';
        value_1_box.appendChild(value_1);
        //표백력 세기
        if (idx === 1 ){
          for (dot_i = 1; dot_i <= 4 ; dot_i++){
            makeDot();
            value_1_box.appendChild(value_dot);
            value_dot.style.background = '#D2E9FF';
          }
          for (dot_i = 1; dot_i <= 1 ; dot_i++){
            makeDot();
            value_1_box.appendChild(value_dot);
            value_dot.style.background = '#488FF7';
          }
        } else if (idx === 2 ){
          for (dot_i = 1; dot_i <= 2 ; dot_i++){
            makeDot();
            value_1_box.appendChild(value_dot);
            value_dot.style.background = '#D2E9FF';
          }
          for (dot_i = 1; dot_i <= 3 ; dot_i++){
            makeDot();
            value_1_box.appendChild(value_dot);
            value_dot.style.background = '#488FF7';
          }
        } else if (idx === 3 ){
          for (dot_i = 1; dot_i <= 5 ; dot_i++){
            makeDot();
            value_1_box.appendChild(value_dot);
            value_dot.style.background = '#488FF7';
          }
        }
        aBg_div.appendChild(value_1_box);

        // 세정력 이름 박스
        value_2_box.className = 'value_2_box';
        value_2.className = 'value_2';
        // value_2.style.width = '63px';
        value_2.innerHTML = '<p>피부자극</p>';
        value_2_box.appendChild(value_2);
        // 세정력 세기
        if (idx === 1 ){
          for (dot_i = 1; dot_i <= 4 ; dot_i++){
            makeDot();
            value_2_box.appendChild(value_dot);
            value_dot.style.background = '#FFCEBE';
          }
          for (dot_i = 1; dot_i <= 1 ; dot_i++){
            makeDot();
            value_2_box.appendChild(value_dot);
            value_dot.style.background = '#FF7145';
          }
        } else if (idx === 2 ){
          for (dot_i = 1; dot_i <= 2 ; dot_i++){
            makeDot();
            value_2_box.appendChild(value_dot);
            value_dot.style.background = '#FFCEBE';
          }
          for (dot_i = 1; dot_i <= 3 ; dot_i++){
            makeDot();
            value_2_box.appendChild(value_dot);
            value_dot.style.background = '#FF7145';
          }
        } else if (idx === 3 ){
          for (dot_i = 1; dot_i <= 5 ; dot_i++){
            makeDot();
            value_2_box.appendChild(value_dot);
            value_dot.style.background = '#FF7145';
          }
        }
        aBg_div.appendChild(value_2_box);
  } else if (qNumber === 3){ // 마지막 질문
    aBg_div.style.height = '351px';
    aBgColor_div.style.height = '232px';
    aImg_div.style.top = '200px';
    aText_div.style.top = '596px';
    aText_d_div.style.top = '637px';
  }

  //마우스 호버 -> 컬러 배경 길이 , 글자 색 변경, 이미지 트랜지션주기
  $(answer_btn).css("cursor","pointer");

  $(answer_btn).hover(function() {
    $(this).find('.laundry_aImg').css({'transform':'rotate(-7deg)'});
    $(this).find('.laundry_aBg').css('box-shadow', '0px 8px 20px rgba(229, 229, 229, 0.6)');
  }, function(){
    $(this).find('.laundry_aImg').css({'transform':'rotate(0deg)'});
    $(this).find('.laundry_aBg').css('box-shadow', '0px 4px 10px 3px rgba(229, 229, 229, 0.4)');
  });
  // 마우스 호버 - 문항별 설정
  if (qNumber === 1 ){ //소다류
    $(answer_btn).hover(function() {
      $(this).find('.laundry_aBg, .laundry_aColorBg').animate({top: '300px'});
      $(this).find('.laundry_aImg').animate({top: '165px'});
      $(this).find('.laundry_aText').animate({top: '567px'});
    }, function(){
      $(this).find('.laundry_aBg, .laundry_aColorBg').animate({top: '310px'});
      $(this).find('.laundry_aImg').animate({top: '175px'});
      $(this).find('.laundry_aText').animate({top: '577px'});
    });
  }  else if (qNumber === 2){ // 계면활성제
    $(answer_btn).hover(function() {
      $(this).find('.laundry_aBg, .laundry_aColorBg').animate({top: '300px'});
      $(this).find('.laundry_aImg').animate({top: '165px'});
      $(this).find('.laundry_aText').animate({top: '567px'});
    }, function(){
      $(this).find('.laundry_aBg, .laundry_aColorBg').animate({top: '310px'});
      $(this).find('.laundry_aImg').animate({top: '175px'});
      $(this).find('.laundry_aText').animate({top: '577px'});
    });
  } else { // 나머지
    $(answer_btn).hover(function() {
      $(this).find('.laundry_aBg, .laundry_aColorBg').animate({top: '323px'});
      if(qNumber === 0){ //마지막 질문
        $(this).find('.laundry_aImg').animate({top: '240px'});
        $(this).find('.laundry_aText').animate({top: '626px'});
        $(this).find('.laundry_aText_d').animate({top: '663px'});
      } else { //1번
        $(this).find('.laundry_aImg').animate({top: '190px'});
        $(this).find('.laundry_aText').animate({top: '586px'});
        $(this).find('.laundry_aText_d').animate({top: '627px'});
      }
    }, function(){
      $(this).find('.laundry_aBg, .laundry_aColorBg').animate({top: '333px'});
      if(qNumber === 0){ //마지막 질문
        $(this).find('.laundry_aImg').animate({top: '250px'});
        $(this).find('.laundry_aText').animate({top: '636px'});
        $(this).find('.laundry_aText_d').animate({top: '673px'});
      } else { //1번
        $(this).find('.laundry_aImg').animate({top: '200px'});
        $(this).find('.laundry_aText').animate({top: '596px'});
        $(this).find('.laundry_aText_d').animate({top: '637px'});
      }
    });
  }


// 클릭 이벤트
  answer_btn.addEventListener('click', () => {
    const parent = answer_btn.parentNode;
    const children = parent.childNodes;
    for (let i in children) {
      children[i].disabled = true;
    }
    $('.question_text').animate({opacity : '0'}, 200); // 질문 텍스트 사라지는 효과

    setTimeout(() => {
      //슬롯 영역 인터렉션
      $(`.img${qNumber}>p`).remove();
      const slot_img_box = document.querySelector(`.img${qNumber}`);
      slot_img_box.style.opacity = 0;
      const selectImg = document.createElement('img');
      selectImg.src = 'img/laundry/test/' + qNumber + '/' + name +'.png';
      slot_img_box.appendChild(selectImg);
      $(slot_img_box).animate({ bottom : "0", opacity : "1"},500,"swing");
      if (qNumber === 0) {
        $(`.slotP${qNumber}>p`).text(answerTxt_d).css({opacity : '0'});
      } else {
          $(`.slotP${qNumber}>p`).text(answerTxt).css('opacity', '0');
        }
      $(`.slotP${qNumber}`).css("color","#488FF7");
      $(`.slotP${qNumber}>p`).animate({opacity : '1', bottom: '+10px'}, 400);
      $('.slot'+qNumber).css("border","");
      $('.slot'+(qNumber+1 )).css("border","1px solid #488FF7");
    }, 400);

    if ( qNumber < 3){
      $(answer_area).delay(100).animate({opacity: '0'},300,'swing'); // 답변 선택 시 사라지는 효과
    }

    setTimeout(() => {
      console.log(idx+'  idx');
      select[qNumber] = idx;
      answer_area.innerHTML = '';
      qNumber = qNumber + 1;
      goNext();
    }, 500);

    if (qNumber === 0){
      selectKind = [answerTxt_d, name, idx]; // 선택한 옷감에서 다음과 같은 정보를 가져옴
    } else if (qNumber === 1){
      selectM1 = [answerTxt, name, volume, explanation, link]; //선택한 소다에서 다음과 같은 정보를 가져옴
    } else if (qNumber === 2){
      selectM2 = [answerTxt, name, volume, explanation, link]; // 선택한 계면활성제에서 다음과 같은 정보를 가져옴
    } else if (qNumber === 3){
      selectM3 = [answerTxt, name, volume, explanation, link];
    }
  });

  answer_area.appendChild(answer_btn);
  slot.style.opacity = 1;
}


const goNext = () => {
  if (qNumber === laundry_qnaList.length){
    $(".question_box").animate({opacity: '0'},400,'swing');
    $("#answer>div").animate({opacity: '0'},400,'swing');
    $("#slot").animate({opacity: '0'},400,'swing');
    setTimeout(() => {
      end();
    }, 500);
    return;
  }
  console.log(qNumber + '  goNext');
  const qnaList = laundry_qnaList[qNumber];
  $('.question_text').text(qnaList.q);
  $('.question_text').animate({opacity : '1'}, 400);

  $(answer_area).animate({top : '-3%', opacity: '1'},800,'linear');

  setTimeout(() => {
    const endIdx = qnaList.a.length -1 ;
    for (let i in qnaList.a) {
      addAnswerBtn(qnaList.a[i].answer, qnaList.a[i].answer_d, qnaList.a[i].name, qnaList.a[i].color, qnaList.a[i].left, qnaList.a[i].volume, qnaList.a[i].explanation, qnaList.a[i].link, i);
    }
    answer_area.style.opacity = 1;
  }, 200);
}

const goSlot = () => {
  for (slot_i = 0; slot_i <= 3 ; slot_i++){
    const slot_div = document.createElement('div');
    slot_div.className = `slot_div slot${slot_i}`;
    $('.slot'+slot_i).css("border","1px solid #FFFFFF");
    $('.slot0').css("border","1px solid #488FF7");
    slot.appendChild(slot_div);

    if(slot_i == 0){
      slot_div.style.left = "734.49px";
      slot_name = '옷';
    } else if(slot_i == 1){
      slot_div.style.left = "843.45px";
      slot_name = '소다';
    } else if(slot_i == 2){
      slot_div.style.left = "952.87px";
      slot_name = '계면활성제';
    } else if(slot_i == 3){
      slot_name = '추가재료';
      slot_div.style.left = "1061.94px";
    }

    const slot_img = document.createElement('div');
    slot_img.className = `slot_img img${slot_i}`;
    slot_div.appendChild(slot_img);
    slot_img.innerHTML = '<p>' + (slot_i+1) + '</p>';
    const slot_value = document.createElement('div');
    slot_div.appendChild(slot_value);
    slot_value.className = `slot_value slotP${slot_i}`;
    slot_value.innerHTML = '<p>' + slot_name + '</p>';
  }

  slot.style.opacity = 0;
  goNext();
}

$(window).resize(setImgSize);

window.addEventListener('DOMContentLoaded', function () {
  $('#result_preview').hide();
  $('#result_detail').hide();
  setImgSize();
  goSlot();
})
