import { auth, createUserWithEmailAndPassword, RecaptchaVerifier, signInWithPhoneNumber } from "./firebase.js";

// window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
//     'size': 'invisible',
//     'callback': (response) => {
//         // reCAPTCHA solved, allow signInWithPhoneNumber.
//         //   onSignInSubmit();
//        console.log("Recaptcha chalgaya")
//     }
// });
auth.languageCode = 'en';

const register = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    //Login existing user 
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("existing user-->", user);
            // window.location.href = "/index.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("error", errorMessage);
            // Swal.fire(`${errorMessage}`);
        });
        //sign in with Phone Number -- requires billing
    // const phone = document.getElementById("phone");
    // window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {});
    // const appVerifier = window.recaptchaVerifier;
    // console.log("phone Number", phone.value);

    // signInWithPhoneNumber(auth, `+${phone.value}`, appVerifier)
    //     .then((confirmationResult) => {
    //         // SMS sent. Prompt user to type the code from the message, then sign the
    //         // user in with confirmationResult.confirm(code).
    //         window.confirmationResult = confirmationResult;
    //         console.log("SMS sent! ", confirmationResult);
    //     }).catch((error) => {
    //         // Error; SMS not sent
    //         console.log("SMS not sent ", error)
    //     });
}


let signInButton = document.getElementById("sign-in-button");
signInButton.addEventListener('click', register);
let registerUser = document.getElementById("registerUser");

registerUser.addEventListener('click', register);
