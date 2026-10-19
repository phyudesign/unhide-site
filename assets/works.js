// 언하이드 작업 목록 — 여기만 고치면 메인·Work 페이지에 같이 반영됩니다.
// cat: tvcf | character | social | design
// media: 프로젝트 안에서 넘겨 볼 영상·이미지. v: true = 세로 영상(9:16)
//   영상  { type: "video", src: "assets/work/키.mp4", poster: "썸네일.jpg", title, meta, group }
//   이미지 { type: "image", src: "이미지.jpg", title, group }
const V = (key, title, meta, group, opt = {}) => ({ type: "video", key, src: `assets/work/${key}.mp4`, poster: opt.poster || `assets/thumb/${key}.jpg`, title, meta, group, v: opt.v !== false && !opt.wide });
const H = (key, title, meta, group) => ({ type: "video", key, src: `assets/work/${key}.mp4`, poster: `assets/hero/${key}.jpg`, title, meta, group, v: false });
const I = (src, title, group) => ({ type: "image", src: `assets/img/${src}`, title, group });

window.CATEGORIES = [
  { id: "tvcf",      name: "TVCF",               ko: "광고 크리에이티브" },
  { id: "character", name: "Character Creation", ko: "캐릭터 크리에이션" },
  { id: "social",    name: "Social Content",     ko: "SNS 콘텐츠" },
  { id: "design",    name: "Visual Design",      ko: "비주얼 디자인" },
  { id: "apps",      name: "Apps",               ko: "직접 만든 도구", href: "work/?c=apps" },
];

const TVCF_SCOPE = ["Planning", "Creative Directing", "Art Directing", "Copywriting", "Shooting", "Post Production"];
const SNS_IMG = ["sns-db-01", "sns-db-02", "sns-db-03", "sns-db-04", "sns-db-05", "sns-db-06", "sns-db-07", "sns-db-08", "sns-db-09", "sns-db-10", "sns-db-11", "sns-db-12"];

window.WORKS = [
  { key: "db-2025", cat: "tvcf", client: "DB손해보험", title: "DB손해보험 상품광고", meta: "Digital Film · 2 시리즈 · 6편 · 2025–2026",
    thumb: "assets/hero/db26-q1.jpg",
    desc: "컨셉 기획부터 아이디어, 촬영, 후반 작업까지 광고 콘텐츠 제작 전반을 아우른 프로젝트입니다. 상품의 특징을 쉽고 명확한 영상 메시지로 풀어냈습니다.",
    role: ["Creative Direction", "Art Direction", "Copy Writing"], scope: TVCF_SCOPE,
    media: [
      H("db26-q1", "청춘어람 종합보험 — Q1", "Digital · 50s", "2026 시리즈"),
      H("db26-q2", "청춘어람 종합보험 — Q2", "Digital · 53s", "2026 시리즈"),
      H("db26-q3", "Q3", "Digital · 57s", "2026 시리즈"),
      H("db-health", "건강하기로 프로미스 — 간편건강보험", "Digital · 47s", "2025 시리즈"),
      H("db-ilove",  "사랑하니까 프로미스 — 아이 러브 플러스 건강보험", "Digital · 52s", "2025 시리즈"),
      H("db-petbly", "지켜줄개, 프로미스 — 펫블리 반려견 보험", "Digital · 61s", "2025 시리즈"),
    ] },
  { key: "treetobar", cat: "tvcf", client: "Tree To Bar", title: "TREETOBAR TO GO", meta: "Digital Film",
    thumb: "assets/img/treetobar.jpg",
    desc: "프리미엄 초콜릿 브랜드 트리투바(Tree To Bar)의 디지털 광고 영상입니다. 컨셉 기획부터 아트 디렉팅, 촬영, 후반 작업까지 제작 전반을 총괄했습니다. ‘오감으로 맛보는 초콜릿’이라는 브랜드 메시지를 직관적인 영상으로 전달합니다.",
    role: ["Creative Direction", "Art Direction", "Copy Writing"], scope: TVCF_SCOPE,
    media: [{ type: "video", key: "treetobar", src: "assets/work/treetobar.mp4", poster: "assets/img/treetobar.jpg", title: "How to Taste Chocolate with 5 Senses", meta: "Digital · 2m 48s", v: false }] },
  { key: "callaway-20", cat: "tvcf", client: "Callaway", title: "Callaway PARADYME TEASER", meta: "TVC · 15s", thumb: "assets/hero/callaway-20.jpg",
    desc: "Callaway PARADYME 출시를 알리는 티저 TV 광고.", media: [H("callaway-20", "PARADYME TEASER", "TVC · 15s")] },
  { key: "callaway-60", cat: "tvcf", client: "Callaway", title: "Callaway TourBan", meta: "TVC · 60s", thumb: "assets/hero/callaway-60.jpg",
    desc: "Callaway TourBan TV 광고 60초 편.", media: [H("callaway-60", "TourBan", "TVC · 60s")] },
  { key: "dole", cat: "tvcf", client: "Dole", title: "Dole", meta: "TVC · 15s", thumb: "assets/hero/dole.jpg",
    desc: "Dole TV 광고.", media: [H("dole", "Dole", "TVC · 15s")] },
  { key: "starbucks", cat: "tvcf", client: "Starbucks", title: "Starbucks RTD", meta: "TVC · 30s", thumb: "assets/hero/starbucks.jpg",
    desc: "Starbucks RTD TV 광고.", media: [H("starbucks", "Starbucks RTD", "TVC · 30s")] },

  { key: "hidie", cat: "character", client: "unhide", title: "HIDIE", meta: "하이드 유니버스의 첫 번째 캐릭터",
    thumb: "assets/img/hidie-visual.jpg", tags: ["Cute", "Warm", "Emotional", "Friendly"],
    desc: "언하이드 세계관의 첫 번째 캐릭터 ‘하이디(HIDIE)’ 프로젝트입니다. 브랜드가 지향하는 따뜻한 감성을 담아 기획 및 디자인했고, 캐릭터의 매력과 세계관을 보여주는 프로모션 영상을 함께 제작했습니다.",
    scope: ["Character Design", "3D Modeling", "3D Animation", "Planning", "Creative Directing", "Art Directing"],
    media: [
      H("hidie", "HIDIE TEASER", "Promotion Video · 10s", "Promotion Video"),
      I("hidie-render.jpg", "Key Visual", "Character"),
      I("hidie-turn.jpg", "Turn Around", "Character"),
      I("hidie-sketch.jpg", "Concept Sketch", "Character"),
    ] },
  { key: "promy", cat: "character", client: "DB손해보험", title: "PROMY", meta: "DB손해보험의 대표 캐릭터",
    thumb: "assets/img/promy-visual.jpg", tags: ["Energetic", "Positive", "Cheerful", "Reliable"],
    desc: "에너지와 긍정의 힘으로 모두에게 즐거움을 전하는, 약속을 지키는 DB손해보험의 캐릭터. 3D 캐릭터 모델링과 AI 기반 배경·영상을 결합한 숏폼, 프로미 탈인형을 활용한 실사 숏폼까지 다양한 콘텐츠로 확장했습니다.",
    scope: ["Character Design", "3D Modeling", "AI Visual/Video Creation", "Mascot Production", "Shooting", "Editing", "Sound Design"],
    media: [
      I("promy-render.jpg", "Key Visual", "Character"),
      I("promy-turn.jpg", "Turn Around", "Character"),
      I("promy-sketch.jpg", "Concept Sketch", "Character"),
      V("promy-ai-cat", "8월 8일 고양이의 날", "3D AI Short · 5s", "3D AI Short Video"),
      V("promy-ai-icecream", "아이스크림 덕분에", "3D AI Short · 5s", "3D AI Short Video"),
      V("promy-ai-vacation", "비록 여름휴가는", "3D AI Short · 5s", "3D AI Short Video"),
      V("promy-ai-shower", "찌뿌둥한 몸엔 샤워", "3D AI Short · 5s", "3D AI Short Video"),
      V("promy-live-1", "프로미 실사 숏폼 #1", "Short Video · 58s", "Short Video (실사)"),
      V("promy-live-2", "프로미 실사 숏폼 #2", "Short Video · 47s", "Short Video (실사)"),
      V("promy-live-3", "프로미 실사 숏폼 #3", "Short Video · 42s", "Short Video (실사)"),
    ] },
  { key: "uriduri", cat: ["character", "social"], client: "DB생명", title: "DB생명 Uri & Duri", meta: "DB생명의 대표 캐릭터 · SNS 콘텐츠",
    thumb: "assets/img/uriduri-visual.jpg", tags: ["Cute", "Friendly", "Playful", "Warm"],
    desc: "하트 모양의 몸통과 귀여운 얼굴이 매력인 우리와 두리는 밝고 친근한 무드로 따뜻한 감성을 전하는 DB생명의 캐릭터입니다. 캐릭터를 활용한 SNS 마케팅 콘텐츠로 정기 채널 운영에 필요한 3D 아트워크와 AI 영상을 제작했고, 유저가 공감할 수 있는 에피소드를 시즌 콘텐츠로 기획해 발행합니다.",
    scope: ["3D Modeling", "AI Visual/Video Creation", "Editing", "2D Artwork", "Sound Design", "Graphic Design", "Toon Content"],
    media: [
      V("uriduri-chuseok", "우리두리의 추석", "Short Video · 21s", "SNS Short Video"),
      V("uriduri-rain", "POV: 비 오는 날 우산이 없을 때", "Short Video · 15s", "SNS Short Video"),
      V("uriduri-worldcup", "우리두리 월드컵 응원", "Short Video · 10s", "SNS Short Video"),
      V("uriduri-parents", "우리두리의 어버이날", "Short Video · 10s", "SNS Short Video"),
      I("uriduri-render.jpg", "Key Visual", "Character"),
      I("uri-turn.jpg", "Turn Around — 우리", "Character"),
      I("duri-turn.jpg", "Turn Around — 두리", "Character"),
      I("uriduri-sketch.jpg", "Concept Sketch", "Character"),
    ] },
  { key: "sns-db", cat: "social", client: "DB손해보험", title: "DB손해보험 SNS 콘텐츠", meta: "Instagram · YouTube",
    thumb: "assets/img/sns/sns-db-07.jpg",
    desc: "프로미 캐릭터를 중심으로 Instagram, YouTube 등 SNS 콘텐츠를 제작했습니다. 일상 공감형 소재부터 이벤트, 시즌 이슈, 현장 체험 콘텐츠까지 다양한 포맷으로 전개했습니다.",
    scope: ["Graphic Design", "3D Content", "Toon Content", "AI Visual Creation"],
    media: [
      V("promy-office", "직장인 프로미 — 독서의 계절", "Reels · 10s", "Reels"),
      V("promy-dokdo", "독도의 날", "Reels · 16s", "Reels"),
      ...SNS_IMG.map((k, n) => I(`sns/${k}.jpg`, `Instagram #${n + 1}`, "Instagram")),
    ] },
  { key: "promy-safety", cat: "design", client: "DB손해보험", title: "프로미 안전체험", meta: "Poster · 600×900mm",
    thumb: "assets/img/safety-poster.jpg",
    desc: "DB손해보험 프로미 안전체험 행사 포스터 디자인. 가족이 함께 즐기는 페스티벌의 분위기를 직접 그린 일러스트로 생생하게 담았고, 다양한 체험 요소를 디테일하게 표현해 시각적 즐거움과 정보 전달력을 높였습니다.",
    scope: ["Poster Design", "Event Design", "Graphic Design", "Drawing Illustration"],
    media: [I("safety-poster.jpg", "Poster", "Poster"), I("safety-street.jpg", "Mockup — Street", "Poster"), I("safety-hall.jpg", "Mockup — Gallery", "Poster"), I("safety-building.jpg", "Mockup — Banner", "Poster")] },
  { key: "promy-goods", cat: "design", client: "DB손해보험", title: "프로미 굿즈", meta: "Product Lineup",
    thumb: "assets/img/promy-goods.jpg",
    desc: "문구류부터 생활용품까지 일상과 밀접한 제품들에 캐릭터의 아이덴티티를 자연스럽게 녹여내어, 대중들에게 귀엽고 친근한 브랜드 경험을 선사할 수 있도록 기획했습니다.",
    scope: ["Goods Design", "Package Design", "Product Visual", "Graphic Design"],
    media: [I("promy-goods.jpg", "Product Lineup", "Goods")] },
  { key: "promy-emoticon", cat: "design", client: "DB손해보험", title: "프로미 이모티콘", meta: "Emoticon Set · 움직이는 이모티콘 16종",
    thumb: "assets/img/emoticon/mockup.jpg",
    desc: "대화의 즐거움을 더하는 프로미 브랜드 이모티콘 디자인입니다. 일상에서 자주 쓰이는 상황들을 프로미만의 친근한 감성으로 재해석해 누구나 거부감 없이 자연스럽게 활용할 수 있도록 기획 및 제작했습니다.",
    scope: ["Emoticon Design", "Character Design", "Drawing Artwork", "Character Motion", "Frame Animation"],
    media: [
      { type: "grid", title: "Emoticon Set — 16종", meta: "Frame Animation", group: "Emoticon", cols: 4,
        srcs: Array.from({ length: 16 }, (_, i) => `assets/img/emoticon/gif-${String(i + 1).padStart(2, "0")}.gif`) },
      I("emoticon/chat.jpg", "Emoticon Chat Preview", "Emoticon"),
      I("emoticon/mockup.jpg", "Mockup", "Emoticon"),
      { type: "grid", title: "Drawing Artwork", meta: "Sketch", group: "Drawing", cols: 4, bg: "#fff",
        srcs: Array.from({ length: 8 }, (_, i) => `assets/img/emoticon/draw-${String(i + 1).padStart(2, "0")}.jpg`) },
    ] },
];

// 메인 화면 '최신 작업' 3개 — open: Work에서 열 프로젝트, at: 그 안의 몇 번째 미디어
window.LATEST = [
  { work: "hidie",   at: 0, title: "HIDIE TEASER", meta: "Promotion Video · 10s", video: "assets/hero/hidie.mp4", poster: "assets/hero/hidie.jpg" },
  { work: "db-2025", at: 5, title: "DB손해보험 — 지켜줄개, 프로미스", meta: "Digital Film · 61s", video: "assets/hero/db-petbly.mp4", poster: "assets/hero/db-petbly.jpg" },
  { work: "callaway-20", at: 0, title: "Callaway PARADYME TEASER", meta: "TVC · 15s", video: "assets/hero/callaway-20.mp4", poster: "assets/hero/callaway-20.jpg" },
];

window.APPS = [
  { title: "인스타그램 댓글 수집기", meta: "Windows · Mac · 댓글 수집과 이벤트 추첨", img: "apps/insta-comment-collector/img/shot-basic.jpg", href: "apps/insta-comment-collector/" },
];

window.hasCat = (w, id) => [].concat(w.cat).includes(id);
window.findWork = (key) => WORKS.find((w) => w.key === key) || null;
