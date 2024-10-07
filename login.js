import {auth, signInWithEmailAndPassword} from "./firebase.js";

let loginUser = document.getElementById("loginUser");

const login = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    //Login existing user 
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("existing user-->", user);
        window.location.href = "./profile.html"
        // window.location.href = "/index.html";
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error", errorMessage);
        // Swal.fire(`${errorMessage}`);
    });
}

loginUser.addEventListener('click', login);
