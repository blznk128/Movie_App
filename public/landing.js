const movieName = $("#movie");
const movieSummary = $("#summary");
const movieTitle = $(".card-title");
const userLoggedIn = $("#theUser");
const informationMovie = $("#movie");
const showSearchedMovie = $(".card-content");
const showSearchButton = $("#movieSave");
let moviesSaved = []

$(".dropdown-trigger").dropdown();
$('.sidenav').sidenav();
$('.collapsible').collapsible();

function searchMovie() {
    event.preventDefault()
    const urlSearch = "https://www.omdbapi.com/?t=" + movieName.val().trim() + "&y=&plot=short&apikey=trilogy";
    $.ajax({
        url: urlSearch,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        moviesSaved = []
        let movieImage = response.Poster
        $('img').attr('src', movieImage)
        showSearchedMovie.show()
        showSearchButton.show()
        movieSummary.append(response.Plot)
        movieTitle.append(response.Title)
        moviesSaved.push(response.Title)
        console.log(response.Title)
      })
};

function newUser() {
  event.preventDefault();
  window.location.href = "/register"
}

function addMovie(savedMovie) {
  $.ajax({
    method: "PUT",
    url: "/api/saveMovie",
    data: savedMovie
  }).then(console.log("is this todo: ",savedMovie))
};

function getUser(data) {
  $.get("/api/dashboard", function(data) {
    userLoggedIn.text(data.userName)
    $("#movieSave").on("click", function() {
      event.preventDefault()
      let newMovie = {
        favoriteMovies: informationMovie.val()
    }
      addMovie(newMovie)
    })
    $("#savedMovie").on("click", function() {
      event.preventDefault()
      console.log("hi")
      window.location.href = "/savedMovies"
    })
  })
};
  
function goToLogOff(userId) {
  event.preventDefault();
  console.log("hi")
  $.post("/api/logout", userId, () => {
      console.log(userId)
      window.location.href = "/landing"
  })
};

function viewSavedMovies() {
  event.preventDefault();
  let currentPost = $(this)
    .parent()
    .parent()
    .attr("id");
  console.log(currentPost)
};

getUser()