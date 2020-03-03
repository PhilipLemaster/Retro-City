// Adding event listener to cat button
$("#genButton").on("click", function() {

    // Getting API url for cat images
    var queryURL = "https://api-v3.igdb.com/games";

    // Ajax code to grab images from 'queryURL'
    $.ajax({
      url: queryURL,
      method: "GET",
      headers: {
          'user-key' : 'f13f3ae70c0329eaf198249bba188dbd',
          'Accept' : 'Application/JSON'
      },
      data : {
          'fields' : 'category, cover, genres, name, platforms'
      }
    })

    // Run a function after 'GETting' from Ajax
      .then(function(response) {

      console.log(response);
      });
  });

  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});