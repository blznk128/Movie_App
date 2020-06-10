const user = $("#userName");
const userPassword = $("#passWord");
var hbsContent = {userName: '', loggedin: false, title: "You are not logged in today", body: "Hello World"};
function goToLogin() {
    event.preventDefault();
  window.location.href = "/logIn"
}

function logUser() {
    event.preventDefault()
    let logInUser = {
        userName: user.val(),
        password: userPassword.val()
        
    }
    console.log("this is logInUser: " , logInUser)
    logIn(logInUser)
    // window.location.href = "/landing"
};


function logIn(userId) {
    $.post("/api/logIn", userId, () => {
        console.log("this is userId:" + userId)
        window.location.href = "/landing"
    })
}

// function goToLogOff(userId) {
//     event.preventDefault();
//     console.log("hi")
//     $.post("/api/logout", userId, () => {
//         console.log(userId)
//         window.location.href = "/landing"
//     })
    
// }