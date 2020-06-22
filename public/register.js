const user = $("#userName");
const userPassword = $("#passWord");
const userMovie = $("#favoriteMovie");

    function registerUser() {
        event.preventDefault();
        let newRegistration = {
            userName: user.val(),
            password: userPassword.val(),
            favoriteMovies: userMovie.val()
        }
        addRegistration(newRegistration)
    };

    function addRegistration(registrar) {
        $.post("/api/registerUser", registrar, () => {
            console.log(registrar)
        })
    }

