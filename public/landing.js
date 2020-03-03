const movieName = $("#movie")
const movieSummary = $("#summary")
const movieTitle = $(".card-title")

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
}