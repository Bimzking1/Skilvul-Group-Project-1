const form = document.getElementById('form')
const emailElement = document.getElementById('email');
const passwordElement = document.getElementById('password');

async function signIn(email, password) { 
    let response = await fetch('https://634e4141f34e1ed826869202.mockapi.io/users', {
        method: 'GET'
    })
    if (!response.ok) {
        throw new Error(`HTTP error. Status ${response.status}`)
    }
    
    const data = await response.json()
    const user = await data.find(d =>
        d.email === email &&
        d.password === password
    )
    if (user) {
        localStorage.setItem('Email', user.email)
        console.log('login sukses')
        window.location.replace("landingPage.html")
        alert("Login sukses!");
    } else {
        console.log('login gagal')
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const email = emailElement.value
    const password = passwordElement.value

    signIn(email, password)
})