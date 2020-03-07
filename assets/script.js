$(".gif").on("click", function() {

  $(".splash").hide(100);
  

});

// N64 BUTTON API PULL AND DOM CREATION

$("#n64Button").on("click", function() {


    var queryURL = "https://api-v3.igdb.com/games";

    $.ajax({
      url: queryURL,
      method: "POST",
      headers: {
          'user-key' : 'f13f3ae70c0329eaf198249bba188dbd',
          'Accept' : 'Application/JSON'
      }, 

      data : 'fields name,total_rating,cover.url,release_dates.human,platforms.name,summary,genres.name,screenshots.url; where platforms = 4 ; sort popularity desc; limit 50;'
      })

      .then(function(response) {
        var results = response;
        coverimage = response.cover
        console.log(response);

        var table = $('#results');
        var tBody = $('<tbody>');
        

        for (var i = 0; i < 50; i++) {
            // Variables for main table
            var tRow = $('<tr>');
            tRow.appendTo(tBody);
            tBody.appendTo(table);

            var title = $('<th>').text(results[i].name);
            title.appendTo(tRow);

            if (results[i].cover?.url === undefined) {
                source = 'homestaymatch.com/images/no-image-available.png';
            }

            else {
                source = String(results[i].cover?.url);
            }
            
            
            var image = $('<img>');
            image.attr("src", "https://" + source);
            image.appendTo(tRow);

            var rating = $('<th>').text(Math.round(parseInt(results[i].total_rating)));
            rating.appendTo(tRow);

            var releaseDates = $('<th>').text(results[i].release_dates[0]?.human);
            releaseDates.appendTo(tRow);

            var mcBut = $('<button>More Info</button>');
            $(mcBut).addClass('clear button warning').attr('data-open', 'moreContent');
            mcBut.appendTo(tRow);

            // Create mcBox and dynamically hide/show
            
            var mcBox = $('<div>').appendTo(tRow);
            mcBox.hide();
            var mcTitle = $('<h4>').text(results[i].name);
            mcTitle.appendTo(mcBox);
            var mcSummary = $('<p>').text(results[i].summary);
            mcSummary.appendTo(mcBox);
            var mcGenres = $('<p>').text('Genre: ' + results[i].genres[0]?.name);
            mcGenres.appendTo(mcBox);

          
            for (y = 0; y < 3; y++) {
                var mcPic = $('<img>');
                if (results[i].screenshots[y]?.url != undefined) {
                    mcSource = results[i].screenshots[y]?.url;
                    mcPic.attr("src", "https://" + mcSource);
                    mcPic.appendTo(mcBox);
                    mcPic.addClass('screenshots');
                }
            }
            

            mcBut.click(function(){
                console.log('sup');
                $(this).nextAll().toggle();
            })

            
          }
      });

      
  });

  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

// Adding event listener to cat button
$("#xButton").on("click", function() {

  // Getting API url for cat images
  var queryURL = "https://api-v3.igdb.com/games";

  // Ajax code to grab images from 'queryURL'
  $.ajax({
    url: queryURL,
    method: "POST",
    headers: {
        'user-key' : 'f13f3ae70c0329eaf198249bba188dbd',
        'Accept' : 'Application/JSON'
    }, 

    data : 'fields name,summary,rating,genres; where platforms = 11 ; sort popularity desc; limit 50;'
      
             

          
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

// Adding event listener to cat button
$("#ps1Button").on("click", function() {

  // Getting API url for cat images
  var queryURL = "https://api-v3.igdb.com/games";

  // Ajax code to grab images from 'queryURL'
  $.ajax({
    url: queryURL,
    method: "POST",
    headers: {
        'user-key' : 'f13f3ae70c0329eaf198249bba188dbd',
        'Accept' : 'Application/JSON'
    }, 

    data : 'fields name,summary,rating,genres; where platforms = 7 ; sort popularity desc; limit 50;'
      
             

          
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

// Adding event listener to cat button
$("#snesButton").on("click", function() {

  // Getting API url for cat images
  var queryURL = "https://api-v3.igdb.com/games";

  // Ajax code to grab images from 'queryURL'
  $.ajax({
    url: queryURL,
    method: "POST",
    headers: {
        'user-key' : 'f13f3ae70c0329eaf198249bba188dbd',
        'Accept' : 'Application/JSON'
    }, 

    data : 'fields name,summary,rating,genres; where platforms = 19 ; sort popularity desc; limit 50;'
      
             

          
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

// Adding event listener to cat button
$("#atariButton").on("click", function() {

  // Getting API url for cat images
  var queryURL = "https://api-v3.igdb.com/games";

  // Ajax code to grab images from 'queryURL'
  $.ajax({
    url: queryURL,
    method: "POST",
    headers: {
        'user-key' : 'f13f3ae70c0329eaf198249bba188dbd',
        'Accept' : 'Application/JSON'
    }, 

    data : 'fields name,summary,rating,genres; where platforms = 59 ; sort popularity desc; limit 50;'
      
             

          
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

// Adding event listener to cat button
$("#gcButton").on("click", function() {

  // Getting API url for cat images
  var queryURL = "https://api-v3.igdb.com/games";

  // Ajax code to grab images from 'queryURL'
  $.ajax({
    url: queryURL,
    method: "POST",
    headers: {
        'user-key' : 'f13f3ae70c0329eaf198249bba188dbd',
        'Accept' : 'Application/JSON'
    }, 

    data : 'fields name,summary,rating,genres; where platforms = 21 ; sort popularity desc; limit 50;'
      
             

          
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

// Adding event listener to cat button
$("#n64Button").on("click", function() {

  // Getting API url for cat images
  var queryURL = "https://api-v3.igdb.com/games";

  // Ajax code to grab images from 'queryURL'
  $.ajax({
    url: queryURL,
    method: "POST",
    headers: {
        'user-key' : 'f13f3ae70c0329eaf198249bba188dbd',
        'Accept' : 'Application/JSON'
    }, 

    data : 'fields name,summary,rating,genres; where platforms = 4 ; sort popularity desc; limit 50;'
      
             

          
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

// Adding event listener to cat button
$("#dreamButton").on("click", function() {

  // Getting API url for cat images
  var queryURL = "https://api-v3.igdb.com/games";

  // Ajax code to grab images from 'queryURL'
  $.ajax({
    url: queryURL,
    method: "POST",
    headers: {
        'user-key' : 'f13f3ae70c0329eaf198249bba188dbd',
        'Accept' : 'Application/JSON'
    }, 

    data : 'fields name,summary,rating,genres; where platforms = 23 ; sort popularity desc; limit 50;'
      
             

          
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

// Adding event listener to cat button
$("#gboyButton").on("click", function() {

  // Getting API url for cat images
  var queryURL = "https://api-v3.igdb.com/games";

  // Ajax code to grab images from 'queryURL'
  $.ajax({
    url: queryURL,
    method: "POST",
    headers: {
        'user-key' : 'f13f3ae70c0329eaf198249bba188dbd',
        'Accept' : 'Application/JSON'
    }, 

    data : 'fields name,summary,rating,genres; where platforms = 33 ; sort popularity desc; limit 50;'
      
             

          
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

// Adding event listener to cat button
$("#nesButton").on("click", function() {

  // Getting API url for cat images
  var queryURL = "https://api-v3.igdb.com/games";

  // Ajax code to grab images from 'queryURL'
  $.ajax({
    url: queryURL,
    method: "POST",
    headers: {
        'user-key' : 'f13f3ae70c0329eaf198249bba188dbd',
        'Accept' : 'Application/JSON'
    }, 

    data : 'fields name,summary,rating,genres; where platforms = 18 ; sort popularity desc; limit 50;'
      
             

          
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