const glow=document.querySelector('.cursor-glow');
document.addEventListener('mousemove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
const progress=document.querySelector('.progress');
window.addEventListener('scroll',()=>{
  const max=document.documentElement.scrollHeight-window.innerHeight;
  progress.style.width=(window.scrollY/max*100)+'%';
});
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav nav');
menu?.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  if(open){nav.style.display='flex';nav.style.position='absolute';nav.style.top='82px';nav.style.left='0';nav.style.right='0';nav.style.padding='25px';nav.style.background='#0b0c0f';nav.style.flexDirection='column';nav.style.borderBottom='1px solid #292b30'}
  else nav.removeAttribute('style');
});
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',()=>{if(nav.classList.contains('open')){nav.classList.remove('open');nav.removeAttribute('style')}});
});
