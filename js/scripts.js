//Top function ---------------------------0--0-0-0--0-00
function DriveIn () {
  this.movies = []
}

DriveIn.prototype.addTicket = function (ticket) {
  this.movies.push(ticket);
};

//Business Logic for movie times --------CONSTRUCTOR
function Movie (title, time, age) {
  this.title = title,
  this.time = time,
  this.age = age
  }



var driveIn = new DriveIn();

function displayMovieTickets(driveIn) {
  var movieList = $('ul#movie');
  console.log(movieList)

  var htmlForMovieInfo = "";
  driveIn.movies.forEach(function(movies) {
    htmlForMovieInfo += "<li> " + movie.inputtedTitle + " " + movie.inputtedTime + " " + movie.inputtedAge + "</li>";
  });
  movieList.html(htmlForMovieInfo);
};

$(document).ready(function () {
  $('form#movie-dropdown').submit(function(event){
    event.preventDefault();
    var inputtedTitle = $('#title').val();
    var inputtedTime = $("#time").val();
    var inputtedAge = $("#age").val();
    var yourMovie = new Movie(inputtedTitle, inputtedTime, inputtedAge)
      console.log(inputtedAge)
    driveIn.addTicket(yourMovie);
    displayMovieTickets(driveIn);


  });
});
