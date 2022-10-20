const navbarElement = document.getElementById('navbarElement')

if (localStorage.getItem('Email')) {
    navbarElement.innerHTML = 
        `
        <button class="btn button" onclick=Logout() type="button">Logout</button>
        `
} else {
    navbarElement.innerHTML = 
        `
        <button class="btn button" onclick="location.href='loginPage.html'" type="button">Masuk</button>
        `
}

function Logout() {
    localStorage.removeItem('Email')
    window.location.reload()
}