$.ajax({
    url: "https://api.github.com/users/Miaplacidus/events",
    dataType: "json",
    success: function (returndata)
    {

      for (var x = 0; x < 3; x++){
         $("#activity").append('Repo: ' + returndata[x]['repo']['name'] );
         $("#activity").append('<br /> Message: ' + returndata[x]['payload']['commits'][0]['message']);
         $("#activity").append('<br /> Created At: ' + returndata[x]['created_at'] + '</p>');
        console.log(returndata[x]['repo']['name'])
        console.log(returndata[x]['payload']['commits'])
      }
    }
});
