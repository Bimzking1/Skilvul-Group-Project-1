const navbarElement = document.getElementById("navbarElement");

if (localStorage.getItem("Email")) {
  navbarElement.innerHTML = `
    <button class="btn button" onclick=Logout() type="button">Logout</button>
    `;
} else {
  navbarElement.innerHTML = `
    <button class="btn button" onclick="location.href='loginPage.html'" type="button">Masuk</button>
    `;
}

function Logout() {
  localStorage.clear();
  window.location.reload();
}

// Fetch API Program
const api_program = "https://634f91da78563c1d82a9bced.mockapi.io/new-program";

let getProgram = async (url) => {
  let responses = await fetch(url);
  let dataProgram = await responses.json();
  console.log(dataProgram);
  //   Cuma mau nampilin 3 program di Program Terbaru
  for (var i = 0; i < 3; i++) {
    const containerCard = document.querySelector(".container-card");
    containerCard.innerHTML += `
    <div class="card" style="width: 22rem">
      <img
        src="${dataProgram[i].poster}"
        class="card-img-top"
        alt="Make a change"
      />
      <div class="card-body">
        <h5 class="card-title mb-4">${dataProgram[i].nama_program}</h5>
        <div class="d-flex justify-content-between align-items-center">
          <div
            class="d-flex align-items-center gap-1 w-50 justify-content-start"
          >
            <img
              src="${dataProgram[i].partner.logo}"
              class="image-pt"
              alt="${dataProgram[i].partner.nama}"
            />
            <h6 class="mt-1">${dataProgram[i].partner.nama}</h6>
          </div>
          <a href="detail program.html" onclick="localStorage.setItem('idCampaign', ${dataProgram[i].id})">Detail</a>
        </div>
      </div>
    </div>
    `;
  }
  
  // Nampilin program di Program Disabiltias
  for (var i = 9; i > 6; i--) {
    const containerCardDisabilitas = document.querySelector(
      ".container-card-disabilitas"
    );
    containerCardDisabilitas.innerHTML += `
    <div class="card" style="width: 22rem">
    <img
      src="${dataProgram[i].poster}"
      class="card-img-top"
      alt="Make a change"
    />
    <div class="card-body">
      <h5 class="card-title mb-4">${dataProgram[i].nama_program}</h5>
      <div class="d-flex justify-content-between align-items-center">
        <div
          class="d-flex align-items-center gap-1 w-50 justify-content-start"
        >
          <img
            src="${dataProgram[i].partner.logo}"
            class="image-pt"
            alt="${dataProgram[i].partner.nama}"
          />
          <h6 class="mt-1">${dataProgram[i].partner.nama}</h6>
        </div>
        <a href="detail program.html" onclick="localStorage.setItem('idCampaign', ${dataProgram[i].id})">Detail</a>
      </div>
    </div>
  </div>
  `;
  }
  //   dataProgram.forEach((e) => {
  //     console.log(e.nama_program);
  //   });
};

getProgram(api_program);
