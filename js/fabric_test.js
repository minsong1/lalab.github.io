const select = [];
let qNumber = 0; // 배열에 활용될 현재 문제 넘버
const answer_area = document.getElementById('answer');

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
//마우스 호버
$('#logo, .nav, .footerTxt, #footerLogo, #footer_arrow, #intro_logo').css("cursor","pointer");
// 스크린 사이즈 계산
let screenHeight = 0;
let screenWidth = 0;
const setImgSize = () => {
  screenWidth = window.innerWidth;
  screenHeight = window.innerHeight;
  // $("#intro1").css({width : screenWidth, height : screenHeight});
  // $("#intro2").css({width : screenWidth, height : screenHeight});
  $('#intro1, #intro2, #test_area, #result').css({width : screenWidth, height : screenHeight});
  $('#result_detail').css({width : screenWidth});
  console.log('width :   ' + screenWidth);
  console.log('height :   ' + screenHeight);
}
let bolivia = 0;
let norway = 0;
let brazil = 0;
let peru = 0;
let swis = 0;
let london = 0;
let china = 0;
let greece = 0;
let hollywood = 0;
let india = 0;
let countryNum = [];

const calc = (qNumber, idx) => {
  if (qNumber === 0) {
    if ( idx == 0 ) {
      india += 3;
      hollywood += 3;
      bolivia += 3;
      brazil += 3;
      greece += 2;
    } else if ( idx == 1 ) {
      peru = peru + 1;
      london = london + 1;
      china = china + 1;
    } else if ( idx == 2 ) {
      norway = norway + 3;
      swis = swis + 2;
    }
  } else if ( qNumber === 1 ) {
    if ( idx == 0 ) {
      bolivia += 1;
      norway += 1;
      swis += 3;
      greece += 1;
    } else if ( idx == 1 ) {
      brazil += 1;
      peru += 1;
      india += 1;
    } else if ( idx == 2 ) {
      london += 2;
      china += 2;
      hollywood += 1;
    }
  } else if ( qNumber === 2 ) {
    if ( idx == 0 ) {
      bolivia += 1;
      norway += 1;
      brazil += 1;
      india += 1;
    } else if ( idx == 1 ) {
      swis += 1;
      london += 1;
      greece += 1;
      hollywood += 1;
    } else if ( idx == 2 ) {
      peru += 1;
      china += 1;
    }
  } else if ( qNumber === 3 ) {
    if ( idx == 0 ) {
      brazil += 1;
      hollywood += 1;
    } else if ( idx == 1 ) {
      bolivia += 1;
      peru += 1;
      london += 1;
      china += 1;
      greece += 1;
    } else if ( idx == 2 ) {
      norway += 1;
      swis += 1;
      india += 1;
    }
  } else if ( qNumber === 4 ) {
    if ( idx == 0 ) {
      greece += 3;
      brazil += 2;
    } else if ( idx == 1 ) {
      bolivia += 1;
      hollywood += 1;
    } else if ( idx == 2 ) {
      norway += 2;
      peru += 1;
      swis += 3;
      london += 1;
      china += 2;
      india += 1;
    }
  } else if ( qNumber === 5 ) {
    if ( idx == 0 ) {
      brazil += 1;
      london += 1;
      hollywood += 1;
    } else if ( idx == 1 ) {
      peru += 3;
      china += 3;
      india += 3;
    } else if ( idx == 2 ) {
      bolivia += 1;
      norway += 1;
      swis += 3;
      greece += 3;
    }
  } else if ( qNumber === 6 ) {
    if ( idx == 0 ) {
      peru += 1;
      swis += 1;
      london += 2;
      india += 1;
    } else if ( idx == 1 ) {
      norway += 1;
      brazil += 1;
      china += 1;
      greece += 1;
    } else if ( idx == 2 ) {
      bolivia += 3;
      hollywood += 1;
    }
  } else if ( qNumber === 7 ) {
    if ( idx == 0 ) {
      brazil =+ 3;
    } else if ( idx == 1 ) {
      bolivia += 3;
      norway += 3;
      peru += 1;
      swis += 1;
      greece += 3;
    } else if ( idx == 2 ) {
      london += 1;
      china += 1;
      hollywood += 1;
      india += 1;
    }
  }
}

const goResult = () => {
  countryNum = [ bolivia, norway, brazil, peru, swis, london, china, greece, hollywood, india ];
  let max = countryNum[0];
  let maxIndex = 0;
  for (let i = 1; i < countryNum.length; i++ ){
    if ( countryNum[i] > max ) {
      maxIndex = i ;
      max = countryNum[i];
    }
  }
  // 결과값 내용 입력
  $('#scrollDown').css('border', '3px solid #FFF');
  const scrollDown_arrow = document.getElementById('scrollDown_arrow');
  scrollDown_arrow.src = 'img/scrollDown_w.png';
  $('.scroll_arrow').css({opacity : '1'});

  let result_img = maxIndex ; // 결과 스코어
  const fbBubble = document.getElementById('fbBubble');
  fbBubble.src = 'img/fabric/result/bubble/' + fabric_infoList[result_img].name + '.png';
  const big_img = document.getElementById('big_img');
  const front_img = document.createElement('img');
  front_img.src = 'img/fabric/result/front/' + fabric_infoList[result_img].name + '_front.png';
  big_img.appendChild(front_img);
  $(".ref").text('비슷한 향 제품 - ' + fabric_infoList[result_img].product)

  const title_2 = document.getElementById('title_2');
  title_2.innerHTML = fabric_infoList[result_img].title;
  $(title_2).css('margin-top', '10px');
  const fbDescription = document.getElementById('fbDescription');
  fbDescription.innerHTML = fabric_infoList[result_img].description;
  const scent_box = document.getElementById('scent_box');
  scent_box.innerHTML = '<p>' + fabric_infoList[result_img].scent + '</p>';
  // 향 노트 구성성분
  const ex_Area = document.getElementById('ex_Area');
  const noteTitle = ['TOP NOTE', 'MIDDLE NOTE', 'BOTTOM NOTE']
  for(let d = 0 ; d <=2 ; d++ ){
    const note_div = document.createElement('div');
    note_div.className = `note_${d}`;
    const note_line = document.createElement('div');
    note_line.className = 'note_line';
    const note_title = document.createElement('div');
    note_title.className = 'note_title';
    note_title.innerHTML = noteTitle[d];
    note_div.appendChild(note_title);
    const note_text = document.createElement('div');
    note_text.className = 'note_text';
    if ( d === 0 ){
        note_text.innerHTML = fabric_infoList[result_img].top;
    } else if ( d === 1 ){
        note_text.innerHTML = fabric_infoList[result_img].middle;
    } else if ( d === 2 ){
        note_text.innerHTML = fabric_infoList[result_img].bottom;
    }
    note_div.appendChild(note_text);
    note_div.appendChild(note_line);
    ex_Area.appendChild(note_div);
  }

  if ( fabric_infoList[result_img].top === '') {
    $('.note_0, .note_2').remove();
    $('.note_1').find('.note_title').text('SINGLE NOTE');
    $('.note_1').find('.note_text').text(fabric_infoList[result_img].single);
  }

  //제이쿼리 추가 작업 및 애니메이션
  $('#scent_bar').css({background :`linear-gradient(180deg, ${fabric_infoList[result_img].topColor} 0%, ${fabric_infoList[result_img].middleColor} 51.56%, ${fabric_infoList[result_img].bottomColor} 95.83%)`});
  if ( fabric_infoList[result_img].name === 'swis') {
    $('#title_1, #title_2, #fbDescription, #scent_box, .note_line, .note_title, .note_text, .ref').css('color', '#606060')
    $('#scent_box, .note_line').css('border-color', '#606060')
  }
  $('.status_bar_charged').animate({width : '760px'});
  $(".question_box, .status_bar, .img-BG_fabric_test01, .img-BG_fabric_test02, #nav_bar_fb").delay(200).animate({ opacity:'0'},500);

  setTimeout(() => {
    $(".question_box, .status_bar, .img-BG_fabric_test01, .img-BG_fabric_test02").hide();
    $("#logo, #nav").animate({top : '-40px', opacity : '0'}).hide();
  }, 800);

  $("#result").css({background : fabric_infoList[result_img].bg_gradient , opacity : '0'}); // 결과에 다른 배경화면 색상 변경 & 투명도
  $('#test_area').hide();
  $("#result").show();
  $("#result").animate({opacity:'1'},1000);
  $("#big_img").animate({opacity:'1', bottom : '0'},600);


  // 결과값 - 디테일버전
  const bg_box = document.getElementById('bg_box');

  const mini_img = document.getElementById('mini_img');
  const mImg = document.createElement('img');
  mImg.src = 'img/fabric/result/mini/' + fabric_infoList[result_img].name + '_mini.png';
  mini_img.appendChild(mImg);
  for (l_i = 1 ; l_i <= 2 ; l_i++ ){
    const labBubble = document.getElementById(`t${l_i}`);
    const labBubbleSmall = document.createElement('p');
    labBubbleSmall.className = 't1';
    labBubbleSmall.innerHTML = fabric_infoList[result_img].title + ' 향 연구완료!';
    labBubble.appendChild(labBubbleSmall);

    const labBubbleBig = document.createElement('p');
    labBubbleBig.className = 't2'
    if (l_i === 1 ){
        labBubbleBig.innerHTML = '섬유유연제 재료를 알아볼까요?'
    } else {
        labBubbleBig.innerHTML = '섬유유연제 제조법을 알아볼까요?'
    }
    labBubble.appendChild(labBubbleBig);
  }
  // 재료 확인 영역
  const mBox_area = document.getElementById('mBox_area');
  const metarialBox = document.createElement('div');

  for(let i = 0 ; i < 5 ; i++ ){
    const metarialBox = document.createElement('div');
    metarialBox.className = 'metarialBox';
    //재료 이미지
    const meterialImg_div = document.createElement('div');
    meterialImg_div.className = 'meterialImg';
    const meterialImg = document.createElement('img');
    if ( i === 0 ){
      meterialImg.src = 'img/laundry/result/water.png';
    } else {
      meterialImg.src = 'img/fabric/result/fbMeterial_' + i +'.png';
    }
    meterialImg_div.appendChild(meterialImg);
    metarialBox.appendChild(meterialImg_div);
    //재료 이름
    const meterialName = document.createElement('div');
    meterialName.className = 'meterialName';
    meterialName.innerHTML = '<p>' + fbMetarialList[i].name + '</p>';
    metarialBox.appendChild(meterialName);
    //재료 양
    const volumeBox = document.createElement('div');
    volumeBox.className = 'volumeBox';
    volumeBox.innerHTML = '<p>' + fbMetarialList[i].volume + '</p>';
    metarialBox.appendChild(volumeBox);
    //재료 설명
    const meterialText = document.createElement('div');
    meterialText.className = 'meterialText';
    meterialText.innerHTML = '<p>' + fbMetarialList[i].text_sum + '</p>';
    metarialBox.appendChild(meterialText);
    //링크 이동 박스
    if (i < 4){
      const dimBox = document.createElement('div');
      dimBox.className = `dimBox linkNum${i}`;
      const link_btn = document.createElement('div');
      link_btn.className = `link_btn`;
      link_btn.innerHTML = '구매하기';
      dimBox.appendChild(link_btn);
      metarialBox.appendChild(dimBox);
    }

    mBox_area.appendChild(metarialBox);
  }
  bg_box.appendChild(mBox_area);

  $(`.dimBox`).hover(function() {
    $(this).animate({ opacity : '1'},300);
  }, function () {
    $(this).animate({ opacity : '0'},300);
  });

  $('.link_btn').css("cursor","pointer");

  $('.linkNum0').click(function () { window.open(`https://search.shopping.naver.com/search/all?bt=0&catId=50000002&frm=NVSHCAT&origQuery=%EC%A0%95%EC%A0%9C%EC%88%98&pagingIndex=1&pagingSize=40&productSet=total&query=%EC%A0%95%EC%A0%9C%EC%88%98&sort=rel&timestamp=&viewType=list`); });
  $('.linkNum1').click(function () { window.open(`https://search.shopping.naver.com/search/all?query=%EA%B5%AC%EC%97%B0%EC%82%B0&frm=NVSHATC&prevQuery=%EA%B5%AC%EC%97%B0%EC%82%B0`); });
  $('.linkNum2').click(function () { window.open(`https://search.shopping.naver.com/search/all?query=%ED%8F%B4%EB%A6%AC%EC%BF%BC%ED%84%B0&frm=NVSHATC&prevQuery=%ED%8F%B4%EB%A6%AC%EC%BF%BC%ED%84%B0`); });
  $('.linkNum3').click(function () { window.open(`https://search.shopping.naver.com/search/all?query=%EC%98%AC%EB%A6%AC%EB%B8%8C%EB%A6%AC%ED%80%B4%EB%93%9C&frm=NVSHATC&prevQuery=%EC%98%AC%EB%A6%AC%EB%B8%8C%EB%A6%AC%ED%80%B4%EB%93%9C`); });

  //만드는 법 영역
  const makingBox_area = document.getElementById('makingBox_area');
  for (let i = 1 ; i <= 4 ; i++ ) {
    const box = document.createElement('div');
    box.className = `makingBox`;

    const makingImg_div = document.createElement('div');
    makingImg_div.className = 'makingImg';
    const makingImg = document.createElement('img');
    makingImg.src = 'img/fabric/result/making/f' + i + '.png';
    $(makingImg).css('margin-top','35px');
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
      makingText.innerHTML = '따뜻한 정제수에 구연산을 넣어 녹입니다';
    }else if ( i === 2 ){
      $(box).css({top: '475px', left : '610px', background : '#F1EFFA'});
      makingText.innerHTML = '내용물을 저어주며 폴리쿼터를 천천히 넣고, 녹을 때까지 저어줍니다';
    }else if ( i === 3 ){
      $(box).css({top: '890px', background : '#E7F2EB'});
      makingText.innerHTML = '내용물을 잠시 식힌 뒤 올리브 리퀴드를 넣습니다';
    }else if ( i === 4 ){
      $(box).css({top: '1323px', left : '610px', background : '#ECEEED'});
      makingText.innerHTML = '원하는 향의 세기만큼 향 오일을 넣어 섞어준 후 사용합니다';
    }
    box.appendChild(makingText);
  makingBox_area.appendChild(box);
  }
  //버튼 영역
  const btn_area = document.getElementById('btn_area');
  const btnList = ['세탁세제 연구하기', '다시하기', '레시피 저장하기']
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

  //마우스 호버시
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


  //클릭 시
  $('.btnNum0').click(function(){
    setTimeout(() => {
    window.location.href ="laundry.html";
  }, 200);
  })
  $('.btnNum1').click(function(){
    setTimeout(() => {
    $("#result_preview, #result_detail").hide(400);
    window.location.href ="fabric.html";
    }, 800);
  })
  $('.btnNum2').click(function(){
    window.open(fabric_infoList[result_img].save);
  })
  $("#footer_arrow").click(function(){
    let offset = $("#result_detail").offset();
    $('html, body').animate({scrollTop : offset.top}, 800);
  })

  // 마우스 스크롤 이벤트
  $('#result').on('mousewheel',function(e){
    var wheel = e.originalEvent.wheelDelta;
    if(wheel > 0){ //스크롤 올릴때
    } else {  //스크롤  내릴 때
      $('#logo, #nav').show();
      $("#result, .scroll_arrow").animate({opacity:'0'},300);
      $('#result').hide(400);
      $('#result_detail').delay(500).show(500);
    }
  });

  $('#result_detail').on('mousewheel',function(e){
    var wheel = e.originalEvent.wheelDelta;
    if(wheel > 0){ //스크롤 올릴때
      $('#logo, #nav').hide();
      let offset = $('#result_detail').offset();
      if ($(document).scrollTop() === offset.top ){
        $('#result_detail').css('opacity', '0');
        $("#result, .scroll_arrow").css({opacity:'1'});
        $('#result').delay(500).show(500);
      }
    } else {  //스크롤  내릴때
    }
  });
}

const addAnswerBtn = (name, color, answerTxt, idx) => {
      const qNUM = qNumber + 1;
      const answer_btn = document.createElement('div');
      answer_btn.className = `answer_btn ${name}`;
      //컬러 배경
      const aBgColor_div = document.createElement('div');
      aBgColor_div.className = `answer_colorBg`;
      aBgColor_div.style.background = color;
      answer_btn.appendChild(aBgColor_div);
      //이미지
      const aImg_div = document.createElement('div');
      const aImg = document.createElement('img');
      const aImg_url = 'img/fabric/test/' + qNUM + '/' + name +'.png';
      aImg_div.className = `answer_img`;
      aImg.alt = answerTxt;
      aImg.title = answerTxt;
      aImg.src = aImg_url;
      aImg_div.appendChild(aImg);
      answer_btn.appendChild(aImg_div);
      //텍스트
      const aText_div = document.createElement('div');
      aText_div.className = `answer_text`
      aText_div.innerHTML = '<p>' + answerTxt + '</p>';
      answer_btn.appendChild(aText_div);

      //마우스 호버
      $(answer_btn).css("cursor","pointer");
      $(answer_btn).hover(function() {
        $(this).animate({top : '34%'},300).css('box-shadow', '0px 12.9256px 32.314px 2.15427px rgba(72, 143, 247, 0.1)');
        $(this).find('.answer_colorBg').animate({height : '408.77px'},200);
        $(this).find('.answer_img').animate({left : '0', width : '352px' , height : '370px'},300);
      }, function(){
        $(this).animate({top : '37.46130030959752%'},300).css('box-shadow', '0px 2px 2px rgba(72, 143, 247, 0.05), 0px 10px 13px 2px rgba(72, 143, 247, 0.07)');
        $(this).find('.answer_colorBg').animate({height : '310px'},200);
        $(this).find('.answer_img').animate({left : '12px', width : '332px' , height : '348px'},300);
      });

      // 클릭 이벤트
      answer_btn.addEventListener('click', () => {
        const parent = answer_btn.parentNode;
        const children = parent.childNodes;
        for (let i in children) {
          children[i].disabled = true;
        }
        $('.question_text').animate({opacity : '0'}, 200); // 질문 텍스트 사라지는 효과
        if ( qNumber < 7){
          $(answer_area).delay(100).animate({opacity: '0'},300,'swing'); // 답변 선택 시 사라지는 효과
        }

        select[qNumber] = idx;
        console.log( '선택한 선택지 넘버 :  '+ idx);
        calc(qNumber, idx);

        setTimeout(() => {
          answer_area.innerHTML = '';
          qNumber = qNumber + 1 ;
          goNext();
        }, 500);
      });

      answer_area.appendChild(answer_btn);
}


const goNext = () => {
  $('#test_area').show(800);
    if (qNumber === fabric_qnaList.length - 1){
      $(".question_box").animate({opacity: '0'},400,'swing');
      $("#stauss").animate({opacity: '0'},400,'swing');
      $("#answer>div").animate({opacity: '0'},400,'swing');
        setTimeout(() => {
          goResult();
          }, 500);
    return;
    }
    console.log(qNumber);

    const status = document.querySelector('.status_bar_charged');
    const qnaList = fabric_qnaList[qNumber];
    const qText = document.querySelector('.question_text');

    qText.innerHTML = '<p>' + qnaList.q + '</p>';
    statusWidth = 12.5*(qNumber+1);
    $(status).animate({width : statusWidth + "%"});
    $('.question_text').animate({opacity : '1'}, 400);

    setTimeout(() => {
      const endIdx = qnaList.a.length -1 ;
      for (let i in qnaList.a) {
        addAnswerBtn(qnaList.a[i].name, qnaList.a[i].color, qnaList.a[i].answer, i);
      } answer_area.style.opacity = 1;
    }, 200);

}


const goIntro = () => {
  $('#intro_logo, .introBgDeco').animate({opacity:'1'},1000);
  $('#intro1').show(1200);
  $(".scroll_arrow").animate({opacity:'1'},1000);
  $("#intro2").css('opacity','0').show();

  // 인트로 텍스트 타이핑 효과 https://gocoder.tistory.com/622
  for ( let i = 1 ; i <=3 ; i++ ){
    let introText = document.getElementById(`textLine_` + i );
    let typewriter = new Typewriter(introText, {
      strings: true
    });
    let text = ``;
    if ( i === 1 ){
      text = `새로운 섬유유연제 향을 연구하는 당신`;
    } else if ( i === 2 ){
      text = `하지만 좋은 향을 찾지 못하여`;
    } else if ( i === 3 ){
      text = `연구에 난항을 겪고 있습니다`;
    }
    (function(x){
      setTimeout(function(){
        typewriter.typeString(text)
          .pauseFor(1800)
          .start();
      }, 1000*x);
    })(i);
    $('.typewriter-cursor').hide();
    }
  const runText = () => {
    for ( let i = 4 ; i <=6 ; i++ ){
      let introText = document.getElementById(`textLine_` + i );
      let typewriter = new Typewriter(introText, {
        strings: true
      });
      let text = ``;
      if ( i === 4 ){
        text = `결국 연구원님은 새로운 장소에서 향에 대한`;
      } else if ( i === 5 ){
        text = `영감을 얻기 위해 여행을 떠나고자 합니다`;
      } else if ( i === 6 ){
        text = `그 곳은 어떤 나라일까요?`;
      }
      (function(x){
        setTimeout(function(){
          typewriter.typeString(text)
            .pauseFor(1000)
            .start();
        }, 1200*(x-3));
      })(i);
      $('.typewriter-cursor').hide();
      }
  }

  let scrollNum = 0;
  // 스크롤 이벤트
  $('#intro1').on('mousewheel',function(e){
    var wheel = e.originalEvent.wheelDelta;
    if(wheel > 0){ //스크롤 올릴때
    } else {  //스크롤  내릴때
      scrollNum = scrollNum + 1 ;
      if( scrollNum === 1 ){
        runText();
        scrollNum = 1;
      }
      let offset = $("#intro2").offset();
      $('#intro1, .scroll_arrow').animate({opacity:0},1000);
      $('html, body').animate({scrollTop : offset.top}, 1300);
      $("#intro2").delay(500).animate({opacity:1},1000);

    }
  });
  $('#intro2').on('mousewheel',function(e){
    var wheel = e.originalEvent.wheelDelta;
    if(wheel > 0){ //스크롤 올릴때
      let offset = $("#intro1").offset();
      $('#intro2').animate({opacity:0},600);
      $('html, body').animate({scrollTop : offset.top}, 1000);
      $("#intro1, .scroll_arrow").delay(500).animate({opacity:1},400);
    } else {  //스크롤  내릴때
    }
  });

  //호버 이벤트
  $('#btn_fabric_start').mouseenter(function(){
    $(this).css("cursor","pointer").animate({ top : '1716px'},200).css('box-shadow', '0px 12px 30px rgba(72, 143, 247, 0.15');
  });
  $('#btn_fabric_start').mouseleave(function(){
    $(this).animate({top : '1722px'},300).css('box-shadow', '0px 8px 15px rgba(72, 143, 247, 0.15)');
  })

  // 클릭 이벤트
  $('#btn_fabric_start').click(function(){
    let offset = $("#intro1").offset();
    $('html, body').animate({scrollTop : offset.top}, 1000);
    $('#intro1, #intro2').hide(500);
    $('#intro_logo, .introBgDeco').animate({opacity:'0'},300).delay(300).hide(500);
    setTimeout(() => {
      goNext();
    }, 500);
    });
}

$(window).resize(setImgSize);

window.addEventListener('DOMContentLoaded', function () {
  $('#intro_logo, .scroll_arrow, .introBgDeco').css('opacity','0');
  $('#test_area, #result, #result_detail, #intro1, #intro2').hide();
  setImgSize();
  goIntro();
  // goNext();
  // goResult();
})
