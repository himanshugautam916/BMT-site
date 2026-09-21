
const menu=document.querySelector('.menu-btn'),nav=document.querySelector('.nav-links');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
const current=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('.nav-links a').forEach(a=>{if(a.getAttribute('href')===current)a.classList.add('active')});
