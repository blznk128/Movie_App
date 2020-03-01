const movieName = $("#movie")

// $("#searchMovie").on("click", function() {
//     event.preventDefault()
//     const urlSearch = "https://www.omdbapi.com/?t=" + movieName.val().trim() + "&y=&plot=short&apikey=trilogy";
//     $.ajax({
//         url: urlSearch,
//         method: "GET"
//       }).then(function(response) {
//         console.log(response);
//         console.log(response.Title)
//       });
// })

function searchMovie() {
    event.preventDefault()
    const urlSearch = "https://www.omdbapi.com/?t=" + movieName.val().trim() + "&y=&plot=short&apikey=trilogy";
    $.ajax({
        url: urlSearch,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        console.log(response.Title)
      });
}