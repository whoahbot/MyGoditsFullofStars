(function() {
  document.write("<div id='perspective' style='position:absolute;top:15px;left:15px;width:1000px;-webkit-perspective:400;background-color:black;'><canvas id='stars' width='800px' height='550px' style='-webkit-transform: rotateX(30deg) translate(50px, -100px);'></canvas></div>")
  var canvas = document.getElementById('stars');
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
  })

  setInterval(function() {
    ctx.clearRect(0,0,800,550);
    for(var j = 0; j < elements.length; j++) {
      ctx.save();
      var text = elements[j];
      //var width = ctx.canvas.width;
      //var len = ctx.measureText(text.title).width;
      //ctx.translate((width - len)/2, -100);
      ctx.scale(1, text.scale);
      ctx.fillStyle = "rgba(255,255,0," + text.opacity +")";
      ctx.fillText(text.title, 100, text.y);
      text.y -= 2;
      ctx.restore();
    };
  }, 50);
})();
