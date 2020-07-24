const movieList = $("#movies")
$('.sidenav').sidenav();
$('.collapsible').collapsible();
$(".dropdown-trigger").dropdown();

function deleteMovies(savedMovie) {
    $.ajax({
      method: "PUT",
      url: "/api/saveMovie",
      data: savedMovie
    })
};

function getMovies(id) {
    $.get("/api/dashboard", (data) => {
       $("#deleteMovie").on("click", function() {
        event.preventDefault()
        let deleteMovie = {
          favoriteMovies: null
      }
        deleteMovies(deleteMovie);
        location.reload()   
    })
       }).then(function(data) {
          let rowId = data.id;
          $.ajax({
          method:"GET",
          url:"/api/savedUsers/" + rowId
          }).then(function(rowId) {
            movieList.append(rowId.favoriteMovies)
            })      
          })
  };
  getMovies()