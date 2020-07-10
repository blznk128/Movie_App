const user = $("#userName");
const userPassword = $("#passWord");
var hbsContent = {userName: '', loggedin: false, title: "You are not logged in today", body: "Hello World"};
$('.sidenav').sidenav();
$('.collapsible').collapsible();
$(".dropdown-trigger").dropdown();

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
