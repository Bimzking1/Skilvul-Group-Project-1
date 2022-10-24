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
  window.location.replace("index.html");
}

// Fetch API
const APIURL = "https://634f91da78563c1d82a9bced.mockapi.io/new-program";
let getDataProgram = async (url) => {
  let response = await fetch(url);
  let programs = await response.json();
  let data = programs;
  // console.log(programs);
  showProgram(data);

  // Search
  const searchField = document.getElementById("search-field");
  searchField.addEventListener("keyup", (e) => {
    const containerCard = document.querySelector(".container-card");
    containerCard.innerHTML = "";
    const searchQuery = e.target.value.toLowerCase();
    const filteredProgram = data.filter((program) => {
      const nProgram = program.nama_program.toLowerCase();
      const x = nProgram.includes(searchQuery);
      return x;
    });
    showProgram(filteredProgram);
  });
};
getDataProgram(APIURL);

// Tampilkan Program
function showProgram(data) {
  data.forEach((program) => {
    const containerCard = document.querySelector(".container-card");
    containerCard.innerHTML += `
     <div class="card col-4" style="width: 22rem">
     <img
       src="${program.poster}"
       class="card-img-top"
       alt="Make a change"
     />
     <div class="card-body">
       <h5 class="card-title mb-4">${program.nama_program}</h5>
       <div class="d-flex justify-content-between align-items-center">
         <div
           class="d-flex align-items-center gap-1 w-50 justify-content-start"
         >
           <img
             src="${program.partner.logo}"
             class="image-pt"
             alt="${program.partner.nama}"          />
           <h6 class="mt-1">${program.partner.nama}</h6>
         </div>
         <a href="detail program.html" onclick="localStorage.setItem('idCampaign', ${program.id})">Detail</a>
       </div>
     </div>
   </div>
     `;
  });
}
// Search
