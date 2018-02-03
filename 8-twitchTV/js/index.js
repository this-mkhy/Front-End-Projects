var users = ["freecodecamp","mkhy","ESL_SC2","OgamingSC2","cretetion","storbeck","habathcx","RobotCaleb","noobs2ninjas"];

var urlchannel=[]; 
var urlstream=[];

$(document).ready(function() {
    var game,status;
    for(var i=0; i<users.length ;++i)
    {
        urlchannel[i]='https://wind-bow.glitch.me/twitch-api/channels/' + users[i] + '/' + '?callback=?';
        urlstream[i]='https://wind-bow.glitch.me/twitch-api/streams/' + users[i] + '/' + '?callback=?';
        
//      check if the current channel is offline/online
        $.getJSON( urlstream[i],function(data) {
            if (data.stream===null)
            {
                game="offline ";
                status="offline";
            } 
            else if (data.stream===undefined)
            {
                g="Channel Not found ";
                status="offline";
            } 
            else
            {
                game=data.stream.game;
                status="online";
            }
        });

        
        $.getJSON(urlchannel[i],function(data) {
            var html,myHtml;
            var logo=data.logo != null ? data.logo : "https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F",
                name = data.display_name != null ? data.display_name : urlchannel[i],
                description = status === "online" ? ': ' + data.status : "offline";
            if(status==="online") 
            {
                html = '<div class="row '+status+'"><div class="col-xs-2 col-sm-1" id="icon"><img id="img" src="' + logo + '" class="logo"></div><div class="col-xs-4 col-sm-3" id="name"><a href="' + data.url + '"  target="_blank">' + name + '</a></div><div class="col-xs-6 col-sm-8" id="streaming">'+ game + '<span class="hidden-xs">' + description + '</span></div></div>';
            }
            else
            {
                myHtml = '<div class="row '+status+'"><div class="col-xs-2 col-sm-1" id="icon"><img id="img" src="' + logo + '" class="logo"></div><div class="col-xs-4 col-sm-3" id="name"><a href="' + data.url + '" target="_blank">' + name + '</a></div><div class="col-xs-6 col-sm-8" id="streaming">'+ game + '<span class="hidden-xs">' + description + '</span></div></div>';

            }

            $("#on").prepend(html);
            $("#off").append(myHtml); 
        });
        

//      More events on buttons
        $(".online").click(function(){
            $("#on").show();
            $("#off").hide();
        });
      
        $(".offline").click(function(){
            $("#off").show();
            $("#on").hide();
        });
       
        $(".all").click(function(){
            $("#on").show();
            $("#off").show();
        });
    }
});



    