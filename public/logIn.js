const user = $("#userName");
const userPassword = $("#passWord");
$('.sidenav').sidenav();
$('.collapsible').collapsible();
$(".dropdown-trigger").dropdown();

function goToLogin() {
    event.preventDefault();
    window.location.href = "/logIn"
};

function logUser() {
    event.preventDefault()
    let logInUser = {
        userName: user.val(),
        password: userPassword.val()
    }
    logIn(logInUser)
};

function logIn(userId) {
    $.post("/api/logIn", userId, () => {
        window.location.href = "/landing"
    })
};