document.getElementById("show-password").addEventListener("change", function() {
    const passwordEl = document.getElementById("password")
    if(this.checked) {
        passwordEl.type = "text"
    } else {
        passwordEl.type = "password"
    }
})

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault()
})