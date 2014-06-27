$.ajax({
    url: "https://api.github.com/users/Miaplacidus/events",
    dataType: "json",
    success: function (returndata)
    {

      for (var x = 0; x < 3; x++){
         $("#activity").append('Repo: ' + returndata[x]['repo']['name'] );
         $("#activity").append('<br /> Type: ' + returndata[x]['type'] );
         if (returndata[x]['type'] == 'PushEvent'){
            for (var i = 0; i < returndata[x]['payload']['commits'].length; i++){
               $("#activity").append('<br /> Message: ' + returndata[x]['payload']['commits'][i]['message']);
            }
         }
         else if(returndata[x]['type'] == 'CreateEvent') {
            $("#activity").append('<br /> URL: www.github.com/' + returndata[x]['repo']['name']);
            $("#activity").append('<br /> Description: ' + returndata[x]['payload']['description']);
         }
         else if (returndata[x]['type'] == 'IssuesEvent'){
          $("#activity").append('<br /> Description: ' + returndata[x]['payload']['issue']['title']);
         }
         var created_at = returndata[x]['created_at'], created_arr = [];
         created_arr = created_at.split('T');
         $("#activity").append('<br /> Created At: ' + created_arr[0] + " " + created_arr[1].slice(0, -1) + "UTC" + '<br /> <br />');
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
    }
});


// Isotope
$( function() {
  var $container = $('#iso').isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows',
    // animationEngine: 'jQuery'
  });
  $('#portfolio .nav').on( 'click', 'li', function() {
    var filterValue = $( this ).attr('data-filter');
    $container.isotope({ filter: filterValue });
  });
});

$(".port_link").on('click', function(){
  $("#portfolio").ScrollTo();
});
$(".res_link").on('click', function(){
  $("#resume").ScrollTo();
});
$(".blog_link").on('click', function(){
  $("#blog").ScrollTo();
});
$(".contact_link").on('click', function(){
  $("#contact_me").ScrollTo();
});
$(".prof_link").on('click', function(){
  $("#profile").ScrollTo();
});
