// 비밀번호 → 이니셜 매핑
const users = {
  "0000": "K",
  "1111": "D",
  "2222": "Y"
};

// 이미지 매핑 (너가 준 파일명 그대로 사용)
const profileImages = {
  "K": "experimenter_K.png",
  "D": "experimenter_D.png",
  "Y": "experimenter_Y.png"
};

// 로그인 기능
function login() {
  const pw = document.getElementById("password").value;

  if (users[pw]) {
    sessionStorage.setItem("user", users[pw]);
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("msg").textContent = "잘못된 비밀번호입니다.";
  }
}

// 페이지 로딩되면 프로필 정보 표시
document.addEventListener("DOMContentLoaded", () => {
  const user = sessionStorage.getItem("user");

  if (document.getElementById("profileImg")) {
    if (!user) {
      window.location.href = "index.html";
      return;
    }

    document.getElementById("profileImg").src = profileImages[user];
    document.getElementById("profileName").textContent = "작업자";
    document.getElementById("profileId").textContent = "ID: " + user;
  }
});
