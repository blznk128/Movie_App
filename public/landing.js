const movieName = $("#movie")
const movieSummary = $("#summary")
const movieTitle = $(".card-title")
const userLoggedIn = $("#theUser")


function searchMovie() {
    event.preventDefault()
    const urlSearch = "https://www.omdbapi.com/?t=" + movieName.val().trim() + "&y=&plot=short&apikey=trilogy";
    $.ajax({
        url: urlSearch,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        let movieImage = response.Poster
        $('img').attr('src', movieImage)
        movieSummary.append(response.Plot)
        movieTitle.append(response.Title)
      });
};

function newUser() {
  event.preventDefault();
  window.location.href = "/register"
}

function getUser(data) {
  $.get("/api/dashboard", (data) => {
    console.log(data.favoriteMovies)
    userLoggedIn.text(data.userName)
  })
}
  
function goToLogOff(userId) {
  event.preventDefault();
  console.log("hi")
  $.post("/api/logout", userId, () => {
      console.log(userId)
      window.location.href = "/landing"
  })
  
}

getUser()