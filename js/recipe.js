$("#project").click(function(){
  setTimeout(() => {
    window.open(`http://thisplay.hongikdmd.com/html/dh/works_view?idx=71&cate_no=3`);
}, 200);
})
//마우스 호버
$('#logo, .nav, .toggle, #home, #project , #footerLogo').css("cursor","pointer");
// 스크린 사이즈 계산
let screenHeight = 0;
let screenWidth = 0;
const setImgSize = () => {
  screenWidth = window.innerWidth;
  screenHeight = window.innerHeight;
  document.body.style.width = screenWidth;
  console.log('width :   ' + screenWidth);
  console.log('height :   ' + screenHeight);
}
const select = [];
const laundrySection = document.getElementById('laundry_recipe');
const fabricSection = document.getElementById('fabric_recipe');
let laundry_info = laundry_qnaList[0];


const goFabric = (f_title, f_name, description, scent, top, middle, bottom, single, topColor, middleColor, bottomColor, product, f_color, f_gradient, bubble_color, bg_gradient, idx) => {

  let string = f_title;
  let strArray = string.split(' ');

  // 박스 배경
  let box_div = document.createElement('div');
  box_div.className = "recipe_box";
  $(box_div).css({background : f_color}).css("cursor","pointer");
  // 이미지
  const fabric_img = document.createElement('img');
  fabric_img.src = 'img/recipe/fabric/' + f_name +'.png';
  fabric_img.className = "recipe_img";
  box_div.appendChild(fabric_img);
  // 큰 텍스트
  const fabric_title = document.createElement('div');
  fabric_title.className = "recipe_title";
  $(fabric_title).text(strArray[0]);
  box_div.appendChild(fabric_title);
  // 작은 텍스트
  const fabric_title_s = document.createElement('div');
  fabric_title_s.className = "recipe_title_s";
  $(fabric_title_s).text(strArray[1]);
  box_div.appendChild(fabric_title_s);
  // 화이트
  let white_box = document.createElement('div');
  white_box.className = "white_box";
  $(white_box).css({background: f_gradient});
  box_div.appendChild(white_box);

  fabricSection.appendChild(box_div);

  // 호버
  $(box_div).hover(function(){
    $(this).css('box-shadow', '0px 12px 30px 1px rgba(95, 157, 248, 0.15)');
    $(this).find('.white_box').animate({opacity : '0'}, 300);
  }, function(){
    $(this).css('box-shadow', '0px 2px 2px rgba(72, 143, 247, 0.05), 0px 10px 13px 2px rgba(72, 143, 247, 0.07)');
    $(this).find('.white_box').animate({opacity : '1'}, 300);
  });

  // 클릭 이벤트 - 모달
  $(box_div).click(function(event) {
      event.preventDefault();
      const modal = document.createElement('div');
      $(modal).css('height', '4392px').css('opacity', '0');
      // 상단부분
      let top_area = document.createElement('section');
      modal.appendChild(top_area);
      let top_bg_box = document.createElement('div');
      top_bg_box.className = 'top_bg_box';
      $(top_bg_box).css({background: bg_gradient});
      top_area.appendChild(top_bg_box);
      let top_bg_img = document.createElement('img');
      top_bg_img.src = 'img/recipe/fabric/top/' + f_name + '.png';
      top_bg_box.appendChild(top_bg_img);
      let top_white_box = document.createElement('div');
      top_white_box.className = 'top_white_box';
      top_bg_box.appendChild(top_white_box);

      let bubble_square = document.createElement('img');
      bubble_square.src = 'img/fabric/result/bubble/' + f_name + '.png';
      bubble_square.className = 'bubble_square';
      top_white_box.appendChild(bubble_square);

      let top_title = document.createElement('p');
      top_title.className = 'top_title top_p_color';
      top_title.innerHTML = f_title ;
      top_white_box.appendChild(top_title);
      // 노트 설명
      const top_note = document.createElement('div');
      if ( top === '' ){
          let top_note_div = document.createElement('div');
          top_note_div.className = 'top_note_div';
          top_note.appendChild(top_note_div);
          let top_dot_line = document.createElement('div');
          top_dot_line.className = 'top_dot_line';
          top_note_div.appendChild(top_dot_line);
          let top_note_value = document.createElement('p');
          top_note_value.className = 'top_note_value';
          top_note_value.innerHTML = 'SINGLE NOTE'
          top_note_div.appendChild(top_note_value);
          let top_note_elements = document.createElement('p');
          top_note_elements.className = 'top_note_elements';
          top_note_elements.innerHTML = single;
          top_note_div.appendChild(top_note_elements);
          $(top_note).css('top', '242px');

      } else {
        const noteList = ['TOP NOTE', 'MIDDLE NOTE', 'BOTTOM NOTE'];
        for (let i = 0 ; i < 3 ; i++) {
          let top_note_div = document.createElement('div');
          top_note_div.className = 'top_note_div';
          top_note.appendChild(top_note_div);
          let top_dot_line = document.createElement('div');
          top_dot_line.className = 'top_dot_line';
          top_note_div.appendChild(top_dot_line);
          let top_note_value = document.createElement('p');
          top_note_value.className = 'top_note_value';
          top_note_value.innerHTML = noteList[i];
          top_note_div.appendChild(top_note_value);
          let top_note_elements = document.createElement('p');
          top_note_elements.className = 'top_note_elements';
          if ( i === 0 ){
            $(top_note_elements).text(top);
          } else if ( i === 1 ){
            $(top_note_elements).text(middle);
          } else if ( i === 2 ){
            $(top_note_elements).text(bottom);
          }
          top_note_div.appendChild(top_note_elements);
        }
      }
      top_note.className = 'top_note';
      top_white_box.appendChild(top_note);

      let top_scent = document.createElement('div');
      top_scent.className = 'top_scent top_p_color';
      top_scent.innerHTML = '<p>' + scent + '</p>';
      top_white_box.appendChild(top_scent);

      let top_scent_bar = document.createElement('div');
      top_scent_bar.className = 'top_scent_bar';
      $(top_scent_bar).css({background :`linear-gradient(180deg, ${topColor} 0%, ${middleColor} 51.56%, ${bottomColor} 95.83%)`});
      top_white_box.appendChild(top_scent_bar);

      let top_product  = document.createElement('p');
      top_product.innerHTML = '비슷한 향 제품 - ' + product;
      top_product.className = 'top_product top_p_color'
      top_white_box.appendChild(top_product);

      let top_description = document.createElement('div');
      top_description.innerHTML = '<p>' + description + '</p>';
      top_description.className = 'top_description';
      top_area.appendChild(top_description);

      // 재료 확인 영역
      let metarial_area = document.createElement('section');
      metarial_area.className = 'modal_metarial_area';
      $(metarial_area).css({top : '1000px'});
      modal.appendChild(metarial_area);
      let metarial_qBox = document.createElement('div');
      metarial_qBox.className = 'modal_metarial_bubble';
      modal.appendChild(metarial_qBox);
      let lab_bubble = document.createElement('img');
      lab_bubble.src = 'img/Bubble_lap.png';
      lab_bubble.className ='lab_bubble';
      metarial_qBox.appendChild(lab_bubble);

      let metarial_text = document.createElement('p');
      metarial_text.innerHTML = '천연 섬유유연제 재료';
      metarial_text.className = 'modal_metarial_text';
      metarial_qBox.appendChild(metarial_text);
      $(metarial_qBox).css('top', '850px');

      for ( let i = 0 ; i < 5; i++ ){
        let metarial_box = document.createElement('div');
        metarial_box.className = 'modal_metarial_box';
        metarial_area.appendChild(metarial_box);
        $(metarial_box).css('height', '373px');

        let metarial_name = document.createElement('p');
        metarial_name.className = 'material_name';
        metarial_name.innerHTML = fbMetarialList[i].name;
        $(metarial_name).css('margin' , '40px auto 0 auto');
        metarial_box.appendChild(metarial_name);

        let metarial_volume = document.createElement('p');
        metarial_volume.className = 'material_volume volumeNum'+i;
        metarial_volume.innerHTML =  fbMetarialList[i].volume;
        metarial_box.appendChild(metarial_volume);

        let metarial_img_div = document.createElement('div');
        let metarial_img = document.createElement('img');
        if ( i === 0 ){
          metarial_img.src = 'img/recipe/material/water.png';
        } else {
          metarial_img.src = 'img/recipe/material/fb_' + ( i - 1) + '.png';
        }
        metarial_img_div.className = `m_img${i}`;
        $(metarial_img_div).css('width','134px').css('left', '50%').css('margin-top', '130px');
        metarial_img_div.appendChild(metarial_img);
        metarial_box.appendChild(metarial_img_div);

        let metarial_desc = document.createElement('div');
        metarial_desc.className = 'metarial_desc';
        metarial_desc.innerHTML = fbMetarialList[i].text;
        $(metarial_desc).css({width : '466px'}).css('margin-top','15px');
        metarial_box.appendChild(metarial_desc);
      }

      // 만들기 영역
      let making_area = document.createElement('section');
      making_area.className = 'making_area';
      $(making_area).css({ top : '3350px'});
      modal.appendChild(making_area);

      let metarial_qBox_2 = document.createElement('div');
      metarial_qBox_2.className = 'modal_metarial_bubble';
      making_area.appendChild(metarial_qBox_2);
      let lab_bubble_2 = document.createElement('img');
      lab_bubble_2.src = 'img/Bubble_lap.png';
      lab_bubble_2.className ='lab_bubble';
      metarial_qBox_2.appendChild(lab_bubble_2);
      let metarial_text_2 = document.createElement('p');
      metarial_text_2.innerHTML = '천연 섬유유연제 만드는 법';
      metarial_text_2.className = 'modal_metarial_text';
      metarial_qBox_2.appendChild(metarial_text_2);
      $(metarial_qBox_2).css('top', '0px');

      const modal_making_box_area_2 = document.createElement('div');
      modal_making_box_area_2.className = 'modal_making_box_area';
      making_area.appendChild(modal_making_box_area_2);
      for ( let i = 0 ; i < 4 ; i++ ){
        const making_color_2 = ['#EEF3FF', '#F4F1FF', '#F9F3E6', '#EDF8F4']
        const modal_making_box_2 = document.createElement('div');
        modal_making_box_2.className = 'modal_making_box';
        $(modal_making_box_2).css({ background : making_color_2[i]});
        modal_making_box_area_2.appendChild(modal_making_box_2);
        // 번호
        const modal_box_num_2 = document.createElement('p');
        modal_box_num_2.innerHTML = ( i + 1) + '.';
        modal_box_num_2.className = 'modal_box_num';
        modal_making_box_2.appendChild(modal_box_num_2);
        // 이미지
        const modal_making_img_2 = document.createElement('img');
        modal_making_img_2.src = 'img/recipe/fabric/making/making' + i + '.png';
        modal_making_img_2.className = 'modal_making_img';
        modal_making_box_2.appendChild(modal_making_img_2);
        //텍스트 68px
        const modal_making_text_2 = document.createElement('p');
        modal_making_text_2.className = 'modal_making_text';
        modal_making_text_2.innerHTML = making_fabric_list[i];
        modal_making_box_2.appendChild(modal_making_text_2);
      }


      document.body.appendChild(modal);
      //모달 실행
      $(modal).modal({
        fadeDuration: 250
      });
      setTimeout(()=> {
        $(modal).css('opacity', '1');

        if (f_name === 'swis'){
          $('.top_p_color').css('color', '#606060');
          $('.top_scent').css({border : '1px solid #606060'});
        }

        for (let i = 0 ; i < 5 ; i++){
          // 머테리얼 박스 > 볼륨 가운데
          let width = $(`.volumeNum${i}`).outerWidth();
          width = (width*0.5);
          $(`.volumeNum${i}`).css('margin-top', '82px').css('margin-left', `-${width}px`);
          // 이미지
          width = $(`.m_img${i}`).outerWidth();
          width = 369 - ( width*0.5);
          $(`.m_img${i}`).css('margin-left', width);
          // 재료 설명
          width = $('.metarial_desc').outerWidth();
          width = 369 - ( width*0.5);
          $('.metarial_desc').css('margin-left', width);
        }

      },300);

      $('.modal').remove();
    });


}

const goLaundry = (title, title_s, name, r_description, icon, iconText, idx) => {

  let color = '';
  let gradient = ''
  if (name === 'a1') {
    color = '#FCF0F0';
    gradient = 'linear-gradient(180deg, rgba(252, 240, 240, 0) 38.54%, rgba(252, 240, 240, 0.8) 100%)';
  } else if (name === 'a3'){
    color = '#F5F3FE';
    gradient = 'linear-gradient(180deg, rgba(245, 243, 254, 0) 38.54%, rgba(245, 243, 254, 0.8) 100%)';
  }
  // 박스 배경
  let box_div = document.createElement('div');
  box_div.className = "recipe_box";
  $(box_div).css({background : color}).css("cursor","pointer");
  // 이미지
  const laundry_img = document.createElement('img');
  laundry_img.src = 'img/recipe/laundry/' + name +'.png';
  laundry_img.className = "recipe_img";
  box_div.appendChild(laundry_img);
  // 큰 텍스트
  const laundry_title = document.createElement('div');
  laundry_title.className = "recipe_title";
  $(laundry_title).text(title);
  box_div.appendChild(laundry_title);
  // 작은 텍스트
  const laundry_title_s = document.createElement('div');
  laundry_title_s.className = "recipe_title_s";
  $(laundry_title_s).text(title_s);
  box_div.appendChild(laundry_title_s);
  // 화이트
  let white_box = document.createElement('div');
  white_box.className = "white_box";
  $(white_box).css({background: gradient});
  box_div.appendChild(white_box);

  laundrySection.appendChild(box_div);

  // 호버
  $(box_div).hover(function(){
    $(this).css('box-shadow', '0px 12px 30px 1px rgba(95, 157, 248, 0.15)');
    $(this).find('.white_box').animate({opacity : '0'}, 300);
  }, function(){
    $(this).css('box-shadow', '0px 2px 2px rgba(72, 143, 247, 0.05), 0px 10px 13px 2px rgba(72, 143, 247, 0.07)');
    $(this).find('.white_box').animate({opacity : '1'}, 300);
  });

  // 클릭 이벤트 - 모달
  $(box_div).click(function(event) {
      event.preventDefault();
      //모달 이미지 영역
      const modal = document.createElement('div');
      $(modal).css('opacity', '0');
      if (name === 'a3') {
        $(modal).css('height', '4846px');
      }
      const modal_bg = document.createElement('div');
      modal_bg.className = 'modal_bg';
      modal.appendChild(modal_bg);

      // 제목
      const modal_title = document.createElement('div');
      modal_title.className = 'modal_title';
      modal.appendChild(modal_title);
      const bubble = document.createElement('img');
      bubble.src = 'img/Bubble_report_round.png';
      bubble.className = 'bubble';
      modal_title.appendChild(bubble);
      const modal_title_p = document.createElement('p');
      modal_title_p.className = 'modal_title_p';
      modal_title_p.innerHTML = title_s+'용 세탁세제';
      modal_title.appendChild(modal_title_p);
      // 탑이미지
      const modal_img = document.createElement('img');
      modal_img.src = 'img/recipe/laundry/top/' + name + '.png';
      modal_img.className = 'modal_img';
      modal.appendChild(modal_img);
      // 설명 텍스트
      const modal_text = document.createElement('div');
      modal_text.className = 'modal_text';
      const modal_text_p = document.createElement('p');
      modal_text_p.className = 'modal_text_p';
      modal_text_p.innerHTML = r_description;
      modal_text.appendChild(modal_text_p);
      modal.appendChild(modal_text);
      // 세탁 주의사항
      const modal_icon_area = document.createElement('div');
      modal_icon_area.className = 'modal_icon_area';
      modal.appendChild(modal_icon_area);
      let icon_folder_num = 0;
      if ( name === 'a2' ) {
        icon_folder_num = 1;
      } else if ( name === 'a3') {
        icon_folder_num = 2;
      }
      for ( let i = 0 ; i < 3 ; i++ ){
        const modal_icon_box = document.createElement('div');
        modal_icon_box.className = 'modal_icon_box';
        modal_icon_area.appendChild(modal_icon_box);
        const modal_icon = document.createElement('img');
        modal_icon.src = 'img/laundry/result/icon/' + icon_folder_num + '/icon_' + ( i + 1 ) + '.png';
        modal_icon.className = 'modal_icon';
        modal_icon_box.appendChild(modal_icon);
        const modal_icon_title = document.createElement('div');
        modal_icon_title.className = `modal_icon_title icon${i}`;
        modal_icon_title.innerHTML = icon[i];
        modal_icon_box.appendChild(modal_icon_title);
        const modal_icon_text = document.createElement('p');
        modal_icon_text.className = 'modal_icon_text';
        modal_icon_text.innerHTML = iconText[i];
        modal_icon_box.appendChild(modal_icon_text);
      }
      // 재료
      const modal_metarial_qBox = document.createElement('div');
      modal_metarial_qBox.className = 'modal_metarial_bubble';
      modal.appendChild(modal_metarial_qBox);
      let lab_bubble = document.createElement('img');
      lab_bubble.src = 'img/Bubble_lap.png';
      lab_bubble.className ='lab_bubble';
      modal_metarial_qBox.appendChild(lab_bubble);
      const modal_metarial_text = document.createElement('p');
      modal_metarial_text.innerHTML = title_s+'용 세탁세제 재료';
      modal_metarial_text.className = 'modal_metarial_text';
      modal_metarial_qBox.appendChild(modal_metarial_text);

      const modal_metarial_area = document.createElement('div');
      modal_metarial_area.className = 'modal_metarial_area';
      modal.appendChild(modal_metarial_area);

      for ( let i = 0 ; i < 4 ; i++) {
        let modal_metarial_box = document.createElement('div');
        modal_metarial_box.className = 'modal_metarial_box';
        modal_metarial_area.appendChild(modal_metarial_box);
        if ( i === 0 ){
          $(modal_metarial_box).css('height', '373px');
        }

        let material_name = document.createElement('p');
        material_name.className = 'material_name';
        material_name.innerHTML = laundryinfo_recipe[i].name;
        modal_metarial_box.appendChild(material_name);

        let material_volume = document.createElement('p');
        material_volume.className = 'material_volume volume'+ i;
        material_volume.innerHTML = laundryinfo_recipe[i].volume;
        modal_metarial_box.appendChild(material_volume);

        let material_img_div = document.createElement('div');
        const material_text_d_div = document.createElement('div');
        if ( i === 0) { // 재료 유형에 따라 레이아웃이 다르기에 if문으로 설정
          let material_img = document.createElement('img');
          material_img.src = 'img/recipe/material/water.png';
          material_img_div.appendChild(material_img);
        } else {
          for ( let n = 0 ; n < laundryinfo_recipe[i].name_d.length ; n++ ){
            let material_img = document.createElement('img');
            material_img.src = 'img/recipe/material/' + i + '_' + n + '.png';
            material_img_div.appendChild(material_img);
            //text_d 추가
            material_text_d = document.createElement('div');
            material_text_d.className = 'material_text_d';
            material_text_d.innerHTML = '<p>' + laundryinfo_recipe[i].name_d[n] + '</p>';
            material_text_d_div.appendChild(material_text_d);

          }
        }
        material_img_div.className = `material_img_div m_img${i}`;
        material_text_d_div.className = `material_text_d_div m_text_d${i}`;
        modal_metarial_box.appendChild(material_text_d_div);
        modal_metarial_box.appendChild(material_img_div);
        // text 추가
        let modal_metarial_description = document.createElement('p');
        modal_metarial_description.className = `modal_metarial_description  m_desc${i}`;
        if( i === 0 ){
          $(modal_metarial_description).css('width', '462px').css('margin-top', '287px');
        }
        modal_metarial_description.innerHTML = laundryinfo_recipe[i].description;
        modal_metarial_box.appendChild(modal_metarial_description);

        if ( i === 2 ){ // 구연산, 소금 추가
          if ( name === 'a3'){

          } else {
            let mName = '';
            let mVolume = '';
            let thisImg = '';
            let thisDescription = '';

            if (name === 'a1'){
              mName = laundryinfo_recipe[4].name;
              mVolume = laundryinfo_recipe[4].volume;
              thisImg = 'fb_0';
              thisDescription = laundryinfo_recipe[4].description;
            } else if ( name === 'a2'){
              // 소금 추가
              mName = '소금';
              mVolume = '1g | 1 밥숟가락';
              thisImg = '3_3';
              thisDescription = '소금은 옷의 색빠짐을 방지하는 효과가 있어 청바지의 색빠짐을 방지할 수 있어요';
            }
            let modal_metarial_box = document.createElement('div');
            modal_metarial_box.className = 'modal_metarial_box';
            $(modal_metarial_box).css('height', '373px');
            modal_metarial_area.appendChild(modal_metarial_box);

            let material_name = document.createElement('p');
            material_name.className = 'material_name';
            material_name.innerHTML = mName;
            modal_metarial_box.appendChild(material_name);

            let material_volume = document.createElement('p');
            material_volume.className = 'material_volume volume0';
            material_volume.innerHTML = mVolume;
            modal_metarial_box.appendChild(material_volume);

            let material_img_div = document.createElement('div');
            let material_img = document.createElement('img');
            material_img.src = 'img/recipe/material/'+ thisImg + '.png';
            material_img_div.appendChild(material_img);
            material_img_div.className = `material_img_div m_img0`;
            modal_metarial_box.appendChild(material_img_div);

            let modal_metarial_description = document.createElement('p');
            modal_metarial_description.className = `modal_metarial_description  m_desc0`;
            $(modal_metarial_description).css('width', '462px').css('margin-top', '287px');
            modal_metarial_description.innerHTML = thisDescription;
            modal_metarial_box.appendChild(modal_metarial_description);
          }
        }

        if ( i === 3 ){ // 추가재료
          $(material_name).css('margin', '40px auto');
          $(modal_metarial_box).css('height', '420px');
          $(material_img_div).remove();
          $(material_text_d_div).remove();
          $(material_volume).remove();
          $(modal_metarial_description).remove();

          let add_area = document.createElement('div');
          add_area.className = 'add_area';
          modal_metarial_box.appendChild(add_area);
          let addList = laundryinfo_recipe[3];
          let iNum = laundryinfo_recipe[3].name_d.length;
          if (name === 'a2'){ iNum = iNum - 1;}
          for ( let i = 0 ; i < iNum ; i++){
            let add_div = document.createElement('div');
            add_div.className = 'add_div';
            add_area.appendChild(add_div);

            add_area.appendChild(add_div);
            let add_img = document.createElement('img');
            add_img.src = 'img/recipe/material/3_' + i + '.png';
            $(add_img).css('margin', '0 auto');
            add_div.appendChild(add_img);

            let add_name = document.createElement('p');
            add_name.innerHTML = addList.name_d[i];
            add_name.className = 'add_name';
            add_div.appendChild(add_name);

            let add_volume = document.createElement('p');
            add_volume.innerHTML = addList.volume[i];
            add_volume.className = 'add_volume';
            add_div.appendChild(add_volume);

            let add_description = document.createElement('p');
            add_description.innerHTML = addList.description[i];
            add_description.className = 'add_description';
            add_div.appendChild(add_description);
          }

        }

      }
      // 만드는법
      const laundry_making_area = document.createElement('div');
      laundry_making_area.className = 'making_area';
      if (name === 'a3') {
        $(laundry_making_area).css('top', '3736px');
      }
      modal.appendChild(laundry_making_area);
      const modal_making_qBox = document.createElement('div');
      modal_making_qBox.className = 'modal_making_qBox';
      laundry_making_area.appendChild(modal_making_qBox);
      let lab_bubble_2 = document.createElement('img');
      lab_bubble_2.src = 'img/Bubble_lap.png';
      lab_bubble_2.className ='lab_bubble';
      modal_making_qBox.appendChild(lab_bubble_2);
      const modal_making_qtext = document.createElement('p');
      modal_making_qtext.innerHTML = title_s+'용 세탁세제 만드는 법';
      modal_making_qtext.className = 'modal_metarial_text';
      modal_making_qBox.appendChild(modal_making_qtext);
      const modal_making_box_area = document.createElement('div');
      modal_making_box_area.className = 'modal_making_box_area';
      laundry_making_area.appendChild(modal_making_box_area);
      for ( let i = 0 ; i < 4 ; i++ ){
        const making_color = ['#EEF3FF', '#F4F1FF', '#F9F3E6', '#EDF8F4']
        const modal_making_box = document.createElement('div');
        modal_making_box.className = 'modal_making_box';
        $(modal_making_box).css({ background : making_color[i]});
        modal_making_box_area.appendChild(modal_making_box);
        // 번호
        const modal_box_num = document.createElement('p');
        modal_box_num.innerHTML = ( i + 1) + '.';
        modal_box_num.className = 'modal_box_num';
        modal_making_box.appendChild(modal_box_num);
        // 이미지
        const modal_making_img = document.createElement('img');
        modal_making_img.src = 'img/recipe/laundry/making/making' + i + '.png';
        modal_making_img.className = 'modal_making_img';
        modal_making_box.appendChild(modal_making_img);
        //텍스트 68px
        const modal_making_text = document.createElement('p');
        modal_making_text.className = 'modal_making_text';
        modal_making_text.innerHTML = making_laundry_list[i];
        modal_making_box.appendChild(modal_making_text);
        if ( i === 0 ){
          //서브텍스트 삽입
          $(modal_making_text).css({width : '210px', margin : '292px 0 0 68px'});
          const modal_making_subText = document.createElement('p');
          modal_making_subText.className = 'modal_making_subText';
          modal_making_subText.innerHTML = '※ 기포가 올라오는 것은 자연스러운 현상입니다';
          modal_making_box.appendChild(modal_making_subText);
        }
      }

      document.body.appendChild(modal);
      //모달 실행
      $(modal).modal({
        fadeDuration: 250
      });
      setTimeout(()=> {
        $(modal).css('opacity', '1');

        for (let i = 0 ; i < 3 ; i++){
          // icon_title 가운데
          let i_width = $(`.icon${i}`).outerWidth();
          i_width = 98.5 - (i_width*0.5);
          $(`.icon${i}`).css('margin-left', i_width);
          // 용량 가운데
          let v_width = $(`.volume${i}`).outerWidth();
          v_width = (v_width*0.5);
          $(`.volume${i}`).css('margin-top', '72px').css('margin-left', `-${v_width}px`);
          // 재료 이미지 가운데
          let m_width = $(`.m_img${i}`).outerWidth();
          m_width = 369 - (m_width*0.5);
          $(`.m_img${i}`).css('margin-left', m_width);
          // 재료 이름 가운데
          let td_width = $(`.m_text_d${i}`).outerWidth();
          td_width = 369 - (td_width*0.5);
          $(`.m_text_d${i}`).css('margin-left', td_width);
          // 데스트립션 가운데
          let width = $(`.m_desc${i}`).outerWidth();
          width = 369 - (width*0.5);
          $(`.m_desc${i}`).css('margin-left', width);
          // 추가재료 가운데
          width = $('.add_area').outerWidth();
          width = 369 - (width*0.5);
          $('.add_area').css('margin-left', width);
        }

      },300);

      $('.modal').remove();
    });

}

const showFabric = () => {
  $('#toggle_laundry').css({background: '#FFFFFF',color:'#5F9DF8'});
  $('#toggle_img_laundry').find('.st0').css('fill', '#5F9DF8');
  $('#toggle_fabric').css({background: '#5F9DF8',color:'#FFFFFF'});
  $('#toggle_img_fabric').find('.st0').css('fill', '#fff');
  $("#footer_recipe").css({top : '2150px'});
  $(laundrySection).hide();
  $(fabricSection).show(0);
}

const showLaundry = () => {
  $('#toggle_laundry').css({background: '#5F9DF8',color:'#FFFFFF'});
  $('#toggle_img_laundry').find('.st0').css('fill', '#fff');
  $('#toggle_fabric').css({background: '#FFFFFF',color:'#5F9DF8'});
  $('#toggle_img_fabric').find('.st0').css('fill', '#5F9DF8');
  $("#footer_recipe").css({top : '969px'});
  $(fabricSection).hide();
  $(laundrySection).show(0);
}

// 토글 클릭버튼
$('#toggle_laundry').click(function() {
  showLaundry();
});
$('#toggle_fabric').click(function() {
  showFabric();
});

$(window).resize(setImgSize);

window.addEventListener('DOMContentLoaded', function () {
  $('#laundry_recipe, #fabric_recipe').hide();
  setImgSize();
  for (let i in laundry_info.a) {
    goLaundry(laundry_info.a[i].answer, laundry_info.a[i].answer_d, laundry_info.a[i].name, laundry_infoList[i].r_description, laundry_infoList[i].icon, laundry_infoList[i].iconText, i);
  }
  for (let i in fabric_infoList) {
    goFabric(fabric_infoList[i].title, fabric_infoList[i].name,fabric_infoList[i].description ,fabric_infoList[i].scent ,fabric_infoList[i].top, fabric_infoList[i].middle, fabric_infoList[i].bottom, fabric_infoList[i].single, fabric_infoList[i].topColor, fabric_infoList[i].middleColor, fabric_infoList[i].bottomColor, fabric_infoList[i].product, fabric_infoList[i].r_color, fabric_infoList[i].r_gradient,fabric_infoList[i].bubble_color, fabric_infoList[i].bg_gradient ,i);
  }
  setTimeout(() =>{
    showLaundry();
  },200);
})
