function logIn() {
    event.preventDefault();
  window.location.href = "/logIn"
}

function logUser() {
    event.preventDefault()
    $.get("/home", (data) => {
        console.log("this is data"+ data)
        
    })
}