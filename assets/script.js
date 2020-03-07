// answerButtonsElement.style.visibility = "hidden";
 
// function setTime() {
//     var timerInterval = setInterval(function() {
//       secondsLeft--;
//       timeEl.textContent = " Time left: " + secondsLeft;
  
//   if(secondsLeft === 0 || clicks === 2) {
//         clearInterval(timerInterval);
//         questionContainerElement.style.display = "none"
//         forms.style.visibility = "visible";
//         alert("Hey your score is: " + score);


$(".gif").on("click", function() {

  $(".splash").hide(100);
  

});


// Adding event listener to cat button
$("#genButton").on("click", function() {

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

      data : 'fields name,summary,rating,genres; where platforms = 29 ; sort popularity desc; limit 50;'
        
               

            
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