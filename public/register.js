const user = $("#userName");
const userPassword = $("#passWord");
$('.collapsible').collapsible();
$(".dropdown-trigger").dropdown();
$('.sidenav').sidenav();

function registerUser() {
    event.preventDefault();
    let newRegistration = {
        userName: user.val(),
        password: userPassword.val(),
    }
        addRegistration(newRegistration)
        window.location.href = "/logIn"
    };

function addRegistration(registrar) {
    $.post("/api/registerUser", registrar, () => {
    })
};