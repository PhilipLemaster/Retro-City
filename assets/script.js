$(".inputcontent").hide(100);
$(".grid-container").hide(100);
$("#byConsole").hide(100);
$("#bottomBox").hide(100);


$(".gif").on("click", function() {

  $(".splash").hide(100);
  $(".inputcontent").show(100);
  $(".grid-container").show(100);
  $("#byConsole").show(100);
  $("#bottomBox").show(100);
  

});

$("#genButton").on("click", function() {


  var queryURL = "https://api-v3.igdb.com/games";

  $.ajax({
    url: queryURL,
    method: "POST",
    headers: {
        'user-key' : 'f13f3ae70c0329eaf198249bba188dbd',
        'Accept' : 'Application/JSON'
    }, 

    data : 'fields name,rating,cover.url,release_dates.human,platforms.name; where platforms = 29 ; sort popularity desc; limit 50;'
    })

    .then(function(response) {
      var results = response;
      coverimage = response.cover
      console.log(response);

      var table = $('#results');
      var tBody = $('tbody');
      tBody.empty();      

      for (var i = 0; i < 50; i++) {
          var tRow = $('<tr>');
          tRow.appendTo(tBody);

          var title = $('<th>').text(results[i].name);
          title.appendTo(tRow);

          

          source = String(results[i].cover?.url);
          var image = $('<img>');
          image.attr("src", "https://" + source);
          image.appendTo(tRow);

          var rating = $('<th>').text(Math.round(parseInt(results[i].rating)));
          rating.appendTo(tRow);

          var releaseDates = $('<th>').text(results[i].release_dates[0]?.human);
          releaseDates.appendTo(tRow);

          var moreContent = $('<button>More Info</button>');
          $(moreContent).addClass('clear button warning');
          moreContent.appendTo(tRow);
          
        }
    });

    
});

jQuery.ajaxPrefilter(function(options) {
  if (options.crossDomain && jQuery.support.cors) {
      options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
  }
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

      data : 'fields name,rating,cover.url,release_dates.human,platforms.name; where platforms = 4 ; sort popularity desc; limit 50;'
      })

      .then(function(response) {
        var results = response;
        coverimage = response.cover
        console.log(response);

        var table = $('#results');
        var tBody = $('tbody');
        tBody.empty();      

        for (var i = 0; i < 50; i++) {
            var tRow = $('<tr>');
            tRow.appendTo(tBody);

            var title = $('<th>').text(results[i].name);
            title.appendTo(tRow);

            

            source = String(results[i].cover?.url);
            var image = $('<img>');
            image.attr("src", "https://" + source);
            image.appendTo(tRow);

            var rating = $('<th>').text(Math.round(parseInt(results[i].rating)));
            rating.appendTo(tRow);

            var releaseDates = $('<th>').text(results[i].release_dates[0]?.human);
            releaseDates.appendTo(tRow);

            var moreContent = $('<button>More Info</button>');
            $(moreContent).addClass('clear button warning');
            moreContent.appendTo(tRow);
            
          }
      });

      
  });

  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});


$("#xButton").on("click", function() {


  var queryURL = "https://api-v3.igdb.com/games";


  $.ajax({
    url: queryURL,
    method: "POST",
    headers: {
        'user-key' : 'f13f3ae70c0329eaf198249bba188dbd',
        'Accept' : 'Application/JSON'
    }, 

    data : 'fields name,rating,cover.url,release_dates.human,platforms.name; where platforms = 11 ; sort popularity desc; limit 50;'
      
             

          
  })

  .then(function(response) {
    var results = response;
    coverimage = response.cover
    console.log(response);

    var table = $('#results');
    var tBody = $('tbody');
    tBody.empty();
   
        
    
    

    for (var i = 0; i < 50; i++) {
        var tRow = $('<tr>');
        tRow.appendTo(tBody);

        var title = $('<th>').text(results[i].name);
        title.appendTo(tRow);

        source = String(results[i].cover?.url);
        var image = $('<img>');
        image.attr("src", "https://" + source);
        image.appendTo(tRow);

        var rating = $('<th>').text(Math.round(parseInt(results[i].rating)));
        rating.appendTo(tRow);

        var releaseDates = $('<th>').text(results[i].release_dates[0]?.human);
        releaseDates.appendTo(tRow);

        var moreContent = $('<button>More Info</button>');
        $(moreContent).addClass('clear button warning');
        moreContent.appendTo(tRow);
        
      }
  });
});

jQuery.ajaxPrefilter(function(options) {
  if (options.crossDomain && jQuery.support.cors) {
      options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
  }
});


$("#ps1Button").on("click", function() {


  var queryURL = "https://api-v3.igdb.com/games";


  $.ajax({
    url: queryURL,
    method: "POST",
    headers: {
        'user-key' : 'f13f3ae70c0329eaf198249bba188dbd',
        'Accept' : 'Application/JSON'
    }, 

    data : 'fields name,rating,cover.url,release_dates.human,platforms.name; where platforms = 7 ; sort popularity desc; limit 50;'
      
             

          
  })
  .then(function(response) {
    var results = response;
    coverimage = response.cover
    console.log(response);

    var table = $('#results');
    var tBody = $('tbody');
    tBody.empty();
    

    for (var i = 0; i < 50; i++) {
        var tRow = $('<tr>');
        tRow.appendTo(tBody);

        var title = $('<th>').text(results[i].name);
        title.appendTo(tRow);

        source = String(results[i].cover?.url);
        var image = $('<img>');
        image.attr("src", "https://" + source);
        image.appendTo(tRow);

        var rating = $('<th>').text(Math.round(parseInt(results[i].rating)));
        rating.appendTo(tRow);

        var releaseDates = $('<th>').text(results[i].release_dates[0]?.human);
        releaseDates.appendTo(tRow);

        var moreContent = $('<button>More Info</button>');
        $(moreContent).addClass('clear button warning');
        moreContent.appendTo(tRow);
        
      }
  });



});

jQuery.ajaxPrefilter(function(options) {
  if (options.crossDomain && jQuery.support.cors) {
      options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
  }
});


$("#snesButton").on("click", function() {


  var queryURL = "https://api-v3.igdb.com/games";


  $.ajax({
    url: queryURL,
    method: "POST",
    headers: {
        'user-key' : 'f13f3ae70c0329eaf198249bba188dbd',
        'Accept' : 'Application/JSON'
    }, 

    data : 'fields name,rating,cover.url,release_dates.human,platforms.name; where platforms = 19 ; sort popularity desc; limit 50;'
      
             

          
  })

  .then(function(response) {
    var results = response;
    coverimage = response.cover
    console.log(response);

    var table = $('#results');
    var tBody = $('tbody');
    tBody.empty();
    

    for (var i = 0; i < 50; i++) {
        var tRow = $('<tr>');
        tRow.appendTo(tBody);


        var title = $('<th>').text(results[i].name);
        title.appendTo(tRow);

        source = String(results[i].cover?.url);
        var image = $('<img>');
        image.attr("src", "https://" + source);
        image.appendTo(tRow);

        var rating = $('<th>').text(Math.round(parseInt(results[i].rating)));
        rating.appendTo(tRow);

        var releaseDates = $('<th>').text(results[i].release_dates[0]?.human);
        releaseDates.appendTo(tRow);

        var moreContent = $('<button>More Info</button>');
        $(moreContent).addClass('clear button warning');
        moreContent.appendTo(tRow);
        
      }
  });


});

jQuery.ajaxPrefilter(function(options) {
  if (options.crossDomain && jQuery.support.cors) {
      options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
  }
});


$("#atariButton").on("click", function() {


  var queryURL = "https://api-v3.igdb.com/games";


  $.ajax({
    url: queryURL,
    method: "POST",
    headers: {
        'user-key' : 'f13f3ae70c0329eaf198249bba188dbd',
        'Accept' : 'Application/JSON'
    }, 

    data : 'fields name,rating,cover.url,release_dates.human,platforms.name; where platforms = 59 ; sort popularity desc; limit 50;'
      
             

          
  })

  .then(function(response) {
    var results = response;
    coverimage = response.cover
    console.log(response);

    var table = $('#results');
    var tBody = $('tbody');
    tBody.empty();
    

    for (var i = 0; i < 50; i++) {
        var tRow = $('<tr>');
        tRow.appendTo(tBody);


        var title = $('<th>').text(results[i].name);
        title.appendTo(tRow);

        source = String(results[i].cover?.url);
        var image = $('<img>');
        image.attr("src", "https://" + source);
        image.appendTo(tRow);

        var rating = $('<th>').text(Math.round(parseInt(results[i].rating)));
        rating.appendTo(tRow);

        var releaseDates = $('<th>').text(results[i].release_dates[0]?.human);
        releaseDates.appendTo(tRow);

        var moreContent = $('<button>More Info</button>');
        $(moreContent).addClass('clear button warning');
        moreContent.appendTo(tRow);
        
      }
  });

});

jQuery.ajaxPrefilter(function(options) {
  if (options.crossDomain && jQuery.support.cors) {
      options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
  }
});


$("#gcButton").on("click", function() {


  var queryURL = "https://api-v3.igdb.com/games";


  $.ajax({
    url: queryURL,
    method: "POST",
    headers: {
        'user-key' : 'f13f3ae70c0329eaf198249bba188dbd',
        'Accept' : 'Application/JSON'
    }, 

    data : 'fields name,rating,cover.url,release_dates.human,platforms.name; where platforms = 21 ; sort popularity desc; limit 50;'
      
             

          
  })

  .then(function(response) {
    var results = response;
    coverimage = response.cover
    console.log(response);

    var table = $('#results');
    var tBody = $('tbody');
    tBody.empty();
    

    for (var i = 0; i < 50; i++) {
        var tRow = $('<tr>');
        tRow.appendTo(tBody);


        var title = $('<th>').text(results[i].name);
        title.appendTo(tRow);

        source = String(results[i].cover?.url);
        var image = $('<img>');
        image.attr("src", "https://" + source);
        image.appendTo(tRow);

        var rating = $('<th>').text(Math.round(parseInt(results[i].rating)));
        rating.appendTo(tRow);

        var releaseDates = $('<th>').text(results[i].release_dates[0]?.human);
        releaseDates.appendTo(tRow);

        var moreContent = $('<button>More Info</button>');
        $(moreContent).addClass('clear button warning');
        moreContent.appendTo(tRow);
        
      }
  });


});

jQuery.ajaxPrefilter(function(options) {
  if (options.crossDomain && jQuery.support.cors) {
      options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
  }
});


$("#snesButton").on("click", function() {


  var queryURL = "https://api-v3.igdb.com/games";

 
  $.ajax({
    url: queryURL,
    method: "POST",
    headers: {
        'user-key' : 'f13f3ae70c0329eaf198249bba188dbd',
        'Accept' : 'Application/JSON'
    }, 

    data : 'fields name,rating,cover.url,release_dates.human,platforms.name; where platforms = 19 ; sort popularity desc; limit 50;'
      
             

          
  })

  .then(function(response) {
    var results = response;
    coverimage = response.cover
    console.log(response);

    var table = $('#results');
    var tBody = $('tbody');
    tBody.empty();
    

    for (var i = 0; i < 50; i++) {
        var tRow = $('<tr>');
        tRow.appendTo(tBody);
        


        var title = $('<th>').text(results[i].name);
        title.appendTo(tRow);

        source = String(results[i].cover?.url);
        var image = $('<img>');
        image.attr("src", "https://" + source);
        image.appendTo(tRow);

        var rating = $('<th>').text(Math.round(parseInt(results[i].rating)));
        rating.appendTo(tRow);

        var releaseDates = $('<th>').text(results[i].release_dates[0]?.human);
        releaseDates.appendTo(tRow);

        var moreContent = $('<button>More Info</button>');
        $(moreContent).addClass('clear button warning');
        moreContent.appendTo(tRow);
        
      }
  });


});

jQuery.ajaxPrefilter(function(options) {
  if (options.crossDomain && jQuery.support.cors) {
      options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
  }
});


$("#dreamButton").on("click", function() {


  var queryURL = "https://api-v3.igdb.com/games";


  $.ajax({
    url: queryURL,
    method: "POST",
    headers: {
        'user-key' : 'f13f3ae70c0329eaf198249bba188dbd',
        'Accept' : 'Application/JSON'
    }, 

    data : 'fields name,rating,cover.url,release_dates.human,platforms.name; where platforms = 23 ; sort popularity desc; limit 50;'
      
             

          
  })

  .then(function(response) {
    var results = response;
    coverimage = response.cover
    console.log(response);

    var table = $('#results');
    var tBody = $('tbody');
    tBody.empty();
    

    for (var i = 0; i < 50; i++) {
        var tRow = $('<tr>');
        tRow.appendTo(tBody);


        var title = $('<th>').text(results[i].name);
        title.appendTo(tRow);

        source = String(results[i].cover?.url);
        var image = $('<img>');
        image.attr("src", "https://" + source);
        image.appendTo(tRow);

        var rating = $('<th>').text(Math.round(parseInt(results[i].rating)));
        rating.appendTo(tRow);

        var releaseDates = $('<th>').text(results[i].release_dates[0]?.human);
        releaseDates.appendTo(tRow);

        var moreContent = $('<button>More Info</button>');
        $(moreContent).addClass('clear button warning');
        moreContent.appendTo(tRow);
        
      }
  });

});

jQuery.ajaxPrefilter(function(options) {
  if (options.crossDomain && jQuery.support.cors) {
      options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
  }
});


$("#gboyButton").on("click", function() {


  var queryURL = "https://api-v3.igdb.com/games";

  $.ajax({
    url: queryURL,
    method: "POST",
    headers: {
        'user-key' : 'f13f3ae70c0329eaf198249bba188dbd',
        'Accept' : 'Application/JSON'
    }, 

    data : 'fields name,rating,cover.url,release_dates.human,platforms.name; where platforms = 33 ; sort popularity desc; limit 50;'
      
             

          
  })

  .then(function(response) {
    var results = response;
    coverimage = response.cover
    console.log(response);

    var table = $('#results');
    var tBody = $('tbody');
    tBody.empty();
    

    for (var i = 0; i < 50; i++) {
        var tRow = $('<tr>');
        tRow.appendTo(tBody);


        var title = $('<th>').text(results[i].name);
        title.appendTo(tRow);

        source = String(results[i].cover?.url);
        var image = $('<img>');
        image.attr("src", "https://" + source);
        image.appendTo(tRow);

        var rating = $('<th>').text(Math.round(parseInt(results[i].rating)));
        rating.appendTo(tRow);

        var releaseDates = $('<th>').text(results[i].release_dates[0]?.human);
        releaseDates.appendTo(tRow);

        var moreContent = $('<button>More Info</button>');
        $(moreContent).addClass('clear button warning');
        moreContent.appendTo(tRow);
        
      }
  });


});

jQuery.ajaxPrefilter(function(options) {
  if (options.crossDomain && jQuery.support.cors) {
      options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
  }
});


$("#nesButton").on("click", function() {


  var queryURL = "https://api-v3.igdb.com/games";


  $.ajax({
    url: queryURL,
    method: "POST",
    headers: {
        'user-key' : 'f13f3ae70c0329eaf198249bba188dbd',
        'Accept' : 'Application/JSON'
    }, 

    data : 'fields name,rating,cover.url,release_dates.human,platforms.name; where platforms = 18 ; sort popularity desc; limit 50;'
      
             

          
  })

  .then(function(response) {
    var results = response;
    coverimage = response.cover
    console.log(response);

    var table = $('#results');
    var tBody = $('tbody');
    tBody.empty();
    

    for (var i = 0; i < 50; i++) {
        var tRow = $('<tr>');
        tRow.appendTo(tBody);


        var title = $('<th>').text(results[i].name);
        title.appendTo(tRow);

        source = String(results[i].cover?.url);
        var image = $('<img>');
        image.attr("src", "https://" + source);
        image.appendTo(tRow);

        var rating = $('<th>').text(Math.round(parseInt(results[i].rating)));
        rating.appendTo(tRow);

        var releaseDates = $('<th>').text(results[i].release_dates[0]?.human);
        releaseDates.appendTo(tRow);

        var moreContent = $('<button>More Info</button>');
        $(moreContent).addClass('clear button warning');
        moreContent.appendTo(tRow);
        
      }
  });
  

});

jQuery.ajaxPrefilter(function(options) {
  if (options.crossDomain && jQuery.support.cors) {
      options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
  }
});