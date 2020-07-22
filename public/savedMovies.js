const movieList = $("#movies")
$('.sidenav').sidenav();
$('.collapsible').collapsible();
$(".dropdown-trigger").dropdown();

function deleteMovies(savedMovie) {
    $.ajax({
      method: "PUT",
      url: "/api/saveMovie",
      data: savedMovie
    }).then(console.log("is this deletemovie: ",savedMovie))
  }

  function getMovies(id) {
    $.get("/api/dashboard", (data) => {
       console.log(data)
       $("#deleteMovie").on("click", function() {
        console.log(data)
        event.preventDefault()
        let deleteMovie = {
          favoriteMovies: null
      }
        deleteMovies(deleteMovie);
        location.reload()   
    })
       }).then(function(data) {
          console.log("part two id: " + data.id)
          let rowId = data.id;
      $.ajax({
      method:"GET",
      url:"/api/savedUsers/" + rowId
    }).then(function(rowId) {
      console.log("this is rowId: " + rowId.favoriteMovies)
      movieList.append(rowId.favoriteMovies)
    })      
   })
  }
  getMovies()