let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let name1 = id("name"),
    email = id("email"),
    tel = id("tel"),
    password = id("password"),
    repeatPassword = id("repeatPassword"),
    form = id("form"),
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
        e.preventDefault();

        engine(name1, 0, "Username cannot be blank");
        engine(email, 1, "Email cannot be blank");
        engine(tel, 2, "Tel cannot be blank");
        engine(password, 3, "Password cannot be blank");
        engine(repeatPassword, 4, "Repeat password cannot be blank");
    });
let engine = (id, serial, message) => {
    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";

        //icons
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    } else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";

        // icons
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
    }
};
