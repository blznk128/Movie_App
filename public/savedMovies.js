const movieList = $("#movies")

function deleteMovies(savedMovie) {
    $.ajax({
      method: "PUT",
      url: "/api/saveMovie",
      data: savedMovie
    }).then(console.log("is this todo: ",savedMovie))
  }

  function getSavedMovies(id) {
 $.get("/api/dashboard", (data) => {
    console.log(data.id)
    movieList.append(data.favoriteMovies)
    $("#deleteMovie").on("click", function() {
        console.log(data)
        event.preventDefault()
        let deleteMovie = {
          favoriteMovies: null
      }
        deleteMovies(deleteMovie)
        movieList.hide()
        
    })
})
  }
  
  
  function getMovies(id) {
    $.get("/api/dashboard", (data) => {
       console.log(data)
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


    // $.get("/api/getUser", (data) => {
    //   // movieList.text(data[0].favoriteMovies)
    //        console.log(data)
    //     })
      
      
        function deleteEmployee(){
          let rowId = $(this).parent("td").parent("tr").attr('id');
          $(this).closest("tr").remove();
          $.ajax({
            method:"GET",
            url:"/api/employees/" + rowId
          })
      };

  // getSavedMovies()
  getMovies()