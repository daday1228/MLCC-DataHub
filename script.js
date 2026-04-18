function showForm() {
  const c = document.getElementById("category").value;
  const area = document.getElementById("formArea");
  area.innerHTML = "";

  if (c === "surface") {
    area.innerHTML = `
      <div class="form-card">
        <div class="form-title">표면개질 공정 – 기본 정보</div>

        <div class="form-grid">

          <div class="input-box">
            <label>실험일</label>
            <input type="date">
          </div>

          <div class="input-box">
            <label>원료 ID</label>
            <input type="text">
          </div>

          <div class="input-box">
            <label>실험자</label>
            <input type="text" value="${sessionStorage.getItem("user")}" readonly>
          </div>

          <div class="input-box">
            <label>표면개질 ID</label>
            <input type="text">
          </div>

        </div>

        <hr><br>

        <div class="form-title">공정 조건</div>
        <div class="form-grid">
          <div class="input-box"><label>원료 양</label><input type="text"></div>
          <div class="input-box"><label>개질제 양</label><input type="text"></div>
          <div class="input-box"><label>용매 양</label><input type="text"></div>
          <div class="input-box"><label>반응 온도</label><input type="text"></div>
          <div class="input-box"><label>반응 시간</label><input type="text"></div>
        </div>

        <hr><br>

        <div class="form-title">측정 물성</div>
        <div class="form-grid">
          <div class="input-box"><label>Zeta Potential</label><input type="text"></div>
          <div class="input-box"><label>체인 길이</label><input type="text"></div>
          <div class="input-box"><label>Density</label><input type="text"></div>
          <div class="input-box"><label>입도 분포</label><input type="text"></div>
        </div>
      </div>
    `;
  }

  else if (c === "paste") {
    area.innerHTML = `
      <div class="form-card">
        <div class="form-title">페이스트화 공정 – 기본 정보</div>

        <div class="form-grid">
          <div class="input-box"><label>실험일</label><input type="date"></div>
          <div class="input-box"><label>표면개질 ID</label><input type="text"></div>
          <div class="input-box"><label>실험자</label><input type="text" value="${sessionStorage.getItem("user")}" readonly></div>
          <div class="input-box"><label>페이스트화 ID</label><input type="text"></div>
        </div>

        <hr><br>

        <div class="form-title">공정 조건</div>
        <div class="form-grid">
          <div class="input-box"><label>배합비</label><input type="text"></div>
          <div class="input-box"><label>분산제</label><input type="text"></div>
          <div class="input-box"><label>바인더</label><input type="text"></div>
          <div class="input-box"><label>용매</label><input type="text"></div>
          <div class="input-box"><label>혼합 시간</label><input type="text"></div>
          <div class="input-box"><label>혼합 온도</label><input type="text"></div>
        </div>

        <hr><br>

        <div class="form-title">페이스트 측정 물성</div>
        <div class="form-grid">
          <div class="input-box"><label>Viscosity</label><input type="text"></div>
          <div class="input-box"><label>Thixotropic Index</label><input type="text"></div>
          <div class="input-box"><label>점탄성</label><input type="text"></div>
        </div>
      </div>
    `;
  }

  else if (c === "sheet") {
    area.innerHTML = `
      <div class="form-card">
        <div class="form-title">시트화 공정 – 기본 정보</div>

        <div class="form-grid">
          <div class="input-box"><label>실험일</label><input type="date"></div>
          <div class="input-box"><label>페이스트화 ID</label><input type="text"></div>
          <div class="input-box"><label>실험자</label><input type="text" value="${sessionStorage.getItem("user")}" readonly></div>
          <div class="input-box"><label>시트화 ID</label><input type="text"></div>
        </div>

        <hr><br>

        <div class="form-title">공정 조건</div>
        <div class="form-grid">
          <div class="input-box"><label>캐스팅 두께</label><input type="text"></div>
          <div class="input-box"><label>캐스팅 속도</label><input type="text"></div>
          <div class="input-box"><label>건조 온도</label><input type="text"></div>
          <div class="input-box"><label>건조 시간</label><input type="text"></div>
        </div>

        <hr><br>

        <div class="form-title">측정 물성</div>
        <div class="form-grid">
          <div class="input-box"><label>Zeta Potential</label><input type="text"></div>
          <div class="input-box"><label>Stability</label><input type="text"></div>
          <div class="input-box"><label>고형분 함량</label><input type="text"></div>

          <div class="input-box"><label>그린 밀도</label><input type="text"></div>
          <div class="input-box"><label>바인더 분포 균일도</label><input type="text"></div>
          <div class="input-box"><label>표면조도 (Ra, Rpk)</label><input type="text"></div>
        </div>
      </div>
    `;
  }
}
