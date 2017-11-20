$(document).ready(function() 
                  {
  var tempC,windSpeed,humidity,pressure;
  var dispC=false;
  var tempF;
  var desc;
  var loc;
  var iconLink;

  //to convert from C to F
  function convertDis() 
    {
    if (dispC==false)
    {
      dispC=true;
    }
    else 
    {
      dispC=false;
    }
  }

  $(".temperature").on("click", function()
    {  
      convertDis();
      refreshStats();
    });
  
  $(".refresh").on("click", function() 
    {
      fetchWeather();
    });
  
//Weather Function
  function fetchWeather() 
    {
    function weatherstats(pos)
        {
            $.getJSON("https://fcc-weather-api.glitch.me/api/current?lon=" +pos.coords.longitude +"&lat=" +pos.coords.latitude, function(json) 
            {
                console.log("https://fcc-weather-api.glitch.me/api/current?lon=" +pos.coords.longitude +"&lat=" +pos.coords.latitude);
                tempC=json.main.temp_max;
                tempF=Math.round(json.main.temp_max * 9 / 5 + 32);
                loc=json.name+ ", " +json.sys.country;
                desc=json.weather[0].description;
                iconLink=json.weather[0].icon;
                windSpeed=json.wind.speed+ "kts";
                humidity=json.main.humidity+ "%";
                pressure=json.main.pressure+ "hPa";
                refreshStats();
            }
            );
        }
        navigator.geolocation.getCurrentPosition(weatherstats);
    }
  
  function refreshStats()
    {
        var d=new Date();

        var h=d.getHours();
        var m=('00'+d.getMinutes()).slice(-2);
        var s=d.getSeconds();
    
        if(dispC==false)
        {
            $(".temperature").html(tempF+"&deg;F");
        }
        else 
        {
            $(".temperature").html(tempC+"&deg;C");
        }
                 
        $(".weath-desc").html(desc);
        $(".wind").html(windSpeed);
        $(".pressure").html(pressure);    
        $(".humidity").html(humidity); 
        $(".location").html(loc);
        $(".dte").html(d.getMonth()+ "/" +d.getFullYear());
        $(".time").html(h+":" +m);
        $(".weather-icon").html("<img src=\""+ iconLink+"\" height=\"200px\">");
    };

    //call method
    fetchWeather();

});
