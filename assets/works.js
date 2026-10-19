// 언하이드 작업 목록 — 여기만 고치면 메인과 Work 페이지에 같이 반영됩니다.
// WORKS 순서 = Work 페이지 순서.   cat: advertising | character | imaging | sns
// 시리즈는 episodes 안에 편별로 넣으면 Work에서 한 묶음으로 보이고, 팝업에서 편을 골라 볼 수 있어요.
// 영상 파일: assets/hero/{key}.mp4(무음·미리보기용), assets/work/{key}.mp4(소리 있음), 썸네일 assets/hero/{key}.jpg
window.CATEGORIES = [
  { id: "advertising", name: "Advertising",      ko: "광고 · TVCF" },
  { id: "character",   name: "Character",        ko: "캐릭터 · 오리지널 IP" },
  { id: "imaging",     name: "Digital Imaging",  ko: "키 비주얼 · 이미지" },
  { id: "sns",         name: "SNS Content",      ko: "채널 · 콘텐츠" },
  { id: "apps",        name: "Apps",             ko: "직접 만든 도구", href: "work/?c=apps" },
];
window.WORKS = [
  { key: "hidie",       title: "HIDIE TEASER",             meta: "FILM · 10s", cat: "character",   desc: "언하이드의 오리지널 캐릭터 HIDIE를 처음 소개하는 티저 필름." },
  { key: "db-2025",     title: "DB손해보험 디지털 광고",       meta: "Digital Film · 3편 시리즈 · 2025", cat: "advertising", thumb: "db-petbly",
    desc: "2025년 DB손해보험 디지털 광고 시리즈. 일상 속 장면을 짧은 드라마로 풀어낸 세 편의 상품 광고.",
    episodes: [
      { key: "db-health", title: "나에게 맞춘 간편건강보험 편",   meta: "Digital Film · 47s" },
      { key: "db-ilove",  title: "아이 러브 플러스 건강보험 편", meta: "Digital Film · 52s" },
      { key: "db-petbly", title: "펫블리 반려견 보험 편",         meta: "Digital Film · 61s" },
    ] },
  { key: "callaway-20", title: "Callaway PARADYME TEASER", meta: "TVC · 15s",  cat: "advertising", desc: "Callaway PARADYME 출시를 알리는 티저 TV 광고." },
  { key: "callaway-60", title: "Callaway TourBan",         meta: "TVC · 60s",  cat: "advertising", desc: "Callaway TourBan TV 광고 60초 편." },
  { key: "dole",        title: "Dole Banana",              meta: "TVC · 15s",  cat: "advertising", desc: "Dole Banana TV 광고." },
  { key: "starbucks",   title: "Starbucks RTD",            meta: "TVC · 30s",  cat: "advertising", desc: "Starbucks RTD TV 광고." },
];
// 메인 화면 '최신 작업'에 띄울 3개 (작품 key 또는 시리즈 안의 편 key)
window.LATEST = ["hidie", "db-petbly", "callaway-20"];
window.APPS = [
  { title: "인스타 댓글 수집기", meta: "Windows · Mac · 댓글 수집과 이벤트 추첨", img: "apps/insta-comment-collector/img/shot-basic.jpg", href: "apps/insta-comment-collector/" },
];
// key로 작품(또는 시리즈의 한 편) 찾기 → { work, ep, index }
window.findWork = (key) => {
  for (const w of WORKS) {
    if (w.key === key) return { work: w, ep: null, index: 0 };
    const i = (w.episodes || []).findIndex((e) => e.key === key);
    if (i >= 0) return { work: w, ep: w.episodes[i], index: i };
  }
  return null;
};
