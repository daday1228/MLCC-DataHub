// 비밀번호 → 이니셜 매핑
const users = {
  "0000": "K",
  "1111": "D",
  "2222": "Y"
};

// 로그인 로직
function login() {
  const pw = document.getElementById("password").value;
  if (users[pw]) {
    sessionStorage.setItem("user", users[pw]);
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("msg").textContent = "잘못된 비밀번호입니다.";
  }
}

// 로그인 상태 표시
window.addEventListener("DOMContentLoaded", () => {
  const initialSpan = document.getElementById("userInitial");
  if (initialSpan) {
    const user = sessionStorage.getItem("user");
    initialSpan.textContent = user ? user : "로그인 필요";
  }
});

// 카테고리별 폼 표시 (간단 프로토타입)
function showForm() {
  const c = document.getElementById("category").value;
  const area = document.getElementById("formArea");
  area.innerHTML = "";

  if (c === "surface") {
    area.innerHTML = `
      <h3>표면개질 공정</h3>
      <label>실험일: <input type="date"></label><br>
      <label>원료 ID: <input type="text"></label><br>
      <label>표면개질 ID: <input type="text"></label><br>
      <label>비고: <input type="text"></label><br>
      <h4>공정 조건</h4>
      <label>원료 양 <input type="text"></label>
      <label>개질제 양 <input type="text"></label>
      <button>저장(예시)</button>
    `;
  } else if (c === "paste") {
    area.innerHTML = `
      <h3>페이스트화 공정</h3>
      <label>실험일: <input type="date"></label><br>
      <label>표면개질 ID: <input type="text"></label><br>
      <label>페이스트 ID: <input type="text"></label><br>
      <h4>공정 조건</h4>
      <label>배합비 <input type="text"></label>
      <button>저장(예시)</button>
    `;
  } else if (c === "sheet") {
    area.innerHTML = `
      <h3>시트화 공정</h3>
      <label>실험일: <input type="date"></label><br>
      <label>페이스트화 ID: <input type="text"></label><br>
      <label>시트화 ID: <input type="text"></label><br>
      <h4>공정 조건</h4>
      <label>캐스팅 두께 <input type="text"></label>
      <button>저장(예시)</button>
    `;
  }
}
