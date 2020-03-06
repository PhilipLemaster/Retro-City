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
        var tBody = $('<tbody>');
        

        for (var i = 0; i < 50; i++) {
            var tRow = $('<tr>');
            tRow.appendTo(tBody);
            tBody.appendTo(table);

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