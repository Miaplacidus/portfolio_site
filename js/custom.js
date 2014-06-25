$.ajax({
    url: "https://api.github.com/users/Miaplacidus/events",
    dataType: "json",
    success: function (returndata)
    {

      for (var x = 0; x < 3; x++){
         $("#activity").append('Repo: ' + returndata[x]['repo']['name'] );
         $("#activity").append('<br /> Type: ' + returndata[x]['type'] );
         if (returndata[x]['type'] == 'PushEvent'){
          // change to take account of multiple commits
           $("#activity").append('<br /> Message: ' + returndata[x]['payload']['commits'][0]['message']);
         }
         else if(returndata[x]['type'] == 'CreateEvent') {
          $("#activity").append('<br /> URL: www.github.com/' + returndata[x]['repo']['name']);
          $("#activity").append('<br /> Description: ' + returndata[x]['payload']['description']);
         }
         $("#activity").append('<br /> Created At: ' + returndata[x]['created_at'] + '<br /> <br />');
        console.log(returndata[x]['repo']['name'])
        console.log(returndata[x]['payload']['commits'])
      }
    }
});

$.ajax({
    url: "http://api.tumblr.com/v2/blog/thefustates.tumblr.com/posts/text?api_key={KEY}&notes_info=true",
    dataType: "json",
    success: function (returndata)
    {

      for (var x = 0; x < 3; x++){
         // $("#activity").append('Repo: ' + returndata[x]['repo']['name'] );
         // $("#activity").append('<br /> Message: ' + returndata[x]['payload']['commits'][0]['message']);
         // $("#activity").append('<br /> Created At: ' + returndata[x]['created_at'] + '<br /> <br />');
        console.log(returndata[x]['repo']['name'])
        // console.log(returndata[x]['payload']['commits'])
      }
    }
});


// Isotope
$( function() {
  var $container = $('#iso').isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows',
    animationEngine: 'jQuery'
  });
  $('#portfolio .nav').on( 'click', 'li', function() {
    var filterValue = $( this ).attr('data-filter');
    $container.isotope({ filter: filterValue });
  });
});


