const selectList = [
  { name: 'laundry', description: '세탁세제 연구실', width: '258px' , shadow: 'rgba(80, 98, 255, 0.3)'},
  { name: 'fabric', description: '섬유유연제 연구실', width: '277px', shadow: 'rgba(255, 164, 80, 0.3)'},
  { name: 'recipe', description: '레시피 저장소', width: '243px', shadow: 'rgba(252, 255, 80, 0.3)'}
]

const laundry_qnaList = [
  { // 1번 질문
    q: '어떤 옷감을 연구해볼까요?',
    a: [
      { answer : '폴리에스테르', answer_d : '블라우스', name: 'a1', color: '#5F9DF8', left: '441px', volume : '', explanation : '', link : ''},
      { answer : '데님', answer_d : '청바지', name: 'a2', color: '#AE99F8', left: '806px', volume : '', explanation : '', link : ''},
      { answer : '면', answer_d : '맨투맨', name: 'a3', color: '#FDC178', left: '1171px', volume : '', explanation : '', link : ''}
    ]
  },
  { // 2번 질문
    q: '옷의 때를 제거해줄 소다 재료를 선택해주세요',
    a: [
      { answer : '베이킹소다', answer_d : '', name: 'a1', color: '#5F9DF8', left: '441px' , volume : '3g | 3 티스푼', explanation : '표백력은 없지만 순한 성분으로 오염을 제거하는 천연 세정제', link : 'https://search.shopping.naver.com/search/all?query=%EB%B2%A0%EC%9D%B4%ED%82%B9%EC%86%8C%EB%8B%A4&frm=NVSHATC&prevQuery=%EC%A0%95%EC%A0%9C%EC%88%98'},
      { answer : '탄산소다', answer_d : '', name: 'a2', color: '#AE99F8', left: '806px' , volume : '3g | 3 티스푼', explanation : '표백력과 세정력의 적절한 밸런스를 지닌 천연 세정제', link : 'https://search.shopping.naver.com/search/all?query=%ED%83%84%EC%82%B0%EC%86%8C%EB%8B%A4&frm=NVSHATC&prevQuery=%EB%B2%A0%EC%9D%B4%ED%82%B9%EC%86%8C%EB%8B%A4'
    },
      { answer : '과탄산소다', answer_d : '', name: 'a3', color: '#FDC178', left: '1171px', volume : '3g | 3 티스푼', explanation : '옷감이 손상될 수 있으나 강력한 표백력과 세정력을 지닌 천연 세정제', link : 'https://search.shopping.naver.com/search/all?query=%EA%B3%BC%ED%83%84%EC%82%B0%EC%86%8C%EB%8B%A4&frm=NVSHATC&prevQuery=%EA%B3%BC%ED%83%84%EC%82%B0%EC%86%8C%EB%8B%A4'
     }
    ]
  },
  { // 3번 질문
    q: '옷의 때를 제거해줄 계면활성제를 선택해주세요',
    a: [
      { answer : '데실', answer_d : '', name: 'a1', color: '#5F9DF8', left: '441px', volume : ' 47g | 1 소주잔', explanation : '피부에 자극이 없는 아주 순한 계면활성제'
     , link : 'https://search.shopping.naver.com/search/all?query=%EB%8D%B0%EC%8B%A4%EA%B8%80%EB%A3%A8%EC%BD%94%EC%82%AC%EC%9D%B4%EB%93%9C&frm=NVSHATC&prevQuery=%EB%8D%B0%EC%8B%A4%EA%B8%80%EB%A3%A8%EC%BD%94%EC%82%AC%EC%9D%B4%EB%93%9C'},
      { answer : '코코베타인',answer_d : '', name: 'a2', color: '#AE99F8', left: '806px', volume : ' 47g | 1 소주잔', explanation : '코코넛에서 추출한 재료로 만들어진 계면활성제'
     , link : 'https://search.shopping.naver.com/search/all?query=%EC%BD%94%EC%BD%94%EB%B2%A0%ED%83%80%EC%9D%B8&frm=NVSHATC&prevQuery=%EC%BD%94%EC%BD%94%EB%B2%A0%ED%83%80%EC%9D%B8'},
      { answer : '애플워시', answer_d : '', name: 'a3', color: '#FDC178', left: '1171px', volume : ' 47g | 1 소주잔', explanation : '사과즙에서 얻은 필수아미노산을 아실화 시켜 만든 계면활성제', link : 'https://search.shopping.naver.com/search/all?query=%EC%95%A0%ED%94%8C%EC%9B%8C%EC%8B%9C&frm=NVSHATC&prevQuery=%EC%95%A0%ED%94%8C%EC%9B%8C%EC%8B%9C'
     }
    ]
  },
  { // 4번 질문
    q: '마지막으로 원하는 추가재료를 선택해보세요!',
    a: [
      { answer : '나프리', answer_d : '보존효과', name: 'a1', color: '#5F9DF8', left: '254px', volume : '0.2g | 1 티스푼', explanation : '산초, 백두홍, 이끼 등의 천연 식물에서 추출한 천연 방부제', link : 'https://search.shopping.naver.com/search/all?query=%EB%82%98%ED%94%84%EB%A6%AC&frm=NVSHATC&prevQuery=%EB%82%98%ED%94%84%EB%A6%AC'
    },
      { answer : '편백오일', answer_d : '향균효과', name: 'a2', color: '#AE99F8', left: '619px', volume : '0.2g | 1 티스푼', explanation : '향균·살균작용이 뛰어나며 물에 닿으면 잡냄새를 잡아줌', link : 'https://search.shopping.naver.com/search/all?query=%ED%8E%B8%EB%B0%B1%EC%98%A4%EC%9D%BC&frm=NVSHATC&prevQuery=%ED%8E%B8%EB%B0%B1%EC%98%A4%EC%9D%BC'
    },
      { answer : 'EM발효액', answer_d : '세정 및 표백효과 증대', name: 'a3', color: '#FDC178', left: '984px', volume : '5g | 1 티스푼', explanation : '유용미생물균으로 묵은 때 제거에 탁월함', link : 'https://search.shopping.naver.com/search/all?query=EM%20%EB%B0%9C%ED%9A%A8%EC%95%A1&frm=NVSHATC&prevQuery=EM%20%EB%B0%9C%ED%9A%A8%EC%95%A1'
    },
      { answer : '소금', answer_d : '색빠짐 방지', name: 'a4', color: '#FFB0C8', left: '1350px', volume : '1g | 1 밥숟가락', explanation : '세탁 시 옷의 색빠짐을 방지해줌', link : ''
    }
    ]
  }
]

const laundry_infoList = [
  {
    name: '폴리에스테르',
    title: '블라우스용 세탁세제',
    description: '세정력은 약하지만 옷감 손상이 적은 블라우스용 세탁세제를 연구했습니다. 블라우스의 옷감인 폴리에스테르는 내구성이 좋고 가볍고 구김이 잘 가지 않지만 세탁 시 주의가 필요한 옷감이랍니다',
    icon : ['중성세제', '30도 이하 세탁', '그늘건조'],
    iconText : ['중성 세제는 옷감 손상을 줄여준 답니다 단 과도한 사용은 금물!',
    '30도 이상의 물 온도는 옷감의 수축 및 변형을 유발할 수 있어요',
    '햇빛은 색을 변형시킬 수 있어 통풍이 잘 되는 그늘에 말려주세요'],
    r_description : `블라우스용 세탁세제 연구자료입니다. 블라우스의 옷감인 폴리에스테르는 내구성이 좋고 가볍고 구김이 잘 가지 않지만 세탁 시 주의가 필요한 옷감이랍니다`,
    save : 'https://drive.google.com/file/d/1Oi_gMR5Q_74JjLclNt1Y6g0U6p7NmU4E/view?usp=sharing'
  },
  {
    name: '데님',
    title: '청바지용 세탁세제',
    description: '강한 세정력, 살균 효과를 지닌 청바지용 세탁세제를 연구했습니다. 질기고 견고한 원단의 데님은 실생활에 보편적으로 사용되는 옷감으로 세탁 시 색빠짐에 주의가 필요해요',
    icon: ['단독세탁', '찬물세탁', '그늘건조'],
    iconText : ['물이 빠지기 쉬우므로 다른 의류와 별도로 세탁하세요',
    '따뜻한 물에 세탁할 경우 데님의 인디고 색상이 탈색될 수 있어요',
    '햇빛은 색을 변형시킬 수 있어 통풍이 잘 되는 그늘에 말려주세요'],
    r_description : `청바지용 세탁세제를 연구자료입니다. 질기고 견고한 원단의 데님은 실생활에 보편적으로 사용되는 옷감으로 세탁 시 색빠짐에 주의가 필요해요`,
    save : 'https://drive.google.com/file/d/1SOOQHEP2g42QX-Ku23XdPvTmFsu759qC/view?usp=sharing'
  },
  {
    name: '면',
    title: '면용 세탁세제',
    description: `강한 세정력, 약한 피부자극을 가진 면용 세탁세제를 연구했습니다. 면은 보편적으로 옷감에 많이 쓰이며 가볍고 내구성이 좋지만 잦은 세탁 시 손상이 가기 쉬우니 주의해주세요`,
    icon : ['중성세제', '비틀어짜기 금지', '손세탁'],
    iconText : ['중성 세제는 옷감 손상을 줄여준 답니다\n 단 과도한 사용은 금물!',
    '옷감에 압력을 가하면 손상될 수 있으니 주의하세요',
    '손세탁은 옷감 손상을 방지하고 옷을 오래 입을 수 있게 해줍니다'],
    r_description : `면용 세탁세제 연구자료입니다. 면은 보편적으로 옷감에 많이 쓰이며 가볍고 내구성이 좋지만 잦은 세탁 시 손상이 가기 쉬우니 주의해주세요`,
    save : 'https://drive.google.com/file/d/1symxquM2r3C2KgnP085_SVgk1ke5AA_R/view?usp=sharing'
  }
]

const laundryinfo_recipe = [
  {
    name : '정제수',
    name_d : '',
    volume : '47g | 1 소주잔',
    description : '불순물이 없는 순수한 물로 피부자극, 알러지를 유발하지 않아요 다양한 성분을 포함한 워터류로 대체할 수 있어요'
  },
  {
    name : '소다류',
    name_d : ['베이킹소다', '탄산소다', '과탄산소다'],
    volume : '3g | 3 티스푼',
    description : `세정력과 표백력을 지니고 있는 천연 재료로 순한 성분과 함께 옷의 때를 지워줘요`
  },
  {
    name : '계면활성제류',
    name_d : ['데실', '코코베타인', '애플워시'],
    volume : '50g | 1 소주잔',
    description : '옷과 오염물을 분리해주는 역할을 할 뿐만 아니라 정전기 방지와 옷을 부드럽게 해줘요'
  },
  {
    name : '추가 재료',
    name_d : ['나프리', '동백오일', 'EM발효액', '소금'],
    volume : ['0.2g | 1 티스푼', '0.2g | 1 티스푼', '5g | 1 티스푼', '1g | 1 밥숟가락'],
    description : ['천연 방부제', '향균·살균 작용', '묵은 때 제거', '색빠짐 방지']
  },
  {
    name : '구연산',
    name_d : '',
    volume : '0.6g | 0.5 티스푼',
    description : '약알칼리성인 소다류에 섞어 중성 농도를 맞추는 구연산에는 살균효과가 있으며 세탁 시 세정 효과를 높여줘요'
  },

]

const making_laundry_list = [
  '정제수 및 워터류에 선택한 소다류를 섞습니다',
  '내용물이 잘 섞였다면 선택한 계면활성제를 넣어 다시 잘 섞어줍니다',
  '기포가 사라진 후 선택한 추가 재료를 차례대로 넣어 잘 섞어줍니다',
  '기포가 사라질 때 까지 기다린 후 사용합니다',
]


const fabric_qnaList = [
  { // 1번 //
    q: '어떤 날씨의 나라로 갈까요?',
    a: [
      { answer: '여름나라', color: '#FBDDE0' , score: 2, name: 'a1' },
      { answer: '봄·가을나라', color: '#FFF0C9' , score: 4, name : 'a2' },
      { answer: '겨울나라', color: '#DAEBFF' , score: 6, name: 'a3' }
    ]
  },
  { // 2번 //
    q: '한적한 자연이 펼쳐진 나라는 어떤가요?',
    a: [
      { answer: '자연이 좋다', color: '#FFD3D8' , score: 2, name: 'a1' },
      { answer: '적당한 근교가 좋다', color: '#FFF0C9' , score: 4, name: 'a2' },
      { answer: '도시가 좋다', color: '#DEF4E5' , score: 6, name: 'a3' }
    ]
  },
  { // 3번 //
    q: '여행일정은 어떻게 할까요?',
    a: [
      { answer: '완벽하게 짠다', color: '#FFD3D8' , score: 2 , name: 'a1'},
      { answer: '유동적으로 짠다', color: '#E8E3FF' , score: 4, name: 'a2' },
      { answer: '계획은 필요없다', color: '#DAEBFF' , score: 6, name: 'a3' }
    ]
  },
  { // 4번 //
    q: '여행지의 분위기는 어땠으면 좋겠나요?',
    a: [
      { answer: '인싸들의 모임', color: '#DEF4E5' , score: 2, name: 'a1' },
      { answer: '적당한 스몰토크 쯤', color: '#FFD3D8' , score: 4, name:'a2' },
      { answer: '조용하고 적막한 분위기', color: '#FFF0C9' , score: 6, name: 'a3' }
    ]
  },
  { // 5번 //
    q: '바다가 있는 곳은 어떤가요?',
    a: [
      { answer: '가자마자 물에 빠진다', color: '#DAEBFF' , score: 2, name:'a1' },
      { answer: '모래사장에서만 논다', color: '#FFF0C9' , score: 4, name:'a2' },
      { answer: '바다보다는 산', color: '#DEF4E5' , score: 6, name: 'a3' }
    ]
  },
  { // 6번 //
    q: '여행지의 어떤 장소에서 영감을 얻을까요?',
    a: [
      { answer: '쇼핑센터와 맛집', color: '#FFD3D8' , score: 2, name:'a1' },
      { answer: '유적지', color: '#DAEBFF' , score: 4, name: 'a2' },
      { answer: '휴양지', color: '#DEF4E5' , score: 6, name: 'a3' }
    ]
  },
  { // 7번 //
    q: '숙소에서 나가기 전, 비가 오면 어떻게 할까요?',
    a: [
      { answer: '일정대로 진행한다', color: '#DDF8FF' , score: 2, name: 'a1' },
      { answer: '일정을 조금 수정한다', color: '#FFF0C9' , score: 4, name: 'a2' },
      { answer: '일정을 다 취소한다', color: '#FFD3D8' , score: 6, name: 'a3' }
    ]
  },
  {// 8번 //
    q: '여행일정 중 시간이 남았다면 무엇을 할까요?',
    a: [
      { answer: '페스티벌을 즐긴다', color: '#FFD3D8' , score: 2, name: 'a1' },
      { answer: '풍경사진을 찍는다', color: '#E8E3FF' , score: 4, name: 'a2' },
      { answer: '가볍게 산책한다', color: '#EEFFF5' , score: 6, name: 'a3' }
    ]
  }
]


const fabric_infoList = [
  {
    name: 'bolivia',
    title: '볼리비아 소금사막',
    description: '연구원님은 볼리비아 유우니의 소금사막에서 여행을 즐기며 얻은 영감으로 새로운 향을 연구해냈습니다 \n 상큼하게 다가오는 플로럴 향과 함께 이슬같은 촉촉한 향이 신비롭게 다가오다가도 우디향이 포근하게 감싸와 행복한 추억을 상기시키는 향을 담아내었습니다',
    scent: '플로럴 우디 향',
    top: '암브레이트·만다린',
    middle: '플로럴 노트·샌달우드',
    bottom: '시더우드·머스크·엠버',
    single: '',
    topColor: '#E1F6F8',
    middleColor: '#C9FFDB',
    bottomColor: '#EBBB8F',
    product : '바이레도 모하비고스트',
    r_color: '#EDF6F8',
    r_gradient : 'linear-gradient(180deg, rgba(237, 246, 248, 0) 38.54%, rgba(237, 246, 248, 0.8) 100%)',
    bubble_color : '#618CCC',
    bg_gradient : '#84ADE9',
    save : 'https://drive.google.com/file/d/1c_arMkzywVmqoI59h_5hPtAVhrKIvBkn/view?usp=sharing'
  },
  {
    name: 'norway',
    title: '노르웨이 오슬로',
    description: '연구원님은 노르웨이 오슬로에서 여행을 즐기며 얻은 영감으로 새로운 향을 연구해냈습니다 \n 상큼한 스파이시향이 가벼운 느낌을 주며 매혹적으로 다가오는 플로럴 향과 이를 하나로 묶어주는 우디와 발삼의 향이 조화를 이루는 이국적이고 와일드한 향을 담아내었습니다',
    scent: '우디 스파이시 향',
    top: '',
    middle: '',
    bottom: '',
    single: '플로럴 노트·베티버·발삼 노트·진저',
    topColor: '#FFC5B3',
    middleColor: '#FFFCB6',
    bottomColor: '#50666D',
    product : '딥디크 오모헬리',
    r_color: '#F5F3FE',
    r_gradient : 'linear-gradient(180deg, rgba(245, 243, 254, 0) 38.54%, rgba(245, 243, 254, 0.8) 100%)',
    bubble_color : '#36525B',
    bg_gradient : 'linear-gradient(180deg, #251A1A 0%, #4E727E 100%)',
    save : 'https://drive.google.com/file/d/1-Z_bzisDdRJ_50IpqgHLV6KfYn1wfDa0/view?usp=sharing'
  },
  {
    name: 'brazil',
    title: '브라질 리우',
    description: '연구원님은 카니발의 도시, 브라질 리우에서 여행을 즐기며 얻은 영감으로 새로운 향을 연구해냈습니다 \n 쌉싸름한 향이 중간중간 함께하는 상큼한 시트러스의 향연을 지나 부드럽게 감싸오며 청량감을 더해주는 시원한 그린 계열의 향을 담은 길들여지지 않으면서도 청량한 향을 담아내었습니다',
    scent: '우디 플로럴 향',
    top: '시트러스 노트',
    middle: '바질, 플로럴',
    bottom: '패츌리, 베티버',
    single: '',
    topColor: '#FFAC4B',
    middleColor: '#89A7F5',
    bottomColor: '#95DB75',
    product : '조말론 라임바질 앤 만다린',
    r_color: '#FCF0F0',
    r_gradient : 'linear-gradient(180deg, rgba(252, 240, 240, 0) 38.54%, rgba(252, 240, 240, 0.8) 100%)',
    bubble_color : '#6877FF',
    bg_gradient : '#818CED',
    save : 'https://drive.google.com/file/d/1t3QrzSB6tPLivop8bOSUVYIC2Ydkxa3Q/view?usp=sharing'
  },
  {
    name: 'peru',
    title: '페루 리마',
    description: '연구원님은 페루리마에서 여행을 즐기며 얻은 영감으로 새로운 향을 연구해냈습니다 \n 산뜻한 시트러스향과 묵직한 우디향이 함께 올라오다 이내 곧 우디의 묵직한 잔향과 쌉싸름한 발사믹의 향이 신비로움을 더하는 향을 담아내었습니다',
    scent: '우디 향',
    top: '시트러스 노트',
    middle: '몰약',
    bottom: '아갈우드',
    single: '',
    topColor: '#FFD464',
    middleColor: '#CF7533',
    bottomColor: '#404427',
    product : '베르두 오우드 알 사흐라',
    r_color: '#F9F6EC',
    r_gradient : 'linear-gradient(180deg, rgba(249, 246, 236, 0) 38.54%, rgba(249, 246, 236, 0.8) 100%)',
    bubble_color : '#4D4137',
    bg_gradient : 'linear-gradient(180deg, #2B2624 0%, #584431 100%)',
    save : 'https://drive.google.com/file/d/1W5u0VpVHI6Xk6tM5l_93AcGK8kjuVpVm/view?usp=sharing'
  },
  {
    name: 'swis',
    title: '스위스 그릴덴발트',
    description: '연구원님은 스위스 그릴덴발트에서 여행을 즐기며 얻은 영감으로 새로운 향을 연구해냈습니다 \n 시원한 바람과 함께 불어오는 듯한 싱그러운 그릴티의 쌉싸름한 향과 이를 부드럽게 감싸는 우디와 머스크향이 담긴 그릴덴발트 산중턱의 풍부하고 청량한 싱그러움을 담아내었습니다',
    scent: '그릴 시트러스 향',
    top: '베르가못·만다린·오렌지',
    middle: '그릴티·블랙커런트',
    bottom: '그릴 노트·머스크·샌달우드',
    single: '',
    topColor: '#FDFF8E',
    middleColor: '#82CE80',
    bottomColor:'#796C5D',
    product : '크리드 실버마운틴',
    r_color: '#EEF7F1',
    r_gradient : 'linear-gradient(180deg, rgba(238, 247, 241, 0) 38.54%, rgba(238, 247, 241, 0.8) 100%)',
    bubble_color : '#36525B',
    bg_gradient : '#B5DA86',
    save : 'https://drive.google.com/file/d/1xu3uOCmpK8ooElGQfo_-yywwNfArD38b/view?usp=sharing'
  },
  {
    name: 'london',
    title: '영국 런던',
    description: '연구원님은 신사의 나라, 영국 런던에서 여행을 즐기며 얻은 영감으로 새로운 향을 연구해냈습니다 \n 씁쓸한 우디향과 함께 고급진 머스키향이 강렬하게 퍼지다가도 플로럴향이 언뜻 내비치는 시크하고 지적이면서도 매너있는 향을 담아내었습니다',
    scent: '스모키 우디 향',
    top: '',
    middle: '',
    bottom: '',
    single: '스모키 블랜드 우드·샌달우드·베티버·엠버·카다멈·통가빈·머스크',
    topColor: '#7E8387',
    middleColor: '#626160',
    bottomColor: '#46403A',
    product : '톰포드 오드우드',
    r_color: '#E4E4E4',
    r_gradient : 'linear-gradient(180deg, rgba(228, 228, 228, 0) 38.54%, rgba(228, 228, 228, 0.8) 100%)',
    bubble_color : '#36525B',
    bg_gradient : '#1B1C20',
    save : 'https://drive.google.com/file/d/1QjVmCDdXQD0OBucUdYtoBbXO7IYdSsw1/view?usp=sharing'
  },
  {
    name: 'china',
    title: '중국 베이징',
    description: '연구원님은 중국 베이징에서 여행을 즐기며 얻은 영감으로 새로운 향을 연구해냈습니다 \n 강하지만 매력적으로 다가오는 우디와 발사믹의 향과 함께 세련된 플로럴 향이 더해져 풍부하고 웅장한 향을 담아내었습니다',
    scent: '발삼 우디 향',
    top: '블랙커런트·만다린·레몬·자스민',
    middle: '연꽃·자스민·스파이시 노트',
    bottom: '샌달우드·머스크·베티버·바닐라',
    single: '',
    topColor: '#FFE49D',
    middleColor: '#EA7575',
    bottomColor: '#874131',
    product : '톰포드 블랙오키드',
    r_color: '#FCF0F0',
    r_gradient : 'linear-gradient(180deg, rgba(252, 240, 240, 0) 38.54%, rgba(252, 240, 240, 0.8) 100%)',
    bubble_color : '#823219',
    bg_gradient : 'linear-gradient(180deg, #893819 0%, #1D0D0D 100%)',
    save : 'https://drive.google.com/file/d/1o6W1A-dpMAY7acQ_kV_-t2hi2H5XBx7d/view?usp=sharing'
  },
  {
    name: 'greece',
    title: '그리스 산토리니',
    description: '연구원님은 그리스 산토리니에서 여행을 즐기며 얻은 영감으로 새로운 향을 연구해냈습니다 \n 맑은 바다의 산뜻함에 시트러스 향으로 개운함과 은은하게 감싸오는 우디향을 더하여 청량하고 싱그러운 그리스 산토리니향을 담아내었습니다',
    scent: '워터리 시트러스 향',
    top: '',
    middle: '',
    bottom: '',
    single: '머스크·세이지·씨위드·자몽',
    topColor:  '#C2FBFF',
    middleColor: '#68CFC9',
    bottomColor: '#FFB4AA',
    product : '조말론 우드세이지 앤 씨솔트',
    r_color: '#EDF6F8',
    r_gradient : 'linear-gradient(180deg, rgba(237, 246, 248, 0) 38.54%, rgba(237, 246, 248, 0.8) 100%)',
    bubble_color : '#6AB2B6',
    bg_gradient : '#9CDCDF',
    save : 'https://drive.google.com/file/d/1auvu2QrnruzYXQK96BmOQR3b6a1uBvX0/view?usp=sharing'
  },
  {
   name: 'hollywood',
   title: '미국 할리우드',
   description: '연구원님은 성공의 거리, 미국 헐리우드에서 여행을 즐기며 얻은 영감으로 새로운 향을 연구해냈습니다 \n 적당한 무게감의 우디향과 말린 담배잎의 타바코 그리고 약간의 스파이시 노트를 섞은 미국 헐리우드 향은 화려하면서도 시크하고 성공적인 느낌을 담아내었습니다',
   scent: '타바코 우디 향',
   top: '위스키',
   middle: '스파이시 노트·코리엔더·시나몬',
   bottom: '타바코·아갈우드·샌달우드·바닐라',
   single: '',
   topColor: '#FFAF65',
   middleColor: '#C0594B',
   bottomColor: '#625344',
   product : '톰포드 토바코 오우드',
   r_color: '#F5F3FE',
   r_gradient : 'linear-gradient(180deg, rgba(245, 243, 254, 0) 38.54%, rgba(245, 243, 254, 0.8) 100%)',
   bubble_color : '#36525B',
   bg_gradient : '#272C46',
   save : 'https://drive.google.com/file/d/1SoqOItf2kecv7sQTJRGr3WzxX01LrGI3/view?usp=sharing'
  },
  {
  name: 'india',
  title: '인도 아그라',
  description: '연구원님은 인도 아그라에서 여행을 즐기며 얻은 영감으로 새로운 향을 연구해냈습니다 \n 오래된 나무와 같은 무게감있는 우디향이 그윽하게 퍼지며 존재감을 발휘하면서도 조금씩 달달한 꽃향기와 사원의 향 냄새가 나는 신비롭고 매혹적인 향을 담았습니다',
  scent: '우디 플로럴 향',
  top: '플라워 노트·사이프러스',
  middle: '샌달우드',
  bottom: '스파이시 노트·로즈우드·머스크',
  single: '',
  topColor: '#BAFAE3',
  middleColor: '#E7EED2',
  bottomColor: '#F0CBC3',
  product : '딥디크 탐다오',
  r_color: '#EFF6F8',
  r_gradient : 'linear-gradient(180deg, rgba(237, 246, 248, 0) 38.54%, rgba(237, 246, 248, 0.8) 100%)',
  bubble_color : '#5F9DF8',
  bg_gradient : '#83A9E0',
  save : 'https://drive.google.com/file/d/1wVtO0-tdmRPo86H62BMiYdMG2juO5YEh/view?usp=sharing'
  }
]

const fbMetarialList = [
  { name : '정제수',
    volume: '47g | 2 소주잔',
    text : '불순물이 없는 순수한 물로 피부자극, 알러지를 유발하지 않아요 다양한 성분을 포함한 워터류로 대체할 수 있어요',
    text_sum : '불순물이 없는 순수한 물로 피부자극, 알러지를 유발하지 않음'
  },
  { name : '구연산',
    volume: '0.6g | 0.5 티스푼',
    text : '약알칼리성인 소다류에 섞어 중성 농도를 맞추는 구연산에는 살균효과가 있으며 세탁 시 세정 효과를 높여줘요',
    text_sum : '살균효과가 있으며 빨래 시 세정 효과를 높여줌'
  },
  { name : '폴리쿼터',
    volume: '1g | 1 티스푼',
    text : '섬유를 보다 부드럽고 유연하게 만들어줄 뿐만 아니라 정전기가 일어나는 것을 방지해줘요',
    text_sum : '섬유 유연화 및 정전기 방지 효과'
  },
  { name : '올리브리퀴드',
    volume: '2g | 0.5 티스푼',
    text : '올리브 오일에서 만들어졌으며 오일과 워터류를 잘 섞이게 유화시켜줘요',
    text_sum : '올리브 오일에서 만들어졌으며 오일과 워터류를 유화시켜줌'
  },
  { name : '향오일',
    volume: '1~9 방울',
    text : '당신만의 향을 섬유유연제에 담아줄 향오일로 원하는 세기대로 넣어 나만의 섬유유연제 향을 즐겨보세요!',
    text_sum : '당신만의 향을 섬유유연제에 담아줄 향오일'
  }
]

const making_fabric_list = [
  '따뜻한 정제수에 구연산을 넣어녹여줍니다',
  '내용물을 저어주면서 폴리쿼터를 천천히 넣고 녹여줍니다',
  '잠시 내용물을 식힌 뒤 올리브 리퀴드를 넣어줍니다',
  '원하는 만큼 향 오일을 넣어 섞어준 후 사용합니다'
]
