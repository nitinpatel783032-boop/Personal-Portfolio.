const cursor=document.getElementById('cursor');
document.addEventListener('mousemove',e=>{
 cursor.style.left=e.clientX+'px';
 cursor.style.top=e.clientY+'px';
});
document.querySelectorAll('a,button').forEach(el=>{
 el.addEventListener('mouseenter',()=>cursor.classList.add('cursor-grow'));
 el.addEventListener('mouseleave',()=>cursor.classList.remove('cursor-grow'));
});

// particles background
const canvas=document.getElementById('bg');
const ctx=canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
let particles=[];
for(let i=0;i<120;i++){particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*2,dx:(Math.random()-0.5),dy:(Math.random()-0.5)});} 
function animate(){ctx.clearRect(0,0,canvas.width,canvas.height);particles.forEach(p=>{ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle='#38bdf8';ctx.fill();p.x+=p.dx;p.y+=p.dy;if(p.x<0||p.x>canvas.width)p.dx*=-1;if(p.y<0||p.y>canvas.height)p.dy*=-1;});requestAnimationFrame(animate);}animate();

// skills animation
const bars=document.querySelectorAll('.bar span');
window.addEventListener('scroll',()=>{
 bars.forEach(bar=>{
  if(bar.getBoundingClientRect().top < window.innerHeight-50){
    bar.style.width=bar.getAttribute('data-width');
  }
 });
});
