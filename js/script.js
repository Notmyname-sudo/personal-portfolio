// Mobile menu
const m=document.getElementById('menu'),n=document.querySelector('nav');
if(m)m.addEventListener('click',()=>{const o=n.classList.toggle('open');m.setAttribute('aria-expanded',o)});
// Typing animation
const t=document.querySelector('.type');
if(t){const w=['Computer Science Student','Web Developer','Future Software Engineer','Technology Enthusiast'];let i=0,c=0,d=false;
(function tick(){const s=w[i];t.textContent=s.slice(0,c);
if(!d&&c<s.length)c++;else if(!d){d=true;return setTimeout(tick,1400)}
else if(c>0)c--;else{d=false;i=(i+1)%w.length}
setTimeout(tick,d?40:90)})()}
// Scroll reveal + animated skill bars
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('show');
e.target.querySelectorAll('.fill').forEach(f=>f.style.width=f.dataset.w+'%');io.unobserve(e.target)}),{threshold:.2});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
