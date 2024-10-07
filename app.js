import { auth, onAuthStateChanged, signOut, sendEmailVerification } from "./firebase.js";

let name = document.getElementById("name");
let email = document.getElementById("email");
let profileContent = document.getElementById("profile-content");
let spinner = document.getElementById("spinner");

onAuthStateChanged(auth, (user) => {
    if (user) {
            sendEmailVerification(auth.currentUser)
            .then(() => {
              // Email verification sent!
              // ...
              console.log("email sent");
            });
        const uid = user.uid;
        if (location.pathname !== "/profile.html") {
            window.location = "/profile.html";
        }
        spinner.style.display = "none";
        profileContent.style.display = "flex";
        console.log("User Login uid---->", user, uid);
        email.innerHTML = user.email;
        name.innerHTML = user.email.slice(0, user.email.indexOf("@"));

    } else {
        // User is signed out
        if (location.pathname !== "/register.html" && location.pathname !== "/index.html") {
            window.location = "/index.html";
        }
        console.log("User  Logged out!");
    }
});

let logoutUser = () => {
    signOut(auth).then(() => {
        console.log("Logged Out Successfully!")
        // alert("Logged Out Successfully!");
        window.location.href = "index.html";
    }).catch((error) => {
        // An error happened.
        console.log("Unable to LogOut!", error)
    });
}

let logout = document.getElementById("logout");
logout && logout.addEventListener('click', logoutUser);  //alternate of if statement
 
// if(logout){
//     logout.addEventListener('click', logoutUser);
// }

//to resolve addEventListener add below if statement OR create separate files
// if (registerUser) {
//     registerUser.addEventListener("click", registerFunction);
// }