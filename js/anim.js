(function() {
  document.write("<div id='perspective' style='-webkit-perspective:500;background-color:black;'><canvas id='stars' width='800px' height='550px' style='-webkit-transform: rotateX(40deg)'></canvas></div>")
  var canvas = document.getElementById('stars');
  var ctx = canvas.getContext('2d');

  ctx.font = "30pt Arial";
  ctx.shadowColor = '#DDDDDD';
  ctx.shadowOffsetX = '0';
  ctx.shadowOffsetY = '2';
  ctx.shadowBlur = '2';

  var readme = document.getElementById('readme');
  var h1s = readme.getElementsByTagName('h1');
  var elements = [];
  for (var i = 0; i < h1s.length; i++) {
    var text = {title: h1s[i].innerHTML, y: (500 + (i * 50)), scale: 0.65, opacity: 1};
    elements.push(text);
  }

  //ctx.translate(-180, 0);

  setInterval(function() {
    ctx.clearRect(0,0,800,550);
    for(var j = 0; j < elements.length; j++) {
      ctx.save();
      var text = elements[j];
      ctx.fillStyle = "rgba(255,255,0," + text.opacity +")";
      ctx.fillText(text.title, 100, text.y);
      text.y -= 2;
      ctx.restore();
    };
  }, 50);
})();
