const user = $("#userName");
const userPassword = $("#passWord");

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
        console.log(userId)
        window.location.href = "/landing"
    })
}