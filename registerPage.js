const form = document.getElementById('form')
const emailElement = document.getElementById('email');
const usernameElement = document.getElementById('username');
const passwordElement = document.getElementById('password');

async function signUp(name, username, password) { 
    if ((email == '') || (username == '') || (password == '')) {
        console.log('data tidak boleh kosong')
    } else {
        const postData = {
            email: emailElement.value,
            username: usernameElement.value,
            password: passwordElement.value
        }
        let response = await fetch('https://634e4141f34e1ed826869202.mockapi.io/users', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: { "Content-type": "application/json" }
        })
    
        if (response.ok) {
            console.log('register sukses')
            window.location.replace("loginPage.html")
            alert("Registrasi sukses! Silahkan masukan data anda.");
        } else {
            console.log('register gagal')
            throw new Error(`HTTP error. Status ${response.status}`)
        }
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const email = emailElement.value
    const username = usernameElement.value
    const password = passwordElement.value

    signUp(email, username, password)
})