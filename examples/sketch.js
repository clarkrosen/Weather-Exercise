var api_key = "5953b56acc179f70f0ecd2d4e192050a";
var city = "Miami";
var clouds = 0;
var temp = 0;
var cloudy_gif;
var sunny_gif;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  cloudy_gif = loadGif('rain.gif');
  sunny_gif = loadGif('sunny.gif');

  
  var url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&unites=metric&APPID="+api_key;
  loadJSON(url, recievedWeather);
}

function draw() {
  background(0);
  fill(255);
  textSize(70);
  textAlign(CENTER, CENTER);
    text("ME TODAY",650,60);
     
    if (clouds > 60) {
    image(cloudy_gif, 400, 200);
}
    else {
    image(sunny_gif, 400, 200);
    }
}

function recievedWeather(theWeather){
  temp = theWeather.main.temp;
  clouds = theWeather.clouds.all
}