document.getElementById("show-password").addEventListener("change", function() {
    const passwordEl = document.getElementById("password")
    if(this.checked) {
        passwordEl.type = "text"
    } else {
        passwordEl.type = "password"
    }
})

document.getElementById("signin-btn").addEventListener("click", function() {
    const email = document.getElementById("email")
    const password = document.getElementById("password")

    if(email.value && password.value) {
        
    } else {
        document.getElementById("login-card").innerHTML += `<p id="error" aria-live="assertive">Devi completare tutti i campi!</p>`
    }
})