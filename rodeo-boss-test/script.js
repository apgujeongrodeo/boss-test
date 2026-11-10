(function () {
  "use strict";

  /* ============================================================
     설정 — 링크만 바꾸면 됩니다
     FORM_URL    : 상담 신청 구글폼 주소
     LANDING_URL : 로데오공인중개사무소 랜딩페이지 주소 (비워두면 버튼이 숨겨져요)
     ============================================================ */
  var CONFIG = {
    FORM_URL: "https://docs.google.com/forms/d/1dmdT5KLeAKSEVj9ZCu2Iv2HRBjGR17055YllAvD0_Ag/viewform",
    LANDING_URL: "",
    OFFICE: "로데오공인중개사무소",
    AGENT: "김태욱 공인중개사"
  };

  var INK = "#2E2A4F";

  /* ---------------- 그림: 건물 배경 ---------------- */
  function backdrop(kind, c) {
    var s = 'stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"';
    var w = c.wall, a = c.awning, d = c.dark || INK;
    function stripes(x, y, width, h, n, col) {
      var out = "", sw = width / n;
      for (var i = 0; i < n; i++) {
        out += '<path d="M' + (x + i * sw) + ' ' + y + 'h' + sw + 'v' + h + 'q' + (-sw / 2) + ' 10 ' + (-sw) + ' 0z" fill="' + (i % 2 ? "#fff" : col) + '" ' + s + '/>';
      }
      return out;
    }
    function windows(x0, y0, cols, rows, ww, wh, gx, gy, fill) {
      var out = "";
      for (var r = 0; r < rows; r++) for (var k = 0; k < cols; k++) {
        out += '<rect x="' + (x0 + k * (ww + gx)) + '" y="' + (y0 + r * (wh + gy)) + '" width="' + ww + '" height="' + wh + '" rx="3" fill="' + fill + '" ' + s + '/>';
      }
      return out;
    }
    switch (kind) {
      case "bakery":
        return '<rect x="40" y="88" width="160" height="122" rx="6" fill="' + w + '" ' + s + '/>' +
          '<rect x="78" y="58" width="84" height="24" rx="12" fill="#fff" ' + s + '/><circle cx="96" cy="70" r="4" fill="' + a + '"/><rect x="106" y="67" width="40" height="6" rx="3" fill="' + INK + '"/>' +
          stripes(36, 88, 168, 16, 7, a) +
          '<rect x="54" y="124" width="54" height="44" rx="6" fill="#DFF3FF" ' + s + '/><path d="M60 158h42" stroke="' + INK + '" stroke-width="3"/><ellipse cx="72" cy="152" rx="8" ry="5" fill="#E8A75C" ' + s + '/><ellipse cx="90" cy="152" rx="8" ry="5" fill="#E8A75C" ' + s + '/>' +
          '<rect x="140" y="124" width="44" height="86" rx="6" fill="' + d + '" ' + s + '/><circle cx="174" cy="168" r="3" fill="#fff"/>' +
          '<path d="M30 92c-6-12 8-22 12-10" fill="none" stroke="' + INK + '" stroke-width="3" stroke-linecap="round"/>';
      case "boutique":
        return '<rect x="46" y="70" width="148" height="140" rx="6" fill="' + w + '" ' + s + '/>' +
          '<path d="M60 210v-62a26 26 0 0 1 52 0v62" fill="#E9F7F2" ' + s + '/><path d="M128 210v-62a26 26 0 0 1 52 0v62" fill="' + d + '" ' + s + '/>' +
          '<rect x="70" y="84" width="100" height="22" rx="4" fill="#fff" ' + s + '/><rect x="88" y="92" width="64" height="6" rx="3" fill="' + INK + '"/>' +
          '<circle cx="86" cy="178" r="8" fill="' + a + '" ' + s + '/><circle cx="76" cy="186" r="6" fill="#FF9DB5" ' + s + '/><circle cx="96" cy="188" r="6" fill="#FFD45C" ' + s + '/>' +
          '<path d="M40 70h160" stroke="' + INK + '" stroke-width="6" stroke-linecap="round"/>';
      case "restaurant":
        return '<rect x="14" y="66" width="212" height="144" rx="6" fill="' + w + '" ' + s + '/>' +
          windows(28, 78, 4, 1, 38, 26, 12, 0, "#DFF3FF") +
          stripes(10, 116, 220, 16, 9, a) +
          '<rect x="26" y="146" width="62" height="44" rx="6" fill="#FFF3D6" ' + s + '/><rect x="152" y="146" width="62" height="44" rx="6" fill="#FFF3D6" ' + s + '/>' +
          '<rect x="98" y="142" width="44" height="68" rx="6" fill="' + d + '" ' + s + '/>' +
          '<rect x="70" y="44" width="100" height="26" rx="13" fill="#fff" ' + s + '/><circle cx="90" cy="57" r="5" fill="' + a + '"/><rect x="100" y="54" width="54" height="6" rx="3" fill="' + INK + '"/>' +
          '<path d="M44 140c0-8 10-8 10 0M196 140c0-8 10-8 10 0" fill="none" stroke="' + INK + '" stroke-width="3"/>';
      case "fine":
        return '<rect x="20" y="50" width="200" height="160" rx="6" fill="' + d + '" ' + s + '/>' +
          '<path d="M38 210v-84a20 20 0 0 1 40 0v84M100 210v-84a20 20 0 0 1 40 0v84M162 210v-84a20 20 0 0 1 40 0v84" fill="#FFE7A8" ' + s + '/>' +
          '<rect x="60" y="64" width="120" height="26" rx="4" fill="none" stroke="#FFD45C" stroke-width="3"/><rect x="84" y="74" width="72" height="6" rx="3" fill="#FFD45C"/>' +
          '<circle cx="30" cy="102" r="5" fill="#FFD45C"/><circle cx="210" cy="102" r="5" fill="#FFD45C"/>' +
          '<path d="M14 50h212" stroke="' + INK + '" stroke-width="6" stroke-linecap="round"/>';
      case "mini3":
        return '<rect x="58" y="34" width="124" height="176" rx="6" fill="' + w + '" ' + s + '/>' +
          windows(72, 48, 3, 2, 26, 26, 12, 14, "#DFF3FF") +
          '<path d="M58 128h124" stroke="' + INK + '" stroke-width="3"/>' +
          stripes(54, 134, 132, 14, 6, a) +
          '<rect x="70" y="160" width="46" height="36" rx="5" fill="#FFF3D6" ' + s + '/><rect x="130" y="158" width="38" height="52" rx="5" fill="' + d + '" ' + s + '/>' +
          '<path d="M48 34h144" stroke="' + INK + '" stroke-width="6" stroke-linecap="round"/>' +
          '<path d="M30 210v-30a12 12 0 0 1 24 0v30" fill="#9BD88A" ' + s + '/>';
      case "slim":
        return '<rect x="70" y="20" width="100" height="190" rx="6" fill="' + w + '" ' + s + '/>' +
          windows(80, 32, 2, 4, 36, 28, 8, 10, "#CFE3FF") +
          '<rect x="80" y="170" width="80" height="40" rx="4" fill="' + d + '" ' + s + '/><path d="M120 170v40" stroke="' + INK + '" stroke-width="3"/>' +
          '<rect x="30" y="120" width="40" height="90" rx="4" fill="#EDEBF7" ' + s + '/><rect x="170" y="100" width="44" height="110" rx="4" fill="#EDEBF7" ' + s + '/>' +
          '<path d="M60 20h120" stroke="' + INK + '" stroke-width="6" stroke-linecap="round"/>';
      case "complex":
        return '<rect x="10" y="74" width="220" height="136" rx="6" fill="' + w + '" ' + s + '/>' +
          windows(22, 86, 5, 1, 30, 22, 13, 0, "#DFF3FF") +
          '<path d="M10 120h220M83 120v90M157 120v90" stroke="' + INK + '" stroke-width="3"/>' +
          stripes(12, 122, 69, 14, 3, a) + stripes(85, 122, 70, 14, 3, "#7FD1B9") + stripes(159, 122, 69, 14, 3, "#8DB8FF") +
          '<rect x="26" y="152" width="42" height="58" rx="4" fill="#FFF3D6" ' + s + '/><rect x="172" y="152" width="42" height="58" rx="4" fill="#FFF3D6" ' + s + '/>' +
          '<rect x="80" y="50" width="80" height="24" rx="12" fill="#fff" ' + s + '/><rect x="96" y="59" width="48" height="6" rx="3" fill="' + INK + '"/>';
      case "tower":
        return '<rect x="20" y="110" width="48" height="100" rx="4" fill="#EDEBF7" ' + s + '/><rect x="176" y="90" width="48" height="120" rx="4" fill="#EDEBF7" ' + s + '/>' +
          '<path d="M78 210V36l42-18 42 18v174z" fill="' + w + '" ' + s + '/>' +
          windows(90, 46, 3, 6, 16, 18, 8, 8, "#CFE3FF") +
          '<rect x="100" y="182" width="40" height="28" rx="3" fill="' + d + '" ' + s + '/>' +
          '<path d="M120 18V4" stroke="' + INK + '" stroke-width="3"/><circle cx="120" cy="4" r="4" fill="#FF8A5B" ' + s + '/>' +
          '<path d="M88 40h64" stroke="#FFD45C" stroke-width="4" stroke-linecap="round"/>';
    }
    return "";
  }

  /* ---------------- 그림: 캐릭터 ---------------- */
  function character(c) {
    var s = 'stroke="' + INK + '" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
    var skin = c.skin || "#FFDDBF", hair = c.hair || "#3B2A2A";
    var out = "";
    // 몸
    out += '<path d="M84 240c0-30 14-46 36-46s36 16 36 46z" fill="' + c.outfit + '" ' + s + '/>';
    if (c.apron) out += '<path d="M104 202h32v38h-32z" fill="#fff" ' + s + '/><path d="M110 214h20" ' + s + '/>';
    if (c.cardigan) out += '<path d="M120 196v44" ' + s + '/><circle cx="114" cy="214" r="2" fill="' + INK + '"/><circle cx="114" cy="226" r="2" fill="' + INK + '"/>';
    if (c.suit) out += '<path d="M106 198l14 22 14-22" fill="#fff" ' + s + '/><path d="M120 208l-5 8 5 16 5-16z" fill="' + c.suit + '" ' + s + '/>';
    if (c.bowtie) out += '<path d="M108 200l12 6 12-6v12l-12-6-12 6z" fill="' + c.bowtie + '" ' + s + '/>';
    if (c.pearl) out += '<path d="M106 200q14 14 28 0" fill="none" stroke="#fff" stroke-width="5" stroke-dasharray="1 6" stroke-linecap="round"/>';
    // 목/머리
    if (c.longhair) out += '<path d="M94 168q-2 32 10 36h32q12-4 10-36z" fill="' + hair + '" ' + s + '/>';
    out += '<circle cx="120" cy="168" r="26" fill="' + skin + '" ' + s + '/>';
    // 머리카락
    var hs = c.hairStyle || "short";
    if (hs === "short") out += '<path d="M95 164q0-24 25-24t25 24q-8-12-25-12t-25 12z" fill="' + hair + '" ' + s + '/>';
    if (hs === "bob") out += '<path d="M93 176q-4-36 27-36t27 36h-8q0-18-19-22-12 6-19 22z" fill="' + hair + '" ' + s + '/>';
    if (hs === "bun") out += '<circle cx="120" cy="136" r="9" fill="' + hair + '" ' + s + '/><path d="M95 164q0-24 25-24t25 24q-10-14-25-14t-25 14z" fill="' + hair + '" ' + s + '/>';
    if (hs === "side") out += '<path d="M95 166q-2-26 25-26 27 0 25 22-16-2-28-14-6 12-22 18z" fill="' + hair + '" ' + s + '/>';
    if (hs === "gray") out += '<path d="M95 164q0-24 25-24t25 24q-8-12-25-12t-25 12z" fill="#D9D6E3" ' + s + '/>';
    // 얼굴
    if (c.shades) {
      out += '<rect x="102" y="162" width="16" height="11" rx="4" fill="' + INK + '"/><rect x="122" y="162" width="16" height="11" rx="4" fill="' + INK + '"/><path d="M118 166h4" ' + s + '/>';
    } else {
      out += '<circle cx="111" cy="168" r="2.8" fill="' + INK + '"/><circle cx="129" cy="168" r="2.8" fill="' + INK + '"/>';
      if (c.glasses) out += '<circle cx="111" cy="168" r="8" fill="none" ' + s + '/><circle cx="129" cy="168" r="8" fill="none" ' + s + '/><path d="M119 168h2" ' + s + '/>';
    }
    out += '<circle cx="104" cy="178" r="4.5" fill="#FF9DB5" opacity=".7"/><circle cx="136" cy="178" r="4.5" fill="#FF9DB5" opacity=".7"/>';
    out += c.grin ? '<path d="M112 177q8 10 16 0z" fill="#fff" ' + s + '/>' : '<path d="M113 178q7 6 14 0" fill="none" ' + s + '/>';
    // 모자
    if (c.hat === "chef") out += '<path d="M100 148h40v-10a10 10 0 0 0 0-20 12 12 0 0 0-20-6 12 12 0 0 0-20 6 10 10 0 0 0 0 20z" fill="#fff" ' + s + '/>';
    if (c.hat === "beret") out += '<path d="M96 150q4-18 26-18t24 14q-8 6-50 4z" fill="' + c.hatColor + '" ' + s + '/><circle cx="122" cy="131" r="3" fill="' + INK + '"/>';
    if (c.hat === "bandana") out += '<path d="M95 158q25-18 50 0v-6q-25-16-50 0z" fill="' + c.hatColor + '" ' + s + '/>';
    // 소품
    out += prop(c.prop, s);
    return out;
  }

  function prop(p, s) {
    var hand = '<circle cx="154" cy="212" r="7" fill="#FFDDBF" ' + s + '/>';
    switch (p) {
      case "bread": return '<g transform="rotate(-35 160 200)"><rect x="140" y="194" width="52" height="16" rx="8" fill="#E8A75C" ' + s + '/><path d="M150 198l6 8M162 198l6 8M174 198l6 8" ' + s + '/></g>' + hand;
      case "flower": return '<path d="M150 214l10-34 10 34z" fill="#fff" ' + s + '/><circle cx="152" cy="176" r="8" fill="#FF9DB5" ' + s + '/><circle cx="168" cy="176" r="8" fill="#FFD45C" ' + s + '/><circle cx="160" cy="166" r="8" fill="#B9A3FF" ' + s + '/>' + hand;
      case "bowl": return '<path d="M138 196h44a22 18 0 0 1-44 0z" fill="#fff" ' + s + '/><path d="M150 186q-4-6 0-12M160 186q-4-6 0-12M170 186q-4-6 0-12" fill="none" ' + s + '/>' + hand;
      case "wine": return '<path d="M152 168h20q0 22-10 22t-10-22z" fill="#C2185B" ' + s + '/><path d="M162 190v18M154 210h16" ' + s + '/>' + hand;
      case "key": return '<circle cx="168" cy="180" r="11" fill="#FFD45C" ' + s + '/><circle cx="168" cy="180" r="4" fill="#fff" ' + s + '/><path d="M162 189l-10 18M156 199l6 3M153 204l5 3" ' + s + '/>' + hand;
      case "coffee": return '<path d="M150 186h22l-3 26h-16z" fill="#fff" ' + s + '/><path d="M150 194h22" stroke="#8B5A3C" stroke-width="5"/><path d="M148 186h26" ' + s + '/>' + hand;
      case "paper": return '<g transform="rotate(10 162 190)"><rect x="148" y="166" width="30" height="40" rx="3" fill="#fff" ' + s + '/><path d="M154 176h18M154 184h18M154 192h12" ' + s + '/></g>' + hand;
      case "bag": return '<path d="M148 184h28l-2 30h-24z" fill="#FF9DB5" ' + s + '/><path d="M155 184q0-12 7-12t7 12" fill="none" ' + s + '/>' + hand;
    }
    return "";
  }

  function sparkles(col) {
    return '<path d="M30 40l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" fill="' + col + '" stroke="' + INK + '" stroke-width="2"/>' +
      '<path d="M210 30l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" fill="#fff" stroke="' + INK + '" stroke-width="2"/>';
  }

  function scene(code, opts) {
    opts = opts || {};
    var t = TYPES[code];
    var size = opts.size ? ' width="' + opts.size + '" height="' + opts.size + '"' : "";
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240"' + size + ' role="img" aria-label="' + t.name + '">' +
      '<rect width="240" height="240" fill="' + t.tint + '"/>' +
      sparkles(t.accent) +
      '<rect x="0" y="210" width="240" height="30" fill="' + t.ground + '"/><path d="M0 210h240" stroke="' + INK + '" stroke-width="3"/>' +
      backdrop(t.bg, t.colors) +
      (opts.noChar ? "" : character(t.char)) +
      "</svg>";
  }

  /* ---------------- 유형 데이터 ----------------
     코드 = 역할(S 운영하는 사장 / B 소유하는 건물주) + 규모(A 아담 / G 크게) + 분위기(W 따뜻 / C 세련) */
  var TYPES = {
    SAW: {
      name: "골목 빵집 사장님", tagline: "단골 이름을 다 외우는 동네의 아침",
      tint: "#FFE9A8", tint2: "#FFF4D1", ground: "#E9C98A", accent: "#FF8A5B", bg: "bakery",
      colors: { wall: "#FFF4E2", awning: "#FF8A5B", dark: "#8B5A3C" },
      char: { outfit: "#FFB38A", apron: true, hairStyle: "short", prop: "bread", hat: "bandana", hatColor: "#FF8A5B", grin: true },
      desc: "크게 벌리기보다 오래 사랑받는 가게를 꿈꿔요. 매일 같은 시간에 문을 열고, 손님 얼굴과 취향을 기억하는 게 가장 큰 기쁨이에요. 작은 가게일수록 동선과 단골이 매출을 만든다는 걸 본능적으로 알아요.",
      traits: ["손님이 '늘 먹던 걸로요' 할 때 행복하다", "메뉴판은 손글씨, 간판은 따뜻한 색", "직원 1~2명과 가족처럼 일하고 싶다"],
      biz: ["베이커리", "동네 카페", "디저트숍", "반찬가게"],
      check: ["아침 출근길·등원길 동선이 지나가는 자리인지", "오븐 등 장비를 위한 전기 용량과 배기·배수 조건", "10~20평 안에서 작업 공간과 판매 공간을 나눌 수 있는지"],
      vibe: "주택가와 맞닿은 골목, 아침 유동인구가 있는 1층"
    },
    SAC: {
      name: "취향 셀렉트숍 사장님", tagline: "작지만 확실한 감도, 아는 사람만 아는 가게",
      tint: "#CDEFE4", tint2: "#E6F7F1", ground: "#9FD8C4", accent: "#FFD45C", bg: "boutique",
      colors: { wall: "#2F5D50", awning: "#FF8A5B", dark: "#1F3F36" },
      char: { outfit: "#2F5D50", hairStyle: "bob", hair: "#5A3A2A", hat: "beret", hatColor: "#FF9DB5", prop: "flower" },
      desc: "가게는 나의 취향을 보여주는 작은 전시장이에요. 꽃 한 다발, 반지 하나, 옷 한 벌에도 이야기가 있어야 해요. 작지만 사진 찍고 싶은 공간, 다시 찾아오고 싶은 디테일을 만드는 데 강해요.",
      traits: ["인스타그램에 올릴 사진 각도부터 생각한다", "물건보다 '고르는 경험'을 판다고 믿는다", "간판은 작고, 쇼윈도는 크게"],
      biz: ["꽃집", "주얼리·액세서리", "편집숍·옷가게", "소품숍"],
      check: ["쇼윈도가 잘 보이는 전면 폭과 채광", "골목 안이라도 걸어 들어오고 싶은 주변 가게 분위기", "인테리어 공사 범위와 원상복구 조건"],
      vibe: "감도 높은 가게가 모인 골목, 1층 또는 눈에 띄는 코너"
    },
    SGW: {
      name: "줄 서는 맛집 대표", tagline: "웨이팅 줄이 곧 우리 가게의 간판",
      tint: "#FFD3C2", tint2: "#FFE8DE", ground: "#F2A98C", accent: "#FFD45C", bg: "restaurant",
      colors: { wall: "#FFF1E6", awning: "#E5533D", dark: "#7A2E22" },
      char: { outfit: "#E5533D", hat: "chef", hairStyle: "short", prop: "bowl", grin: true },
      desc: "많은 사람을 배불리, 즐겁게 만드는 게 꿈이에요. 넓은 홀과 바쁜 주방, 직원들과 함께 돌아가는 활기가 좋아요. 2호점, 3호점까지 그림을 그리면서도 처음 맛을 지키는 고집이 있어요.",
      traits: ["주말 웨이팅 줄을 보면 힘이 난다", "직원 교육과 매뉴얼 만들기에 진심이다", "단체석과 회식 손님도 놓치지 않는다"],
      biz: ["한식·고깃집", "브런치 카페", "베이커리 카페", "펍·호프"],
      check: ["40평 이상 홀과 주방 동선, 환기·덕트 설치 가능 여부", "웨이팅 줄을 세울 수 있는 앞 공간과 주차", "가스·전기 용량, 정화조 등 대형 음식점 인허가 조건"],
      vibe: "유동인구 많은 대로변 또는 먹자골목 1~2층"
    },
    SGC: {
      name: "파인다이닝 오너", tagline: "예약이 열리면 5분 만에 마감되는 그 집",
      tint: "#D9D2FF", tint2: "#ECE8FF", ground: "#AFA3E8", accent: "#FFD45C", bg: "fine",
      colors: { wall: "#2E2A4F", awning: "#FFD45C", dark: "#1E1B38" },
      char: { outfit: "#2E2A4F", hairStyle: "bun", bowtie: "#FFD45C", prop: "wine", skin: "#FFE3CC" },
      desc: "한 끼를 하나의 경험으로 만들고 싶어요. 조명, 음악, 접시, 와인 리스트까지 모든 디테일이 브랜드예요. 규모와 품격을 모두 잡는 고급 레스토랑이나 라운지를 꿈꾸는 큰 그림형 사장님이에요.",
      traits: ["좋은 식당에 가면 메뉴보다 공간을 먼저 본다", "가격보다 경험의 가치를 설명하는 게 자신 있다", "예약제, 코스, 소믈리에라는 단어가 설렌다"],
      biz: ["파인다이닝", "와인바·라운지", "오마카세", "프라이빗 다이닝"],
      check: ["층고와 창 조망, 입구에서 느껴지는 첫인상", "발레파킹·주차 등 고객 동선과 프라이버시", "주방 설비 투자 규모에 맞는 장기 임대 조건"],
      vibe: "압구정로데오처럼 브랜드 가치가 있는 거리, 조용한 상층부도 가능"
    },
    BAW: {
      name: "골목 꼬마빌딩 주인", tagline: "1층엔 단골 가게, 위층엔 우리 집 같은 사무실",
      tint: "#FFD8E2", tint2: "#FFEAF0", ground: "#F2AFC0", accent: "#FFD45C", bg: "mini3",
      colors: { wall: "#F4B183", awning: "#FF8A5B", dark: "#8B5A3C" },
      char: { outfit: "#B9A3FF", cardigan: true, glasses: true, hairStyle: "gray", prop: "key", grin: true },
      desc: "가게를 직접 운영하기보다 좋은 가게가 들어올 '자리'를 만들고 싶어요. 세입자 사장님과 오래 함께하는 따뜻한 건물주가 꿈이에요. 3~5층짜리 꼬마빌딩으로 안정적인 월세와 동네 애정을 함께 챙기는 타입이에요.",
      traits: ["세입자와 명절 선물을 주고받는 사이가 좋다", "공실보다 좋은 가게가 오래 있는 게 중요하다", "1층에 어떤 가게가 들어올지 상상하는 게 재밌다"],
      biz: ["1층 카페·베이커리", "2~3층 사무실·학원", "뷰티샵·스튜디오", "주거 겸용"],
      check: ["1층 상가가 잘 보이는 골목 위치와 접근성", "층별 용도와 현재 임대 구성, 공실 이력", "노후 시설(전기·배수·방수) 보수 필요 여부"],
      vibe: "주택가와 상권이 만나는 이면도로의 3~5층 건물"
    },
    BAC: {
      name: "부티크 빌딩 오너", tagline: "건물 자체가 하나의 브랜드가 되는 곳",
      tint: "#D6E6FF", tint2: "#EAF2FF", ground: "#A8C6F5", accent: "#FF9DB5", bg: "slim",
      colors: { wall: "#FFFFFF", awning: "#8DB8FF", dark: "#2E2A4F" },
      char: { outfit: "#FFFFFF", longhair: true, hairStyle: "side", hair: "#2B2233", shades: true, pearl: true, prop: "bag" },
      desc: "외관 디자인, 입점 브랜드, 건물 이름까지 큐레이션하는 걸 좋아해요. 감각 있는 브랜드들이 줄 서서 들어오고 싶은 건물을 꿈꿔요. 규모는 크지 않아도 가치가 오르는 '예쁜 건물'에 투자하는 세련된 오너예요.",
      traits: ["건물 외관 리모델링 사진을 저장해 둔다", "입점 브랜드의 결이 맞는지가 월세만큼 중요하다", "쇼룸, 팝업, 브랜드 플래그십이라는 말에 끌린다"],
      biz: ["패션 쇼룸", "주얼리 플래그십", "뷰티 브랜드 매장", "팝업 공간"],
      check: ["리모델링 가능 범위와 용도 변경 조건", "주변 브랜드 입점 흐름과 거리의 이미지", "임차인 브랜드 컨셉과 건물 컨셉의 궁합"],
      vibe: "패션·뷰티 브랜드가 모이는 압구정로데오 이면 골목"
    },
    BGW: {
      name: "동네 상권 큰손", tagline: "가게가 모이면 동네가 산다",
      tint: "#D8F1C8", tint2: "#EBF8E2", ground: "#A9D98F", accent: "#FF8A5B", bg: "complex",
      colors: { wall: "#FFF8EC", awning: "#FF8A5B", dark: "#5E8C4A" },
      char: { outfit: "#5E8C4A", hairStyle: "bun", hair: "#4A3428", glasses: true, prop: "paper", grin: true },
      desc: "여러 가게가 함께 모여 동네의 중심이 되는 상가를 꿈꿔요. 업종 구성을 고민하고, 세입자들이 서로 손님을 나눠 갖는 생태계를 만드는 데 관심이 많아요. 규모 있게 키우되 사람 냄새 나는 건물주예요.",
      traits: ["어떤 업종끼리 붙어 있으면 잘 될지 늘 상상한다", "상인회, 동네 행사에 관심이 많다", "안정적인 여러 개의 월세 흐름을 선호한다"],
      biz: ["근린상가 전체", "카페·식당 조합", "병원·학원 층", "생활 편의 업종"],
      check: ["여러 업종이 함께 들어갈 수 있는 층별 구성", "주차 대수와 엘리베이터 등 공용 시설", "기존 임차인들의 계약 기간과 업종 겹침 여부"],
      vibe: "생활권 중심, 유동인구와 주차가 함께 받쳐주는 상가 건물"
    },
    BGC: {
      name: "로데오 랜드마크 빌딩주", tagline: "약속 장소가 곧 우리 건물 이름",
      tint: "#E3E0F0", tint2: "#F1EFF8", ground: "#BDB6DA", accent: "#FFD45C", bg: "tower",
      colors: { wall: "#F7F6FC", awning: "#B9A3FF", dark: "#2E2A4F" },
      char: { outfit: "#2E2A4F", suit: "#FF8A5B", hairStyle: "side", hair: "#1E1B2E", shades: true, prop: "key" },
      desc: "거리를 대표하는 건물, 모두가 아는 랜드마크를 꿈꿔요. 글로벌 브랜드 플래그십과 프라임 오피스를 유치하는 큰 그림이 있어요. 숫자와 장기 가치를 냉정하게 따지면서도 건물의 품격을 포기하지 않아요.",
      traits: ["'○○빌딩 앞에서 만나'라는 말이 꿈이다", "임대 수익과 자산 가치를 함께 계산한다", "글로벌 브랜드, 프라임 오피스, 루프탑에 끌린다"],
      biz: ["글로벌 브랜드 플래그십", "프라임 오피스", "루프탑 레스토랑", "갤러리·라운지"],
      check: ["대로변 가시성과 코너 입지", "앵커 테넌트 유치 가능성과 장기 임대 구조", "대출·세금 등 자산 운용 전반 (전문가 검토 병행)"],
      vibe: "압구정로데오 메인 거리, 코너 대지의 중대형 빌딩"
    }
  };
  var ORDER = ["SAW", "SAC", "SGW", "SGC", "BAW", "BAC", "BGW", "BGC"];
  var PAIR = { SAW: "BAW", BAW: "SAW", SAC: "BAC", BAC: "SAC", SGW: "BGW", BGW: "SGW", SGC: "BGC", BGC: "SGC" };

  /* ---------------- 아이콘 ---------------- */
  function icon(name) {
    var s = 'fill="none" stroke="' + INK + '" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"';
    var p = {
      shop: '<path d="M4 10l2-6h16l2 6M5 10v12h18V10M11 22v-7h6v7" ' + s + '/><path d="M4 10h20" ' + s + '/>',
      building: '<rect x="7" y="3" width="14" height="20" rx="1.5" ' + s + '/><path d="M11 8h2M15 8h2M11 12h2M15 12h2M11 16h2M15 16h2" ' + s + '/>',
      heart: '<path d="M14 23s-9-5.5-9-12a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6.5-9 12-9 12z" fill="#FF9DB5" stroke="' + INK + '" stroke-width="2.4" stroke-linejoin="round"/>',
      coin: '<circle cx="14" cy="14" r="9" fill="#FFD45C" stroke="' + INK + '" stroke-width="2.4"/><path d="M14 9v10M11 12h5a2 2 0 0 1 0 4h-5" ' + s + '/>',
      chat: '<path d="M5 6h18v12H11l-5 4v-4H5z" fill="#fff" stroke="' + INK + '" stroke-width="2.4" stroke-linejoin="round"/><path d="M9 11h10M9 14h6" ' + s + '/>',
      calc: '<rect x="6" y="3" width="16" height="22" rx="2" ' + s + '/><path d="M10 8h8M10 13h1M14 13h1M18 13h1M10 17h1M14 17h1M18 17h1M10 21h1M14 21h5" ' + s + '/>',
      small: '<rect x="9" y="11" width="10" height="11" rx="2" fill="#7FD1B9" stroke="' + INK + '" stroke-width="2.4"/><path d="M8 11l6-5 6 5" ' + s + '/>',
      big: '<rect x="3" y="8" width="22" height="15" rx="2" fill="#FF8A5B" stroke="' + INK + '" stroke-width="2.4"/><path d="M7 13h3M12 13h4M18 13h3M12 23v-5h4v5" ' + s + '/>',
      turtle: '<path d="M5 17a9 7 0 0 1 18 0z" fill="#9BD88A" stroke="' + INK + '" stroke-width="2.4" stroke-linejoin="round"/><path d="M23 17h2M8 17v3M20 17v3" ' + s + '/>',
      rocket: '<path d="M14 3c5 4 6 10 3 16h-6C8 13 9 7 14 3z" fill="#fff" stroke="' + INK + '" stroke-width="2.4" stroke-linejoin="round"/><circle cx="14" cy="11" r="2" fill="#8DB8FF" stroke="' + INK + '" stroke-width="2"/><path d="M11 19l-2 4M17 19l2 4" ' + s + '/>',
      wood: '<path d="M14 4v20M6 10l8-6 8 6" ' + s + '/><circle cx="14" cy="13" r="6" fill="#9BD88A" stroke="' + INK + '" stroke-width="2.4"/>',
      lamp: '<path d="M8 12h12l-3-8h-6z" fill="#FFD45C" stroke="' + INK + '" stroke-width="2.4" stroke-linejoin="round"/><path d="M14 12v10M9 23h10" ' + s + '/>',
      smile: '<circle cx="14" cy="14" r="10" fill="#FFD45C" stroke="' + INK + '" stroke-width="2.4"/><path d="M10 16q4 4 8 0" ' + s + '/><circle cx="11" cy="11" r="1" fill="' + INK + '"/><circle cx="17" cy="11" r="1" fill="' + INK + '"/>',
      camera: '<rect x="4" y="8" width="20" height="14" rx="3" fill="#B9A3FF" stroke="' + INK + '" stroke-width="2.4"/><circle cx="14" cy="15" r="4" fill="#fff" stroke="' + INK + '" stroke-width="2.4"/><path d="M10 8l2-3h4l2 3" ' + s + '/>',
      tag1: '<path d="M4 14l10-10h8v8L12 22z" fill="#FFB38A" stroke="' + INK + '" stroke-width="2.4" stroke-linejoin="round"/><circle cx="18" cy="8" r="1.5" fill="' + INK + '"/>',
      tag2: '<path d="M4 14l10-10h8v8L12 22z" fill="' + INK + '" stroke="' + INK + '" stroke-width="2.4" stroke-linejoin="round"/><circle cx="18" cy="8" r="1.5" fill="#FFD45C"/>',
      cup: '<path d="M6 9h14l-2 13H8z" fill="#fff" stroke="' + INK + '" stroke-width="2.4" stroke-linejoin="round"/><path d="M20 12h2a2 2 0 0 1 0 5h-3" ' + s + '/>',
      bread: '<path d="M5 15a9 7 0 0 1 18 0v5H5z" fill="#E8A75C" stroke="' + INK + '" stroke-width="2.4" stroke-linejoin="round"/><path d="M10 13l1 3M14 12v4M18 13l-1 3" ' + s + '/>',
      plate: '<circle cx="14" cy="15" r="8" fill="#fff" stroke="' + INK + '" stroke-width="2.4"/><circle cx="14" cy="15" r="4" ' + s + '/><path d="M3 6v8M25 6v8" ' + s + '/>',
      wine: '<path d="M9 4h10q0 9-5 9t-5-9z" fill="#C2185B" stroke="' + INK + '" stroke-width="2.4" stroke-linejoin="round"/><path d="M14 13v8M10 23h8" ' + s + '/>',
      flower: '<circle cx="14" cy="9" r="3.5" fill="#FF9DB5" stroke="' + INK + '" stroke-width="2"/><circle cx="9.5" cy="12" r="3.5" fill="#FF9DB5" stroke="' + INK + '" stroke-width="2"/><circle cx="18.5" cy="12" r="3.5" fill="#FF9DB5" stroke="' + INK + '" stroke-width="2"/><circle cx="14" cy="12" r="2" fill="#FFD45C"/><path d="M14 16v8" ' + s + '/>',
      shirt: '<path d="M9 4l-5 4 3 4 2-1v12h10V11l2 1 3-4-5-4q-2 3-5 3t-5-3z" fill="#8DB8FF" stroke="' + INK + '" stroke-width="2.4" stroke-linejoin="round"/>',
      gem: '<path d="M8 5h12l4 6-10 13L4 11z" fill="#B9F0FF" stroke="' + INK + '" stroke-width="2.4" stroke-linejoin="round"/><path d="M4 11h20M11 5l3 19 3-19" ' + s + '/>',
      scissors: '<circle cx="8" cy="20" r="3.5" ' + s + '/><circle cx="20" cy="20" r="3.5" ' + s + '/><path d="M10.5 17.5L20 4M17.5 17.5L8 4" ' + s + '/>',
      bag: '<rect x="4" y="9" width="20" height="14" rx="2" fill="#FFD45C" stroke="' + INK + '" stroke-width="2.4"/><path d="M10 9V6h8v3M4 15h20" ' + s + '/>',
      question: '<circle cx="14" cy="14" r="10" fill="#fff" stroke="' + INK + '" stroke-width="2.4"/><path d="M11 11a3 3 0 1 1 4 3c-1 .5-1 1-1 2" ' + s + '/><circle cx="14" cy="19.5" r="1.2" fill="' + INK + '"/>',
      sprout: '<path d="M14 24V13" ' + s + '/><path d="M14 14c-6 0-8-4-8-8 6 0 8 4 8 8zM14 12c0-5 3-8 8-8 0 5-3 8-8 8z" fill="#9BD88A" stroke="' + INK + '" stroke-width="2.4" stroke-linejoin="round"/>',
      cal: '<rect x="4" y="6" width="20" height="18" rx="2" fill="#fff" stroke="' + INK + '" stroke-width="2.4"/><path d="M4 11h20M9 3v5M19 3v5" ' + s + '/><circle cx="14" cy="17" r="2.5" fill="#FF8A5B"/>',
      star: '<path d="M14 3l3.2 6.6 7.3 1-5.3 5.1 1.3 7.2L14 19.5l-6.5 3.4 1.3-7.2-5.3-5.1 7.3-1z" fill="#FFD45C" stroke="' + INK + '" stroke-width="2.4" stroke-linejoin="round"/>',
      key: '<circle cx="9" cy="14" r="5" fill="#FFD45C" stroke="' + INK + '" stroke-width="2.4"/><path d="M14 14h10M20 14v4M23 14v3" ' + s + '/>',
      share: '<circle cx="8" cy="14" r="3" ' + s + '/><circle cx="20" cy="7" r="3" ' + s + '/><circle cx="20" cy="21" r="3" ' + s + '/><path d="M10.6 12.5l6.8-4M10.6 15.5l6.8 4" ' + s + '/>'
    };
    return '<svg viewBox="0 0 28 28" aria-hidden="true">' + (p[name] || "") + "</svg>";
  }

  /* ---------------- 질문 ---------------- */
  // ax: role(a=S, b=B) / scale(a=A, b=G) / mood(a=W, b=C) / 나머지는 상담용 프로필
  var QUESTIONS = [
    { ax: "role", chip: "꿈의 하루", q: "10년 뒤, 나의 평일 오전 10시는?", vs: ["SAW", "BAW"],
      a: { t: "가게 문을 열고 첫 손님을 맞이한다", i: "shop" }, b: { t: "월세 입금 알림을 보며 커피를 마신다", i: "coin" } },
    { ax: "scale", chip: "가게 크기", q: "내가 꿈꾸는 가게의 크기는?", vs: ["SAC", "SGW"],
      a: { t: "혼자서도 구석구석 다 보이는 10평", i: "small" }, b: { t: "직원들과 북적이는 50평 이상", i: "big" } },
    { ax: "mood", chip: "인테리어", q: "가게 인테리어, 더 끌리는 쪽은?", vs: ["SAW", "SAC"],
      a: { t: "원목, 화분, 손글씨 메뉴판", i: "wood" }, b: { t: "대리석, 핀 조명, 미니멀한 진열", i: "lamp" } },
    { ax: "role", chip: "주말 산책", q: "일요일 오후 동네 산책 중, 더 설레는 순간은?", vs: ["SGW", "BGW"],
      a: { t: "'여기에 이런 가게를 하면 좋겠다' 상상", i: "heart" }, b: { t: "'저 건물 얼마일까' 시세 검색", i: "building" } },
    { ax: "scale", chip: "성공의 기준", q: "'성공했다'고 느낄 순간은?", vs: ["BAW", "BGC"],
      a: { t: "단골손님이 내 이름을 불러줄 때", i: "smile" }, b: { t: "2호점, 3호점 간판을 달 때", i: "rocket" } },
    { ax: "mood", chip: "손님 후기", q: "손님이 남겨줬으면 하는 후기는?", vs: ["SGW", "SGC"],
      a: { t: "\"사장님이 너무 친절하세요\"", i: "chat" }, b: { t: "\"분위기 미쳤다, 사진 맛집\"", i: "camera" } },
    { ax: "role", chip: "나의 강점", q: "나는 어느 쪽이 더 자신 있나요?", vs: ["SAC", "BAC"],
      a: { t: "손님 마음을 사로잡는 것", i: "heart" }, b: { t: "숫자와 계약 조건을 따지는 것", i: "calc" } },
    { ax: "scale", chip: "도전 스타일", q: "처음 시작할 때 나의 스타일은?", vs: ["SAW", "SGC"],
      a: { t: "작게 시작해서 천천히 키운다", i: "turtle" }, b: { t: "제대로 크게, 한 번에 간다", i: "rocket" } },
    { ax: "mood", chip: "간판 이름", q: "내 가게 간판, 어느 이름이 더 좋아요?", vs: ["BAW", "BAC"],
      a: { t: "소담빵집, 마실커피", i: "tag1" }, b: { t: "MAISON R., ATELIER 9", i: "tag2" } },
    { ax: "biz", chip: "관심 업종", q: "관심 있는 업종을 골라주세요", hint: "최대 3개까지 고를 수 있어요", multi: 3, grid: true,
      opts: [
        { t: "카페", i: "cup" }, { t: "베이커리", i: "bread" }, { t: "식당", i: "plate" }, { t: "와인바·펍", i: "wine" },
        { t: "꽃집", i: "flower" }, { t: "옷가게", i: "shirt" }, { t: "주얼리", i: "gem" }, { t: "뷰티샵", i: "scissors" },
        { t: "사무실", i: "bag" }, { t: "건물 투자", i: "building" }, { t: "아직 고민 중", i: "question" }
      ] },
    { ax: "money", chip: "꿈의 숫자", q: "꿈꾸는 한 달 순수익은?", hint: "재미로 골라보세요. 상담 때 참고만 할게요.",
      opts: [
        { t: "300만 원 정도면 행복해요", i: "sprout" }, { t: "300~700만 원", i: "coin" },
        { t: "700~1,500만 원", i: "star" }, { t: "1,500만 원 이상", i: "rocket" }, { t: "숫자보다 재미가 먼저예요", i: "smile" }
      ] },
    { ax: "when", chip: "오픈 시기", q: "언제쯤 사장님이 되고 싶나요?",
      opts: [
        { t: "6개월 안에", i: "rocket" }, { t: "1년 안에", i: "cal" }, { t: "2~3년 안에", i: "sprout" }, { t: "언젠가는 꼭", i: "star" }
      ] }
  ];

  /* ---------------- 상태 ---------------- */
  var $ = function (id) { return document.getElementById(id); };
  var views = { intro: $("view-intro"), quiz: $("view-quiz"), loading: $("view-loading"), result: $("view-result") };
  var idx = 0;
  var answers = [];
  var lastCardURL = null;

  function show(name) {
    Object.keys(views).forEach(function (k) {
      var v = views[k];
      v.hidden = k !== name;
      if (k === name) { v.style.animation = "none"; void v.offsetWidth; v.style.animation = ""; }
    });
    window.scrollTo(0, 0);
  }

  /* ---------------- 시작 화면 ---------------- */
  function renderIntro() {
    $("intro-street").innerHTML = ["SAW", "BGC", "SAC", "BAW"].map(function (c) { return '<div class="scene">' + scene(c) + "</div>"; }).join("");
    var words = ORDER.map(function (c) { return "<span>" + TYPES[c].name + "</span>"; }).join("");
    $("ribbon").innerHTML = words + words;
  }

  /* ---------------- 질문 화면 ---------------- */
  function renderDots() {
    $("dots").innerHTML = QUESTIONS.map(function (_, i) {
      return '<i class="' + (i < idx ? "done" : i === idx ? "now" : "") + '"></i>';
    }).join("");
  }

  function vsArt(pair) {
    return '<svg viewBox="0 0 400 132" xmlns="http://www.w3.org/2000/svg">' +
      '<rect width="400" height="132" fill="' + TYPES[pair[0]].tint2 + '"/><rect x="200" width="200" height="132" fill="' + TYPES[pair[1]].tint2 + '"/>' +
      '<g transform="translate(50 6) scale(.5)">' + inner(pair[0]) + '</g>' +
      '<g transform="translate(230 6) scale(.5)">' + inner(pair[1]) + '</g>' +
      '<circle cx="200" cy="66" r="20" fill="#FFD45C" stroke="' + INK + '" stroke-width="3"/><text x="200" y="73" text-anchor="middle" font-family="Jua, sans-serif" font-size="18" fill="' + INK + '">VS</text>' +
      "</svg>";
  }
  function inner(code) {
    var t = TYPES[code];
    return '<rect x="0" y="210" width="240" height="30" fill="' + t.ground + '"/>' + backdrop(t.bg, t.colors) + character(t.char);
  }
  function streetArt() {
    var codes = ["SAW", "SAC", "BAW", "BGC"];
    return '<svg viewBox="0 0 400 132" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="132" fill="#FFF4D1"/>' +
      codes.map(function (c, i) { return '<g transform="translate(' + (i * 100) + ' 12) scale(.42)">' + backdrop(TYPES[c].bg, TYPES[c].colors) + "</g>"; }).join("") +
      '<rect y="100" width="400" height="32" fill="#E9C98A"/><path d="M0 100h400" stroke="' + INK + '" stroke-width="3"/></svg>';
  }

  function renderQuestion(animate) {
    var q = QUESTIONS[idx];
    renderDots();
    $("counter").textContent = (idx + 1) + "/" + QUESTIONS.length;
    $("q-chip").textContent = q.chip;
    $("q-text").textContent = q.q;
    $("q-hint").textContent = q.hint || "";
    $("q-hint").hidden = !q.hint;
    $("btn-back").style.visibility = idx === 0 ? "hidden" : "visible";
    $("q-illust").innerHTML = q.vs ? vsArt(q.vs) : streetArt();
    $("q-illust").style.background = q.vs
      ? "linear-gradient(90deg," + TYPES[q.vs[0]].tint2 + " 50%," + TYPES[q.vs[1]].tint2 + " 50%)"
      : "linear-gradient(#FFF4D1 76%, #E9C98A 76%)";

    var box = $("options");
    box.className = "options" + (q.grid ? " grid" : "");
    box.innerHTML = "";
    var list = q.opts ? q.opts.map(function (o, i) { return { key: i, o: o }; }) : [{ key: "a", o: q.a }, { key: "b", o: q.b }];
    var cur = answers[idx];

    list.forEach(function (item) {
      var b = document.createElement("button");
      b.type = "button";
      b.id = "opt-" + idx + "-" + item.key;
      var on = q.multi ? (cur || []).indexOf(item.key) > -1 : cur === item.key;
      b.className = "option" + (on ? " on" : "");
      b.setAttribute("aria-pressed", on ? "true" : "false");
      b.innerHTML = '<span class="ic">' + icon(item.o.i) + "</span><span></span>";
      b.lastChild.textContent = item.o.t;
      b.addEventListener("click", function () { pick(item.key, b); });
      box.appendChild(b);
    });

    var next = $("btn-next");
    next.hidden = !q.multi;
    if (q.multi) {
      next.disabled = !(cur && cur.length);
      next.style.opacity = next.disabled ? ".45" : "1";
    }

    if (animate) [$("q-text"), box, $("q-illust")].forEach(function (el) { el.classList.remove("swap"); void el.offsetWidth; el.classList.add("swap"); });
  }

  var locked = false;
  function pick(key, el) {
    var q = QUESTIONS[idx];
    if (q.multi) {
      var arr = (answers[idx] || []).slice();
      var at = arr.indexOf(key);
      if (at > -1) arr.splice(at, 1);
      else {
        if (arr.length >= q.multi) { toast("최대 " + q.multi + "개까지 고를 수 있어요"); return; }
        arr.push(key);
      }
      answers[idx] = arr;
      renderQuestion(false);
      return;
    }
    if (locked) return;
    locked = true;
    answers[idx] = key;
    Array.prototype.forEach.call($("options").children, function (c) { c.classList.remove("on"); });
    el.classList.add("on");
    setTimeout(function () { locked = false; advance(); }, 240);
  }

  function advance() {
    if (idx < QUESTIONS.length - 1) { idx++; renderQuestion(true); }
    else finish();
  }

  /* ---------------- 결과 계산 ---------------- */
  function compute() {
    var sc = { role: 0, scale: 0, mood: 0 }; // a 선택 수
    var profile = { biz: [], money: "", when: "" };
    QUESTIONS.forEach(function (q, i) {
      var v = answers[i];
      if (q.ax === "role" || q.ax === "scale" || q.ax === "mood") { if (v === "a") sc[q.ax]++; }
      else if (q.ax === "biz") profile.biz = (v || []).map(function (k) { return q.opts[k].t; });
      else if (q.ax === "money") profile.money = v != null ? q.opts[v].t : "";
      else if (q.ax === "when") profile.when = v != null ? q.opts[v].t : "";
    });
    var code = (sc.role >= 2 ? "S" : "B") + (sc.scale >= 2 ? "A" : "G") + (sc.mood >= 2 ? "W" : "C");
    return { code: code, sc: sc, profile: profile };
  }

  function finish() {
    var r = compute();
    $("loading-art").innerHTML = scene(r.code);
    show("loading");
    try { history.replaceState(null, "", "#" + r.code); } catch (e) {}
    setTimeout(function () { renderResult(r.code, r); }, 1300);
  }

  /* ---------------- 결과 화면 ---------------- */
  function esc(s) { return String(s).replace(/[&<>"]/g, function (m) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m]; }); }

  function renderResult(code, r) {
    var t = TYPES[code];
    var mine = !!r;
    var pair = TYPES[PAIR[code]];
    var isOwner = code[0] === "S";

    var el = views.result;
    el.style.setProperty("--tint", t.tint);
    el.style.setProperty("--tint2", t.tint2);

    var labels = [
      code[0] === "S" ? "직접 운영하는 사장님" : "자리를 만드는 건물주",
      code[1] === "A" ? "아담하게" : "크고 넓게",
      code[2] === "W" ? "따뜻한 친구 같은" : "세련된 브랜드 같은"
    ];

    var meters = "";
    if (mine) {
      var rows = [
        ["role", "운영하는 사장님", "소유하는 건물주"],
        ["scale", "아담하게", "크고 넓게"],
        ["mood", "따뜻하게", "세련되게"]
      ];
      meters = rows.map(function (row) {
        var a = r.sc[row[0]], pct = Math.round(a / 3 * 100);
        return '<div class="meter"><div class="ends"><span class="' + (a >= 2 ? "on" : "off") + '">' + row[1] + " " + a + '</span><span class="' + (a < 2 ? "on" : "off") + '">' + (3 - a) + " " + row[2] + '</span></div>' +
          '<div class="bar"><i data-w="' + pct + '" style="width:50%"></i></div></div>';
      }).join("");
    }

    var profileCard = mine ? (
      '<div class="card"><h3><span class="ic">' + icon("key") + '</span>나의 사장님 프로필</h3>' +
        '<dl class="profile">' +
          "<dt>관심 업종</dt><dd>" + esc(r.profile.biz.length ? r.profile.biz.join(", ") : "아직 고민 중") + "</dd>" +
          "<dt>꿈의 월 순수익</dt><dd>" + esc(r.profile.money || "-") + "</dd>" +
          "<dt>오픈 목표</dt><dd>" + esc(r.profile.when || "-") + "</dd>" +
          "<dt>어울리는 자리</dt><dd>" + esc(t.vibe) + "</dd>" +
        "</dl>" +
        '<p class="body" style="font-size:14px">상담 신청 때 이 프로필을 함께 남겨주시면 이야기가 훨씬 빨라져요.</p>' +
        '<button class="btn" type="button" id="btn-copy-profile">프로필 복사하기</button>' +
      "</div>"
    ) : (
      '<div class="card"><h3><span class="ic">' + icon("key") + '</span>어울리는 자리</h3><p class="body">' + esc(t.vibe) + '</p>' +
      '<p class="body" style="font-size:14px">공유받은 결과예요. 직접 테스트하면 나만의 사장님 프로필을 볼 수 있어요.</p>' +
      '<button class="btn primary" type="button" id="btn-try">나도 테스트하기</button></div>'
    );

    var gallery = ORDER.map(function (c) {
      return '<button type="button" data-code="' + c + '"' + (c === code ? ' aria-current="true"' : "") + '><span class="g-art">' + scene(c) + '</span><span class="g-name">' + TYPES[c].name + "</span></button>";
    }).join("");

    var landingBtn = CONFIG.LANDING_URL ? '<a class="btn ghost" href="' + esc(CONFIG.LANDING_URL) + '" target="_blank" rel="noopener">' + CONFIG.OFFICE + ' 둘러보기</a>' : "";

    el.innerHTML =
      '<div class="r-hero">' +
        '<div class="art">' + scene(code) + "</div>" +
        '<div class="copy">' +
          '<p class="eyebrow">' + (mine ? "당신은 이런 사장님이 될 거예요" : "이 유형은") + "</p>" +
          "<h2>" + t.name + "</h2>" +
          '<p class="tagline">' + t.tagline + "</p>" +
          '<div class="badges">' + labels.map(function (l) { return '<span class="badge">' + l + "</span>"; }).join("") + "</div>" +
        "</div>" +
      "</div>" +

      '<div class="r-grid">' +
        '<div class="card"><h3><span class="ic">' + icon("smile") + '</span>이런 사장님이에요</h3><p class="body">' + t.desc + "</p>" + meters + "</div>" +
        profileCard +
      "</div>" +

      '<div class="r-grid">' +
        '<div class="card"><h3><span class="ic">' + icon("heart") + '</span>이런 모습, 찔리죠?</h3><ul class="dots">' + t.traits.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul>" +
          '<h3 style="margin-top:6px"><span class="ic">' + icon("shop") + '</span>잘 어울리는 업종</h3><div class="biz">' + t.biz.map(function (x) { return "<span>" + x + "</span>"; }).join("") + "</div></div>" +
        '<div class="card"><h3><span class="ic">' + icon("calc") + '</span>' + (isOwner ? "가게 자리 고를 때 체크" : "건물 고를 때 체크") + '</h3><ol class="check">' + t.check.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ol>" +
          '<p class="body" style="font-size:13px;color:var(--muted)">' + CONFIG.OFFICE + "가 상가를 볼 때 함께 확인하는 항목이에요.</p></div>" +
      "</div>" +

      '<div class="card"><h3><span class="ic">' + icon("heart") + '</span>환상의 짝꿍</h3>' +
        '<div class="match"><div class="mini">' + scene(PAIR[code]) + "</div>" +
        "<div><b>" + pair.name + "</b><p>" + (isOwner
          ? "이런 건물주를 만나면 가게가 오래 편안해요. 내 가게의 결을 알아봐 주는 건물을 찾는 게 중요해요."
          : "이런 사장님이 세입자로 들어오면 건물 가치가 함께 올라가요. 건물의 결에 맞는 가게를 고르는 게 중요해요.") + "</p></div></div>" +
      "</div>" +

      '<div class="cta">' +
        "<div><h3>내 취향에 꼭 맞는 " + (isOwner ? "가게 자리" : "건물") + ",<br>같이 찾아볼까요?</h3>" +
          "<p>" + CONFIG.OFFICE + " " + CONFIG.AGENT + "가 업종, 예산, 원하는 분위기에 맞춰 후보를 골라 비교해 드려요.</p></div>" +
        '<div class="cta-btns">' +
          '<a class="btn primary" href="' + esc(CONFIG.FORM_URL) + '" target="_blank" rel="noopener">무료 상담 신청하기</a>' +
          landingBtn +
        "</div>" +
      "</div>" +

      '<div class="card share"><h3><span class="ic">' + icon("share") + '</span>결과 카드로 자랑하기</h3>' +
        '<div class="card-preview" id="card-preview"><img alt="' + t.name + ' 결과 카드" id="card-img"></div>' +
        '<div class="row">' +
          '<button class="btn primary" type="button" id="btn-save">이미지 저장</button>' +
          '<button class="btn" type="button" id="btn-share">공유하기</button>' +
          '<button class="btn" type="button" id="btn-link">링크 복사</button>' +
        "</div>" +
        '<p class="body" style="font-size:13px;color:var(--muted)">저장한 이미지를 인스타그램 스토리나 피드에 올려보세요.</p>' +
      "</div>" +

      '<div class="card"><h3><span class="ic">' + icon("star") + '</span>8가지 사장님 유형 구경하기</h3><div class="gallery">' + gallery + "</div></div>" +

      '<div class="actions"><button class="btn dark" type="button" id="btn-retry">다시 테스트하기</button></div>';

    show("result");

    setTimeout(function () {
      Array.prototype.forEach.call(el.querySelectorAll(".bar i"), function (i) { i.style.width = i.getAttribute("data-w") + "%"; });
    }, 150);

    // 이벤트
    $("btn-retry").addEventListener("click", restart);
    if ($("btn-try")) $("btn-try").addEventListener("click", start);
    if ($("btn-copy-profile")) $("btn-copy-profile").addEventListener("click", function () {
      copyText(
        "[나의 사장님 유형] " + t.name + "\n" +
        "관심 업종: " + (r.profile.biz.join(", ") || "아직 고민 중") + "\n" +
        "꿈의 월 순수익: " + (r.profile.money || "-") + "\n" +
        "오픈 목표: " + (r.profile.when || "-") + "\n" +
        "성향: " + labels.join(" · "),
        "프로필을 복사했어요. 상담 신청서에 붙여넣어 주세요."
      );
    });
    $("btn-link").addEventListener("click", function () { copyText(shareURL(code), "링크를 복사했어요"); });
    $("btn-save").addEventListener("click", function () { saveCard(code); });
    $("btn-share").addEventListener("click", function () { shareCard(code); });
    Array.prototype.forEach.call(el.querySelectorAll(".gallery button"), function (b) {
      b.addEventListener("click", function () {
        var c = b.getAttribute("data-code");
        if (c === code) return;
        try { history.replaceState(null, "", "#" + c); } catch (e) {}
        renderResult(c, null);
      });
    });

    lastCardURL = null;
    makeCard(code).then(function (url) {
      lastCardURL = url;
      var img = $("card-img");
      if (img) img.src = url;
    }).catch(function () { var p = $("card-preview"); if (p) p.hidden = true; });
  }

  function shareURL(code) { return location.origin + location.pathname + "#" + code; }

  /* ---------------- 결과 카드 이미지 (1080×1350) ---------------- */
  function loadImage(src) {
    return new Promise(function (res, rej) { var i = new Image(); i.onload = function () { res(i); }; i.onerror = rej; i.src = src; });
  }
  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
  }

  function makeCard(code) {
    var t = TYPES[code];
    var fontsReady = (document.fonts && document.fonts.load)
      ? Promise.all([document.fonts.load('80px "Jua"'), document.fonts.load('700 30px "Pretendard"')]).catch(function () {})
      : Promise.resolve();
    var svg = scene(code, { size: 700 }).replace(/Jua, sans-serif/g, "sans-serif");
    var src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
    return fontsReady.then(function () { return loadImage(src); }).then(function (img) {
      var W = 1080, H = 1350;
      var cv = document.createElement("canvas"); cv.width = W; cv.height = H;
      var ctx = cv.getContext("2d");
      ctx.fillStyle = t.tint; ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = "rgba(46,42,79,.07)";
      for (var y = 20; y < H; y += 36) for (var x = 20; x < W; x += 36) { ctx.beginPath(); ctx.arc(x, y, 2.5, 0, 7); ctx.fill(); }

      // 카드
      ctx.fillStyle = INK; roundRect(ctx, 64, 72, 952, 1220, 56); ctx.fill();
      ctx.fillStyle = "#fff"; roundRect(ctx, 60, 60, 952, 1220, 56); ctx.fill();
      ctx.lineWidth = 7; ctx.strokeStyle = INK; ctx.stroke();

      ctx.textAlign = "center"; ctx.fillStyle = "#8E89A8";
      ctx.font = '700 34px "Pretendard", sans-serif';
      ctx.fillText("나는 어떤 사장님이 될까?", 536, 140);

      // 그림
      ctx.save(); roundRect(ctx, 196, 176, 680, 680, 44); ctx.clip();
      ctx.drawImage(img, 186, 166, 700, 700); ctx.restore();
      roundRect(ctx, 196, 176, 680, 680, 44); ctx.lineWidth = 6; ctx.stroke();

      ctx.fillStyle = INK; ctx.font = '96px "Jua", sans-serif';
      ctx.fillText(t.name, 536, 980);
      ctx.fillStyle = "#5B5778"; ctx.font = '40px "Jua", sans-serif';
      ctx.fillText(t.tagline, 536, 1046);

      var tags = [code[0] === "S" ? "#운영하는사장님" : "#자리만드는건물주", code[1] === "A" ? "#아담하게" : "#크고넓게", code[2] === "W" ? "#따뜻하게" : "#세련되게"];
      ctx.font = '700 32px "Pretendard", sans-serif';
      var widths = tags.map(function (s) { return ctx.measureText(s).width + 44; });
      var total = widths.reduce(function (a, b) { return a + b; }, 0) + 16 * (tags.length - 1);
      var x0 = 536 - total / 2;
      tags.forEach(function (s, i) {
        ctx.fillStyle = t.tint; roundRect(ctx, x0, 1086, widths[i], 58, 29); ctx.fill();
        ctx.lineWidth = 4; ctx.strokeStyle = INK; ctx.stroke();
        ctx.fillStyle = INK; ctx.textAlign = "left"; ctx.fillText(s, x0 + 22, 1126);
        x0 += widths[i] + 16;
      });

      ctx.textAlign = "center"; ctx.fillStyle = "#8E89A8"; ctx.font = '600 28px "Pretendard", sans-serif';
      ctx.fillText(CONFIG.OFFICE + " · 사장님 유형 테스트", 536, 1226);

      return cv.toDataURL("image/png");
    });
  }

  function dataURLtoFile(url, name) {
    var parts = url.split(","), bin = atob(parts[1]), n = bin.length, u8 = new Uint8Array(n);
    while (n--) u8[n] = bin.charCodeAt(n);
    return new File([u8], name, { type: "image/png" });
  }

  function withCard(code, fn) {
    if (lastCardURL) return fn(lastCardURL);
    makeCard(code).then(function (u) { lastCardURL = u; fn(u); }).catch(function () { toast("이미지를 만들지 못했어요. 화면을 캡처해 주세요."); });
  }

  function saveCard(code) {
    withCard(code, function (url) {
      var a = document.createElement("a");
      a.href = url; a.download = "사장님유형_" + TYPES[code].name + ".png";
      document.body.appendChild(a); a.click(); a.remove();
      toast("이미지를 저장했어요");
    });
  }

  function shareCard(code) {
    var t = TYPES[code];
    var text = "나는 '" + t.name + "' 타입! " + t.tagline + "\n나는 어떤 사장님이 될까? 👉 " + shareURL(code);
    withCard(code, function (url) {
      var file = dataURLtoFile(url, "boss-type.png");
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        navigator.share({ files: [file], text: text, title: "나는 어떤 사장님이 될까?" }).catch(function () {});
      } else if (navigator.share) {
        navigator.share({ title: "나는 어떤 사장님이 될까?", text: text, url: shareURL(code) }).catch(function () {});
      } else {
        copyText(text, "공유 문구를 복사했어요. 이미지는 '이미지 저장'으로 받아주세요.");
      }
    });
  }

  /* ---------------- 유틸 ---------------- */
  function copyText(text, msg) {
    function fallback() {
      try {
        var ta = document.createElement("textarea");
        ta.value = text; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
        document.body.appendChild(ta); ta.select();
        var ok = document.execCommand("copy"); ta.remove();
        toast(ok ? msg : "복사하지 못했어요");
      } catch (e) { toast("복사하지 못했어요"); }
    }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(function () { toast(msg); }).catch(fallback);
    else fallback();
  }

  var toastTimer;
  function toast(msg) {
    var el = $("toast"); el.textContent = msg; el.classList.add("on");
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { el.classList.remove("on"); }, 2400);
  }

  function start() { idx = 0; answers = []; show("quiz"); renderQuestion(false); }
  function restart() {
    idx = 0; answers = [];
    try { history.replaceState(null, "", location.pathname); } catch (e) {}
    show("intro");
  }

  $("btn-start").addEventListener("click", start);
  $("btn-back").addEventListener("click", function () { if (idx > 0) { idx--; renderQuestion(true); } });
  $("btn-next").addEventListener("click", function () { var a = answers[idx]; if (a && a.length) advance(); });

  renderIntro();
  var m = /^#([SB][AG][WC])$/.exec(location.hash);
  if (m && TYPES[m[1]]) renderResult(m[1], null);
})();
