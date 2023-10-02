const coords = { x: 0, y: 0 };
const circles = [];

for (let i = 0; i < 25; i++) {
    const circle = document.createElement("div");
    circle.className = "circle";

    document.body.appendChild(circle);
    circles.push(circle);
}

circles.forEach(function (circle) {
  circle.x = -10;
  circle.y = -10;
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
});

window.addEventListener("click", function(e){
    const wave = document.createElement("div");
    wave.className = "wave";
    document.body.appendChild(wave);

    wave.style.top = `${e.clientY}px`;
    wave.style.left = `${e.clientX}px`;

    wave.style.animation = 'wave-effect .3s linear';
    wave.onanimationend = () => wave.remove();
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x + "px";
    circle.style.top = y + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();