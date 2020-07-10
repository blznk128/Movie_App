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
    };

    function addRegistration(registrar) {
        $.post("/api/registerUser", registrar, () => {
            console.log(registrar)
        })
    }

