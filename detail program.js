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
  window.location.replace('landingPage.html');
}

// Content

// Fetch API Program
const id = localStorage.getItem('idCampaign')
const api_program = `https://634f91da78563c1d82a9bced.mockapi.io/new-program/${id}`;

let getProgram = async (url) => {
    let responses = await fetch(url);
    let dataProgram = await responses.json();

    console.log('ini data program: ', dataProgram)
    const containerOuter = document.querySelector(".container-outer");
    containerOuter.innerHTML += `
        <section class="container text-md-start py-5 py-md-5 px-md-0">
            <div
                class="container d-flex flex-column justify-content-center align-items-center flex-md-row"
            >
                <div class="">
                    <img
                        src="${dataProgram.poster}"
                        class="img-fluid w-100 w-md-50 col-2 order-1 order-md-1 mx-md-0 rounded"
                        alt="together-pana"
                    />
                </div>
                <div class="order-2 order-md-2 mt-4 mt-md-0 px-md-4">
                    <h1 class="fw-bold">
                        ${dataProgram.nama_program}
                    </h1>
                    <div class="d-flex">
                        <img
                            src="${dataProgram.partner.logo}"
                            class="my-3 text-start campaign-logo"
                            alt="logo"
                        />
                        <p class="my-3 text-start">
                            ${dataProgram.partner.nama}
                        </p>
                    </div>
                    <div class="button-joined">

                    </div>
                </div>
            </div>
        </section>
        
        <section class="container text-md-start py-md-0 px-md-0 mt-md-4">
            <div
                class="container d-flex flex-column justify-content-center align-items-center mx-auto flex-md-row"
            >
                <div class="order-2 order-md-1">
                    <h3 class="fw-bold">
                        Detail Program
                    </h3>
                    <p class="my-3 text-start">
                        ${dataProgram.detail}
                    </p>
                </div>
            </div>
        </section>
    `;
    const buttonJoined = document.querySelector(".button-joined");

    if ((localStorage.getItem('CampaignJoined')) == (localStorage.getItem('idCampaign'))) {
        buttonJoined.innerHTML += `
            <button disabled class="btn button mt-2 mt-lg-0" onclick="joinCampaign(${id})">Anda Telah Tergabung</button>
        `
    } else{
        buttonJoined.innerHTML += `
            <button class="btn button mt-2 mt-lg-0" onclick="joinCampaign(${id})">Join Program</button>
        `
    }
};

getProgram(api_program);

async function joinCampaign(idCampaign) {
    if (localStorage.getItem('Email')){
        const idUser = localStorage.getItem('UserID')
        const postData = {
            campaign: idCampaign
        }
        let response = await fetch(`https://634e4141f34e1ed826869202.mockapi.io/users/${idUser}`, {
            method: 'PUT',
            body: JSON.stringify(postData),
            headers: { "Content-type": "application/json" }
        })
    
        if (response.ok) {
            console.log('Anda berhasil bergabung dalam kegiatan.')
            alert("Anda berhasil bergabung dalam kegiatan.");
            localStorage.setItem('CampaignJoined', idCampaign)
            window.location.reload()
        } else {
            console.log('Anda gagal bergabung dalam kegiatan.')
            throw new Error(`HTTP error. Status ${response.status}`)
        }
    } else {
        alert('Anda harus login lebih dahulu!')
        window.location.reload()
    }
}