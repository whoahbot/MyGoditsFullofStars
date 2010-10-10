(function() {
  document.write("<div id='starfield' style='position:absolute;top:15px;left:15px;width:1000px;height:600px;background-color:black;'></canvas>");
  document.write("<div id='perspective' style='position:absolute;top:15px;left:15px;width:1000px;-webkit-perspective:400;'><canvas id='words' width='800px' height='550px' style='-webkit-transform: rotateX(30deg) translate(50px, -100px);'></canvas></div>")
  document.write('<style> @-webkit-keyframes twinkle { from { opacity: 1; } to { opacity: 0.25; } } .star { -webkit-animation-name: twinkle; -webkit-animation-duration: 1.0s; -webkit-animation-iteration-count: infinite; -webkit-animation-direction: alternate; -webkit-animation-timing-function: ease-in-out; } </style>');

  var canvas = document.getElementById('words');
  var ctx = canvas.getContext('2d');
  ctx.shadowColor = '#DDDDDD';
  ctx.shadowOffsetX = '0';
  ctx.shadowOffsetY = '1';
  ctx.shadowBlur = '2';

  var readme = document.getElementById('readme');
  var els = readme.textContent.split("\n");
  var elements = [];
  var i = 0;

  ctx.font = "16pt Arial";

  els.forEach(function(e) {
    elements.push({title: e, y: (800 + (i * 50)), scale: 0.7, opacity: 1});
    i++;
  });


  var starfield = document.getElementById('starfield');
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
      style.top = (Math.floor(Math.random() * 580) + 15) + "px";
      style.left = (Math.floor(Math.random() * 980) + 15) + "px";
      starfield.appendChild(star);
      star.className = 'star';
      }, Math.floor(Math.random() * 2000)
    );
  }

  setTimeout(function() {
    setInterval(function() {
      ctx.clearRect(0,0,800,550);
      for(var j = 0; j < elements.length; j++) {
        ctx.save();
        var text = elements[j];
        ctx.scale(1, text.scale);
        ctx.fillStyle = "rgba(255,255,0," + text.opacity +")";
        ctx.fillText(text.title, 100, text.y);
        text.y -= 2;
        ctx.restore();
      };
    }, 50);
  }, 4000);
})();
