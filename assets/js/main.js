function revealElements(){
  document.querySelectorAll('.reveal').forEach(el=>{
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.classList.add('active');
    }
  });
}

window.addEventListener('load', revealElements);
window.addEventListener('scroll', revealElements);

const btn = document.getElementById('themeBtn');
if(btn){
  btn.onclick = () => {
    document.body.classList.toggle('light');
    btn.textContent = document.body.classList.contains('light') ? '🌞' : '🌙';
  };
}
