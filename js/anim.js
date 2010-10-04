document.write("<div id='stars' style='background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#000), color-stop(0.4, #111), color-stop(0.6, #222), to(#334));width: 600px; height: 125px;'></div>");
document.write('<style> @-webkit-keyframes twinkle { from { opacity: 1; } to { opacity: 0.25; } } .star { -webkit-animation-name: twinkle; -webkit-animation-duration: 1.0s; -webkit-animation-iteration-count: infinite; -webkit-animation-direction: alternate; -webkit-animation-timing-function: ease-in-out; } </style>');

var stars = document.getElementById('stars');
var starfield = document.getElementById('stars');

for(var i = 0; i <= (Math.floor(Math.random() * 10000) + 100); i++) {
  setTimeout(function() {
    var star = document.createElement('div');

    var style = star.style;
    var size = (Math.floor(Math.random() * 4) + 2);
    var pixel_size = size + 2 + "px";
    style.background = "-webkit-gradient(radial,45% 45%,1,60% 60%," + size + ",from(white),to(rgba(0,0,55,0.1)))";
    style.opacity = Math.random();
    style.height = pixel_size;
    style.width = pixel_size;
    style.position = 'absolute';
    style.top = (Math.floor(Math.random() * 95) + 15) + "px";
    style.left = (Math.floor(Math.random() * 580) + 10) + "px";
    starfield.appendChild(star);
    star.className = 'star';
    }, Math.floor(Math.random() * 2000)
  );
}

var moon = document.createElement('div');
moon.style.position = 'absolute';
moon.style.top = '15px';
moon.style.left= '15px';
moon.style.zIndex = 1000;
moon.style.webkitBorderRadius = '35px';
var size = 45;
var pixel_size = size + 2 + "px";
var left = 15;
moon.style.width = pixel_size;
moon.style.height = pixel_size;
moon.style.background = "-webkit-gradient(radial,55% 50%,16,50% 50%," + size + ",from(white),color-stop(50%, rgb(100,100,30)), to(rgba(0,0,5,0.1)))";
starfield.appendChild(moon);
