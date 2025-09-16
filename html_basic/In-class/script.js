function validate(e) {
    e.preventDefault();
    
    console.log("submitted")
    let email = document.getElementById("email")

    const emailLabel = document.getElementById("emailLabel")
    const emailError = document.getElementById("emailError")
    emailRegex = /.*[@].*/


    if (!emailRegex.test(email.value)){
        email.style.color = "red"
        emailLabel.style.color= "red"
        emailError.textContent = "Email : invalid email must contain @ "
    }
    
};
