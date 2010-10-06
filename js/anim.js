(function() {
  document.write("<canvas id='stars' width='940px' height='600px' style='background-color:black;'></canvas>")
  var canvas = document.getElementById('stars');
  var ctx = canvas.getContext('2d');

  var y = (Math.floor(Math.random() * 130) + 15);
  var x = (Math.floor(Math.random() * 580) + 15);
  var ring = {x: x, y: y, size: 5};

  setInterval(function() {
    ctx.clearRect(0, 0, 600, 150);
    ctx.beginPath();

    if((ring.x + 1) == 130) {
      ring.x -= Math.random();
    } else {
      ring.x += Math.random();
    }

    if((ring.y + 1) == 580) {
      ring.y -= Math.random();
    } else {
      ring.y += Math.random();
    }
    ctx.arc(ring.x,ring.y,ring.size,0,Math.PI * 2,true);
    ctx.strokeStyle = 'rgba(5,5,5,1)';
    ctx.stroke();
  }, 10);
})();
