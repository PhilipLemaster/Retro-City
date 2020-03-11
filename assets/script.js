$(document).ready(function(){

// SPLASH PAGE HIDE/SHOW CONTENT
$("#nonsplashContent").hide(100);
$('#bottomBox').hide(100);
$(".greeting").on("click tap", function() {

  $(".splash").hide(100);
  $('#bottomBox').show(100);
  $("#nonsplashContent").show(100);
  

});

// GENESIS BUTTON API PULL AND DOM CREATION

$("#genButton").on("click tap", function() {


    var queryURL = "https://api-v3.igdb.com/games";

    $.ajax({
      url: queryURL,
      method: "POST",
      headers: {
          'user-key' : 'f13f3ae70c0329eaf198249bba188dbd',
          'Accept' : 'Application/JSON'
      }, 

      data : 'fields name,total_rating,cover.url,release_dates.human,platforms.name,summary,genres.name,screenshots.url; where platforms = 29 ; sort popularity desc; limit 50;'
      })

      .then(function(response) {
        var results = response;
        coverimage = response.cover
        console.log(response);

        var table = $('#results');
        var tBody = $('tbody');
        tBody.empty();      

        for (var i = 0; i < 50; i++) {
            // Variables for main table
            var tRow = $('<tr>');
            tRow.appendTo(tBody);

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
            
            if (results[i].summary != undefined || results[i].summary != null) {
              var mcSummary = $('<p>').text(results[i].summary);
              mcSummary.appendTo(mcBox);
            }

            if (results[i].genres != undefined || results[i].genres != null) {
                var mcGenres = $('<p>').text('Genre: ' + results[i].genres[0]?.name);
                mcGenres.appendTo(mcBox);
            }
          
            for (y = 0; y < 3; y++) {
              if (results[i].screenshots != undefined) {
                if (results[i].screenshots[y]?.url != undefined || results[i].screenshots[y]?.url != null) {
                  var mcPic = $('<img>');
                  mcSource = results[i].screenshots[y]?.url;
                  mcPic.attr("src", "https://" + mcSource);
                  mcPic.appendTo(mcBox);
                  mcPic.addClass('screenshots');
                }
              }
                
                
            }
            

            mcBut.on('click tap', (function(){
                console.log('sup');
                $(this).nextAll().toggle();
            })

            
            )}
      });

      
  });

  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

// N64 BUTTON API PULL AND DOM CREATION

$("#n64Button").on("click tap", function() {


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
        var tBody = $('tbody');
        tBody.empty();      

        for (var i = 0; i < 50; i++) {
            // Variables for main table
            var tRow = $('<tr>');
            tRow.appendTo(tBody);

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
            
            if (results[i].summary != undefined || results[i].summary != null) {
              var mcSummary = $('<p>').text(results[i].summary);
              mcSummary.appendTo(mcBox);
            }
            
            if (results[i].genres != undefined || results[i].genres != null) {
                var mcGenres = $('<p>').text('Genre: ' + results[i].genres[0]?.name);
                mcGenres.appendTo(mcBox);
            }

          
            for (y = 0; y < 3; y++) {
              if (results[i].screenshots != undefined) {
                if (results[i].screenshots[y]?.url != undefined || results[i].screenshots[y]?.url != null) {
                  var mcPic = $('<img>');
                  mcSource = results[i].screenshots[y]?.url;
                  mcPic.attr("src", "https://" + mcSource);
                  mcPic.appendTo(mcBox);
                  mcPic.addClass('screenshots');
                }
              }
                
                
            }
            

            mcBut.on('click tap', (function(){
              console.log('sup');
              $(this).nextAll().toggle();
              })

          
          )}
      });

      
  });

  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

// XBOX BUTTON API PULL AND DOM CREATION

$("#xButton").on("click tap", function() {


    var queryURL = "https://api-v3.igdb.com/games";

    $.ajax({
      url: queryURL,
      method: "POST",
      headers: {
          'user-key' : 'f13f3ae70c0329eaf198249bba188dbd',
          'Accept' : 'Application/JSON'
      }, 

      data : 'fields name,total_rating,cover.url,release_dates.human,platforms.name,summary,genres.name,screenshots.url; where platforms = 11 ; sort popularity desc; limit 50;'
      })

      .then(function(response) {
        var results = response;
        coverimage = response.cover
        console.log(response);

        var table = $('#results');
        var tBody = $('tbody');
        tBody.empty();      

        for (var i = 0; i < 50; i++) {
            // Variables for main table
            var tRow = $('<tr>');
            tRow.appendTo(tBody);

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
            
            if (results[i].summary != undefined || results[i].summary != null) {
              var mcSummary = $('<p>').text(results[i].summary);
              mcSummary.appendTo(mcBox);
            }
            
            if (results[i].genres != undefined || results[i].genres != null) {
                var mcGenres = $('<p>').text('Genre: ' + results[i].genres[0]?.name);
                mcGenres.appendTo(mcBox);
            }

          
            for (y = 0; y < 3; y++) {
              if (results[i].screenshots != undefined) {
                if (results[i].screenshots[y]?.url != undefined || results[i].screenshots[y]?.url != null) {
                  var mcPic = $('<img>');
                  mcSource = results[i].screenshots[y]?.url;
                  mcPic.attr("src", "https://" + mcSource);
                  mcPic.appendTo(mcBox);
                  mcPic.addClass('screenshots');
                }
              }
                
                
            }
            

            mcBut.on('click tap', (function(){
              console.log('sup');
              $(this).nextAll().toggle();
              })

          
          )}
      });

      
  });

  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

// PS1 BUTTON API PULL AND DOM CREATION

$("#ps1Button").on("click tap", function() {


    var queryURL = "https://api-v3.igdb.com/games";

    $.ajax({
      url: queryURL,
      method: "POST",
      headers: {
          'user-key' : 'f13f3ae70c0329eaf198249bba188dbd',
          'Accept' : 'Application/JSON'
      }, 

      data : 'fields name,total_rating,cover.url,release_dates.human,platforms.name,summary,genres.name,screenshots.url; where platforms = 7 ; sort popularity desc; limit 50;'
      })

      .then(function(response) {
        var results = response;
        coverimage = response.cover
        console.log(response);

        var table = $('#results');
        var tBody = $('tbody');
        tBody.empty();      

        for (var i = 0; i < 50; i++) {
            // Variables for main table
            var tRow = $('<tr>');
            tRow.appendTo(tBody);

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
            
            if (results[i].summary != undefined || results[i].summary != null) {
              var mcSummary = $('<p>').text(results[i].summary);
              mcSummary.appendTo(mcBox);
            }
            
            if (results[i].genres != undefined || results[i].genres != null) {
                var mcGenres = $('<p>').text('Genre: ' + results[i].genres[0]?.name);
                mcGenres.appendTo(mcBox);
            }
          
            for (y = 0; y < 3; y++) {
              if (results[i].screenshots != undefined) {
                if (results[i].screenshots[y]?.url != undefined || results[i].screenshots[y]?.url != null) {
                  var mcPic = $('<img>');
                  mcSource = results[i].screenshots[y]?.url;
                  mcPic.attr("src", "https://" + mcSource);
                  mcPic.appendTo(mcBox);
                  mcPic.addClass('screenshots');
                }
              }
                
                
            }
            

            mcBut.on('click tap', (function(){
              console.log('sup');
              $(this).nextAll().toggle();
              })

          
          )}
      });

      
  });

  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

// SNES BUTTON API PULL AND DOM CREATION

$("#snesButton").on("click tap", function() {

    var queryURL = "https://api-v3.igdb.com/games";

    $.ajax({
      url: queryURL,
      method: "POST",
      headers: {
          'user-key' : 'f13f3ae70c0329eaf198249bba188dbd',
          'Accept' : 'Application/JSON'
      }, 

      data : 'fields name,total_rating,cover.url,release_dates.human,platforms.name,summary,genres.name,screenshots.url; where platforms = 19 ; sort popularity desc; limit 50;'
      })

      .then(function(response) {
        var results = response;
        coverimage = response.cover
        console.log(response);

        var table = $('#results');
        var tBody = $('tbody');
        tBody.empty();      

        for (var i = 0; i < 50; i++) {
            // Variables for main table
            var tRow = $('<tr>');
            tRow.appendTo(tBody);

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
            
            if (results[i].summary != undefined || results[i].summary != null) {
              var mcSummary = $('<p>').text(results[i].summary);
              mcSummary.appendTo(mcBox);
            }
            
            if (results[i].genres != undefined || results[i].genres != null) {
                var mcGenres = $('<p>').text('Genre: ' + results[i].genres[0]?.name);
                mcGenres.appendTo(mcBox);
            }

          
            for (y = 0; y < 3; y++) {
              if (results[i].screenshots != undefined) {
                if (results[i].screenshots[y]?.url != undefined || results[i].screenshots[y]?.url != null) {
                  var mcPic = $('<img>');
                  mcSource = results[i].screenshots[y]?.url;
                  mcPic.attr("src", "https://" + mcSource);
                  mcPic.appendTo(mcBox);
                  mcPic.addClass('screenshots');
                }
              }
                
                
            }
            

            mcBut.on('click tap', (function(){
              console.log('sup');
              $(this).nextAll().toggle();
              })

          
          )}
      });

      
  });

  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

// ATARI BUTTON API PULL AND DOM CREATION

$("#atariButton").on("click tap", function() {


    var queryURL = "https://api-v3.igdb.com/games";

    $.ajax({
      url: queryURL,
      method: "POST",
      headers: {
          'user-key' : 'f13f3ae70c0329eaf198249bba188dbd',
          'Accept' : 'Application/JSON'
      }, 

      data : 'fields name,total_rating,cover.url,release_dates.human,platforms.name,summary,genres.name,screenshots.url; where platforms = 59 ; sort popularity desc; limit 50;'
      })

      .then(function(response) {
        var results = response;
        coverimage = response.cover
        console.log(response);

        var table = $('#results');
        var tBody = $('tbody');
        tBody.empty();      

        for (var i = 0; i < 50; i++) {
            // Variables for main table
            var tRow = $('<tr>');
            tRow.appendTo(tBody);

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
            
            if (results[i].summary != undefined || results[i].summary != null) {
              var mcSummary = $('<p>').text(results[i].summary);
              mcSummary.appendTo(mcBox);
            }
            
            if (results[i].genres != undefined || results[i].genres != null) {
                var mcGenres = $('<p>').text('Genre: ' + results[i].genres[0]?.name);
                mcGenres.appendTo(mcBox);
            }

          
            for (y = 0; y < 3; y++) {
              if (results[i].screenshots != undefined) {
                if (results[i].screenshots[y]?.url != undefined || results[i].screenshots[y]?.url != null) {
                  var mcPic = $('<img>');
                  mcSource = results[i].screenshots[y]?.url;
                  mcPic.attr("src", "https://" + mcSource);
                  mcPic.appendTo(mcBox);
                  mcPic.addClass('screenshots');
                }
              }
                
                
            }
            

            mcBut.on('click tap', (function(){
              console.log('sup');
              $(this).nextAll().toggle();
              })

          
          )}
      });

      
  });

  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

// GAMECUBE BUTTON API PULL AND DOM CREATION

$("#gcButton").on("click tap", function() {


    var queryURL = "https://api-v3.igdb.com/games";

    $.ajax({
      url: queryURL,
      method: "POST",
      headers: {
          'user-key' : 'f13f3ae70c0329eaf198249bba188dbd',
          'Accept' : 'Application/JSON'
      }, 

      data : 'fields name,total_rating,cover.url,release_dates.human,platforms.name,summary,genres.name,screenshots.url; where platforms = 21 ; sort popularity desc; limit 50;'
      })

      .then(function(response) {
        var results = response;
        coverimage = response.cover
        console.log(response);

        var table = $('#results');
        var tBody = $('tbody');
        tBody.empty();      

        for (var i = 0; i < 50; i++) {
            // Variables for main table
            var tRow = $('<tr>');
            tRow.appendTo(tBody);

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
            
            if (results[i].summary != undefined || results[i].summary != null) {
              var mcSummary = $('<p>').text(results[i].summary);
              mcSummary.appendTo(mcBox);
            }
            
            if (results[i].genres != undefined || results[i].genres != null) {
                var mcGenres = $('<p>').text('Genre: ' + results[i].genres[0]?.name);
                mcGenres.appendTo(mcBox);
            }

          
            for (y = 0; y < 3; y++) {
              if (results[i].screenshots != undefined) {
                if (results[i].screenshots[y]?.url != undefined || results[i].screenshots[y]?.url != null) {
                  var mcPic = $('<img>');
                  mcSource = results[i].screenshots[y]?.url;
                  mcPic.attr("src", "https://" + mcSource);
                  mcPic.appendTo(mcBox);
                  mcPic.addClass('screenshots');
                }
              }
                
                
            }
            

            mcBut.on('click tap', (function(){
              console.log('sup');
              $(this).nextAll().toggle();
              })

          
          )}
      });

      
  });

  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

// SNES BUTTON API PULL AND DOM CREATION

$("#snesButton").on("click tap", function() {


    var queryURL = "https://api-v3.igdb.com/games";

    $.ajax({
      url: queryURL,
      method: "POST",
      headers: {
          'user-key' : 'f13f3ae70c0329eaf198249bba188dbd',
          'Accept' : 'Application/JSON'
      }, 

      data : 'fields name,total_rating,cover.url,release_dates.human,platforms.name,summary,genres.name,screenshots.url; where platforms = 19 ; sort popularity desc; limit 50;'
      })

      .then(function(response) {
        var results = response;
        coverimage = response.cover
        console.log(response);

        var table = $('#results');
        var tBody = $('tbody');
        tBody.empty();      

        for (var i = 0; i < 50; i++) {
            // Variables for main table
            var tRow = $('<tr>');
            tRow.appendTo(tBody);

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
            
            if (results[i].summary != undefined || results[i].summary != null) {
              var mcSummary = $('<p>').text(results[i].summary);
              mcSummary.appendTo(mcBox);
            }
            
            if (results[i].genres != undefined || results[i].genres != null) {
                var mcGenres = $('<p>').text('Genre: ' + results[i].genres[0]?.name);
                mcGenres.appendTo(mcBox);
            }

          
            for (y = 0; y < 3; y++) {
              if (results[i].screenshots != undefined) {
                if (results[i].screenshots[y]?.url != undefined || results[i].screenshots[y]?.url != null) {
                  var mcPic = $('<img>');
                  mcSource = results[i].screenshots[y]?.url;
                  mcPic.attr("src", "https://" + mcSource);
                  mcPic.appendTo(mcBox);
                  mcPic.addClass('screenshots');
                }
              }
                
                
            }
            

            mcBut.on('click tap', (function(){
              console.log('sup');
              $(this).nextAll().toggle();
              })

          
          )}
      });

      
  });

  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

// DREAMCAST BUTTON API PULL AND DOM CREATION

$("#dreamButton").on("click tap", function() {


    var queryURL = "https://api-v3.igdb.com/games";

    $.ajax({
      url: queryURL,
      method: "POST",
      headers: {
          'user-key' : 'f13f3ae70c0329eaf198249bba188dbd',
          'Accept' : 'Application/JSON'
      }, 

      data : 'fields name,total_rating,cover.url,release_dates.human,platforms.name,summary,genres.name,screenshots.url; where platforms = 23 ; sort popularity desc; limit 50;'
      })

      .then(function(response) {
        var results = response;
        coverimage = response.cover
        console.log(response);

        var table = $('#results');
        var tBody = $('tbody');
        tBody.empty();      

        for (var i = 0; i < 50; i++) {
            // Variables for main table
            var tRow = $('<tr>');
            tRow.appendTo(tBody);

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
            
            if (results[i].summary != undefined || results[i].summary != null) {
              var mcSummary = $('<p>').text(results[i].summary);
              mcSummary.appendTo(mcBox);
            }
            
            if (results[i].genres != undefined || results[i].genres != null) {
                var mcGenres = $('<p>').text('Genre: ' + results[i].genres[0]?.name);
                mcGenres.appendTo(mcBox);
            }

          
            for (y = 0; y < 3; y++) {
              if (results[i].screenshots != undefined) {
                if (results[i].screenshots[y]?.url != undefined || results[i].screenshots[y]?.url != null) {
                  var mcPic = $('<img>');
                  mcSource = results[i].screenshots[y]?.url;
                  mcPic.attr("src", "https://" + mcSource);
                  mcPic.appendTo(mcBox);
                  mcPic.addClass('screenshots');
                }
              }
                
                
            }
            

            mcBut.on('click tap', (function(){
              console.log('sup');
              $(this).nextAll().toggle();
              })

          
          )}
      });

      
  });

  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

// GAMEBOY BUTTON API PULL AND DOM CREATION

$("#gboyButton").on("click tap", function() {


    var queryURL = "https://api-v3.igdb.com/games";

    $.ajax({
      url: queryURL,
      method: "POST",
      headers: {
          'user-key' : 'f13f3ae70c0329eaf198249bba188dbd',
          'Accept' : 'Application/JSON'
      }, 

      data : 'fields name,total_rating,cover.url,release_dates.human,platforms.name,summary,genres.name,screenshots.url; where platforms = 33 ; sort popularity desc; limit 50;'
      })

      .then(function(response) {
        var results = response;
        coverimage = response.cover
        console.log(response);

        var table = $('#results');
        var tBody = $('tbody');
        tBody.empty();      

        for (var i = 0; i < 50; i++) {
            // Variables for main table
            var tRow = $('<tr>');
            tRow.appendTo(tBody);

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
            
            if (results[i].summary != undefined || results[i].summary != null) {
              var mcSummary = $('<p>').text(results[i].summary);
              mcSummary.appendTo(mcBox);
            }
            
            if (results[i].genres != undefined || results[i].genres != null) {
                var mcGenres = $('<p>').text('Genre: ' + results[i].genres[0]?.name);
                mcGenres.appendTo(mcBox);
            }

          
            for (y = 0; y < 3; y++) {
              if (results[i].screenshots != undefined) {
                if (results[i].screenshots[y]?.url != undefined || results[i].screenshots[y]?.url != null) {
                  var mcPic = $('<img>');
                  mcSource = results[i].screenshots[y]?.url;
                  mcPic.attr("src", "https://" + mcSource);
                  mcPic.appendTo(mcBox);
                  mcPic.addClass('screenshots');
                }
              }
                
                
            }
            

            mcBut.on('click tap', (function(){
              console.log('sup');
              $(this).nextAll().toggle();
              })

          
          )}
      });

      
  });

  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

// NES BUTTON API PULL AND DOM CREATION

$("#nesButton").on("click tap", function() {


    var queryURL = "https://api-v3.igdb.com/games";

    $.ajax({
      url: queryURL,
      method: "POST",
      headers: {
          'user-key' : 'f13f3ae70c0329eaf198249bba188dbd',
          'Accept' : 'Application/JSON'
      }, 

      data : 'fields name,total_rating,cover.url,release_dates.human,platforms.name,summary,genres.name,screenshots.url; where platforms = 18 ; sort popularity desc; limit 50;'
      })

      .then(function(response) {
        var results = response;
        coverimage = response.cover
        console.log(response);

        var table = $('#results');
        var tBody = $('tbody');
        tBody.empty();      

        for (var i = 0; i < 50; i++) {
            // Variables for main table
            var tRow = $('<tr>');
            tRow.appendTo(tBody);

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
            
            if (results[i].summary != undefined || results[i].summary != null) {
              var mcSummary = $('<p>').text(results[i].summary);
              mcSummary.appendTo(mcBox);
            }
            
            if (results[i].genres != undefined || results[i].genres != null) {
                var mcGenres = $('<p>').text('Genre: ' + results[i].genres[0]?.name);
                mcGenres.appendTo(mcBox);
            }

          
            for (y = 0; y < 3; y++) {
              if (results[i].screenshots != undefined) {
                if (results[i].screenshots[y]?.url != undefined || results[i].screenshots[y]?.url != null) {
                  var mcPic = $('<img>');
                  mcSource = results[i].screenshots[y]?.url;
                  mcPic.attr("src", "https://" + mcSource);
                  mcPic.appendTo(mcBox);
                  mcPic.addClass('screenshots');
                }
              }
                
                
            }
            

            mcBut.on('click tap', (function(){
              console.log('sup');
              $(this).nextAll().toggle();
              })

          
          )}
      });

      
  });

  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

// SEARCH INPUT API PULL AND DOM CREATION FOR TITLE

$("#sTitleButton").on("click tap", function() {

    var nameinput = String($('#nameInput').val().substr(0,1).toUpperCase() + String($('#nameInput').val().substr(1).toLowerCase()));
    var queryURL = "http://www.gamespot.com/api/games/?api_key=0e27e3e25c2d1e2fdf52fae8191317b1730d9589&format=json&filter=name:" + nameinput;
    
    $.ajax({
      url: queryURL,
      method: "GET",
      })

      .then(function(response) {
        var results = response.results;
        console.log(results)
        console.log(nameinput)

        var tBody = $('tbody');
        tBody.empty();      

        for (var i = 0; i < 50; i++) {
            // Variables for main table
            var tRow = $('<tr>');
            tRow.appendTo(tBody);

            var title = $('<th>').text(results[i].name);
            title.appendTo(tRow);

            var source = String(results[i].image?.original);
            var image = $('<img>');
            image.attr("src", source);
            image.appendTo(tRow);

            var placeholder = $('<th>').text(' ');
            placeholder.appendTo(tRow);

            var releaseDate = $('<th>').text(results[i].release_date.slice(0,10));
            releaseDate.appendTo(tRow);

            // Additional Content Button

            var mcBut = $('<button>More Info</button>');
            $(mcBut).addClass('clear button warning').attr('data-open', 'moreContent');
            mcBut.appendTo(tRow);

            mcBut.on('click tap', (function(){
              console.log('sup');
              $(this).nextAll().toggle();
              })

          
          )

            // mcBox with contents from API
            
            var mcBox = $('<div>').appendTo(tRow);
            mcBox.hide();
            var title = $('<h3>').text(results[i].name);
            title.appendTo(mcBox);
            var summary = $('<p>').text(results[i].description);
            summary.appendTo(mcBox);
            
            var genres = $('<p>').text('Genres: ');
            genres.appendTo(mcBox);
            for (y = 0; y < 3; y++) {
                if (results[i].genres[y]?.name != undefined)
                var genreSpan = $('<span>').text(results[i].genres[y]?.name + ', ')
                genreSpan.appendTo(genres);
            }       

            // Save Button

            var saveButton = $('<button>Save</button>');
            saveButton.addClass('clear button alert').appendTo(mcBox);
            saveButton.on('click tap', (function(){
                var thisTitle = $(this).siblings('h3').text()
                var counter = localStorage.getItem('counter');
                counter++;
                localStorage.setItem('favoriteGames:'+ counter, thisTitle);
                localStorage.setItem('counter', counter);

                var thisImage = $(this).parent().siblings('img').attr('src');
                console.log(thisImage);
                var imgCounter = localStorage.getItem('imgCounter');
                imgCounter++;
                localStorage.setItem('favoriteGamesImg:'+ imgCounter, thisImage);
                localStorage.setItem('imgCounter', imgCounter);
            }));

        }
      })
});

// SEARCH INPUT API PULL AND DOM CREATION FOR GENRE

$("#sGPbutton").on("click tap", function() {


    var queryURL = "https://api-v3.igdb.com/games";
    
    var genreinput = String($('#genreInput').val().substr(0,1).toUpperCase() + String($('#genreInput').val().substr(1).toLowerCase()));
    var platforminput = String($('#platformSelect').val());
        if (platforminput == 'genesis')
            var platform = String(29)
        else if (platforminput == 'xbox')
            var platform = 11
        else if (platforminput == 'snes')
            var platform = 19
        else if (platforminput == 'atari')
            var platform = 59
        else if (platforminput == 'gamecube')
            var platform = 21
        else if (platforminput == 'n64')
            var platform = 4
        else if (platforminput == 'dreamcast')
            var platform = 23
        else if (platforminput == 'gameboy')
            var platform = 33
        else if (platforminput == 'ps1')
            var platform = 7
        else if (platforminput == 'nes')
            var platform = 18
        else
            var platform = '*'

    console.log(platform);
    console.log(platforminput);
    console.log(genreinput);

    $.ajax({
      url: queryURL,
      method: "POST",
      headers: {
          'user-key' : 'f13f3ae70c0329eaf198249bba188dbd',
          'Accept' : 'Application/JSON'
      }, 

      data : 'fields name,total_rating,cover.url,release_dates.human,platforms.name,summary,genres.name,screenshots.url; where genres.name ="' + genreinput + '" & platforms = ' + platform + '; sort popularity desc; limit 100;'
        
      })
      
      .then(function(response) {
        var results = response;

        console.log(results);

        var tBody = $('tbody');
        tBody.empty();      

        for (var i = 0; i < 100; i++) {
            // Variables for main table
            var tRow = $('<tr>');
            tRow.appendTo(tBody);

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

            if (results[i].rating != undefined || results[i].rating != null) {
                var rating = $('<th>').text(Math.round(parseInt(results[i].total_rating)));
                rating.appendTo(tRow);
            }

            if (results[i].release_dates != undefined || results[i].release_dates != null) {
                var releaseDates = $('<th>').text(results[i].release_dates[0]?.human);
                releaseDates.appendTo(tRow);
            }

            var mcBut = $('<button>More Info</button>');
            $(mcBut).addClass('clear button warning').attr('data-open', 'moreContent');
            mcBut.appendTo(tRow);

            // Create mcBox and dynamically hide/show
            
            var mcBox = $('<div>').appendTo(tRow);
            mcBox.hide();
            var mcTitle = $('<h4>').text(results[i].name);
            mcTitle.appendTo(mcBox);
            
            if (results[i].summary != undefined || results[i].summary != null) {
              var mcSummary = $('<p>').text(results[i].summary);
              mcSummary.appendTo(mcBox);
            }
            
            if (results[i].genres != undefined || results[i].genres != null) {
                var mcGenres = $('<p>').text('Genre: ' + results[i].genres[0]?.name);
                mcGenres.appendTo(mcBox);
            }

          
            for (y = 0; y < 3; y++) {
              if (results[i].screenshots != undefined) {
                if (results[i].screenshots[y]?.url != undefined || results[i].screenshots[y]?.url != null) {
                  var mcPic = $('<img>');
                  mcSource = results[i].screenshots[y]?.url;
                  mcPic.attr("src", "https://" + mcSource);
                  mcPic.appendTo(mcBox);
                  mcPic.addClass('screenshots');
                }
              }
                
                
            }
            

            mcBut.on('click tap', (function(){
              console.log('sup');
              $(this).nextAll().toggle();
              })

          
          )

            var saveButton = $('<button>Save</button>');
            saveButton.addClass('clear button alert').appendTo(mcBox);
            saveButton.on('click tap', (function(){
                var thisTitle = $(this).siblings('h3').text()
                var counter = localStorage.getItem('counter');
                counter++;
                localStorage.setItem('favoriteGames:'+ counter, thisTitle);
                localStorage.setItem('counter', counter);

                var thisImage = $(this).parent().siblings('img').attr('src');
                console.log(thisImage);
                var imgCounter = localStorage.getItem('imgCounter');
                imgCounter++;
                localStorage.setItem('favoriteGamesImg:'+ imgCounter, thisImage);
                localStorage.setItem('imgCounter', imgCounter);
            }));
            
          }
      });

      
  });

  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

// GENERATE FAVORITES LIST FROM LOCAL STORAGE

var tBody = $('tbody');

$('#oneupBlock').on('click tap', function(){
    tBody.empty();
    counter = parseInt(localStorage.getItem('counter')) + 1;
    // Generating Loop
    for (y = 1; y < counter; y++) {
        // Game Titles
        var favTitle = $('<th>').text(localStorage.getItem('favoriteGames:'+ y));
        var tRow = $('<tr>');
        favTitle.appendTo(tRow);
        

        // Game Images
        var favImageSource = String(localStorage.getItem('favoriteGamesImg:'+ y));
        var favImage = $('<img>').attr('src', favImageSource)
        favImage.appendTo(tRow);
        tRow.appendTo(tBody);
    }    
        
})


var clearShroom = $('#poison');
    clearShroom.on('click tap', function(){
      localStorage.clear();
      $(this).animate({
        width: 'toggle',
        height: "toggle"
      }, 5000, function() {
      })
  });
});