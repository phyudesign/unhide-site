// 언하이드 작업 목록 — 여기만 고치면 메인(최신 3개)과 Work 페이지에 같이 반영됩니다.
// 순서 = 최신순. 위에서부터 3개가 메인에 나옵니다.
// cat: advertising | character | imaging | sns   ·   desc: 메인 왼쪽에 나오는 설명글
window.CATEGORIES = [
  { id: "advertising", name: "Advertising",      ko: "광고 · TVCF" },
  { id: "character",   name: "Character",        ko: "캐릭터 · 오리지널 IP" },
  { id: "imaging",     name: "Digital Imaging",  ko: "키 비주얼 · 이미지" },
  { id: "sns",         name: "SNS Content",      ko: "채널 · 콘텐츠" },
  { id: "apps",        name: "Apps",             ko: "직접 만든 도구", href: "work/?c=apps" },
];
window.WORKS = [
  { key: "hidie",       title: "HIDIE TEASER",             meta: "FILM · 10s", cat: "character" , desc: "언하이드의 오리지널 캐릭터 HIDIE를 처음 소개하는 티저 필름." },
  { key: "callaway-20", title: "Callaway PARADYME TEASER", meta: "TVC · 15s",  cat: "advertising" , desc: "Callaway PARADYME 출시를 알리는 티저 TV 광고." },
  { key: "callaway-60", title: "Callaway TourBan",         meta: "TVC · 60s",  cat: "advertising" , desc: "Callaway TourBan TV 광고 60초 편." },
  { key: "dole",        title: "Dole Banana",              meta: "TVC · 15s",  cat: "advertising" , desc: "Dole Banana TV 광고." },
  { key: "starbucks",   title: "Starbucks RTD",            meta: "TVC · 30s",  cat: "advertising" , desc: "Starbucks RTD TV 광고." },
];
window.APPS = [
  { title: "인스타 댓글 수집기", meta: "Windows · 댓글 수집과 이벤트 추첨", img: "apps/insta-comment-collector/img/shot-basic.jpg", href: "apps/insta-comment-collector/" },
];
