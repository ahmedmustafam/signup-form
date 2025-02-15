const password1 = document.getElementById("password");
const password2 = document.getElementById("passwordconf");

password2.addEventListener("input", () => {
    if (password2.value != password1.value) {
        password2.setCustomValidity("Passwords do not match");
    } else {
        password2.setCustomValidity("");
    }
})