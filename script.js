/***************************************************
 * MLCC DataHub 전체 스크립트 (로그인 + 프로필 + 입력폼)
 ***************************************************/

/* 1️⃣ 실험자 비밀번호 → 이니셜 매핑 */
const users = {
  "0000": "K",
  "1111": "D",
  "2222": "Y"
};

/* 2️⃣ 이니셜 → 프로필 이미지 매핑 (GitHub에 파일 이름 그대로 올려야 함) */
const profileImages = {
  "K": "experimenter_K.png",
  "D": "experimenter_D.png",
  "Y": "experimenter_Y.png"
};

/***************************************************
 * 로그인 처리
 ***************************************************/
function login() {
  const pw = document.getElementById("password").value;
  const userInitial = users[pw];

  if (userInitial) {
    // 로그인 성공
    sessionStorage.setItem("user", userInitial);
    window.location.href = "dashboard.html"; // 대시보드로 이동
  } else {
    const msg = document.getElementById("msg");
    if (msg) msg.textContent = "잘못된 비밀번호입니다.";
  }
}

/***************************************************
 * 페이지 로드 시 자동 실행 (프로필 표시/로그인 체크)
 ***************************************************/
document.addEventListener("DOMContentLoaded", () => {
  const user = sessionStorage.getItem("user");
  const profileImg = document.getElementById("profileImg");
  const profileId = document.getElementById("profileId");

  if (profileImg && profileId) {
    if (!user) {
      // 로그인 안 된 상태 → 로그인 페이지로 보냄
      window.location.href = "index.html";
      return;
    }

    // 로그인된 사용자 표시
    profileImg.src = profileImages[user];
    profileId.textContent = "ID: " + user;
  }
});

/***************************************************
 * 데이터 입력 폼 표시 (카테고리 선택에 따라 내용 생성)
 ***************************************************/
function showForm() {
  const c = document.getElementById("category").value;
  const area = document.getElementById("formArea");
  if (!area) return;

  area.innerHTML = "";
  const user = sessionStorage.getItem("user") || "";

  /*******************
   * ① 표면개질 공정
   *******************/
  if (c === "surface") {
    area.innerHTML = `
      <div class="section-wrapper">
        <div class="section-label">기본 정보</div>
        <div class="form-grid">
          <div class="input-box"><label>실험일</label><input type="date"></div>
          <div class="input-box"><label>원료 ID</label><input type="text"></div>
          <div class="input-box"><label>실험자</label><input type="text" value="${user}" readonly></div>
          <div class="input-box"><label>표면개질 ID</label><input type="text"></div>
        </div>
      </div>

      <div class="section-wrapper">
        <div class="section-label">공정 조건</div>
        <div class="form-grid">
          <div class="input-box"><label>원료 양</label><input type="text"></div>
          <div class="input-box"><label>개질제 양</label><input type="text"></div>
          <div class="input-box"><label>용매 양</label><input type="text"></div>
          <div class="input-box"><label>반응 온도</label><input type="text"></div>
          <div class="input-box"><label>반응 시간</label><input type="text"></div>
        </div>
      </div>

      <div class="section-wrapper">
        <div class="section-label">측정 물성</div>
        <div class="form-grid">
          <div class="input-box"><label>Zeta Potential</label><input type="text"></div>
          <div class="input-box"><label>체인 길이</label><input type="text"></div>
          <div class="input-box"><label>Density</label><input type="text"></div>
          <div class="input-box"><label>입도 분포</label><input type="text"></div>
        </div>
      </div>

      <div style="text-align:right; margin-top:30px;">
        <button class="save-btn">저장하기</button>
      </div>
    `;
  }

  /*******************
   * ② 페이스트화 공정
   *******************/
  else if (c === "paste") {
    area.innerHTML = `
      <div class="section-wrapper">
        <div class="section-label">기본 정보</div>
        <div class="form-grid">
          <div class="input-box"><label>실험일</label><input type="date"></div>
          <div class="input-box"><label>표면개질 ID</label><input type="text"></div>
          <div class="input-box"><label>실험자</label><input type="text" value="${user}" readonly></div>
          <div class="input-box"><label>페이스트화 ID</label><input type="text"></div>
        </div>
      </div>

      <div class="section-wrapper">
        <div class="section-label">공정 조건</div>
        <div class="form-grid">
          <div class="input-box"><label>배합비</label><input type="text"></div>
          <div class="input-box"><label>분산제</label><input type="text"></div>
          <div class="input-box"><label>바인더</label><input type="text"></div>
          <div class="input-box"><label>용매</label><input type="text"></div>
          <div class="input-box"><label>혼합 시간</label><input type="text"></div>
          <div class="input-box"><label>혼합 온도</label><input type="text"></div>
        </div>
      </div>

      <div class="section-wrapper">
        <div class="section-label">측정 물성</div>
        <div class="form-grid">
          <div class="input-box"><label>Viscosity</label><input type="text"></div>
          <div class="input-box"><label>Thixotropic Index</label><input type="text"></div>
          <div class="input-box"><label>점탄성</label><input type="text"></div>
        </div>
      </div>

      <div style="text-align:right; margin-top:30px;">
        <button class="save-btn">저장하기</button>
      </div>
    `;
  }

  /*******************
   * ③ 시트화 공정
   *******************/
  else if (c === "sheet") {
    area.innerHTML = `
      <div class="section-wrapper">
        <div class="section-label">기본 정보</div>
        <div class="form-grid">
          <div class="input-box"><label>실험일</label><input type="date"></div>
          <div class="input-box"><label>페이스트화 ID</label><input type="text"></div>
          <div class="input-box"><label>실험자</label><input type="text" value="${user}" readonly></div>
          <div class="input-box"><label>시트화 ID</label><input type="text"></div>
        </div>
      </div>

      <div class="section-wrapper">
        <div class="section-label">공정 조건</div>
        <div class="form-grid">
          <div class="input-box"><label>캐스팅 두께</label><input type="text"></div>
          <div class="input-box"><label>캐스팅 속도</label><input type="text"></div>
          <div class="input-box"><label>건조 온도</label><input type="text"></div>
          <div class="input-box"><label>건조 시간</label><input type="text"></div>
        </div>
      </div>

      <div class="section-wrapper">
        <div class="section-label">측정 물성</div>
        <div class="form-grid">
          <div class="input-box"><label>Zeta Potential</label><input type="text"></div>
          <div class="input-box"><label>Stability</label><input type="text"></div>
          <div class="input-box"><label>고형분 함량</label><input type="text"></div>
          <div class="input-box"><label>그린 밀도</label><input type="text"></div>
          <div class="input-box"><label>바인더 분포 균일도</label><input type="text"></div>
          <div class="input-box"><label>표면조도 (Ra, Rpk)</label><input type="text"></div>
        </div>
      </div>

      <div style="text-align:right; margin-top:30px;">
        <button class="save-btn">저장하기</button>
      </div>
    `;
  }
}