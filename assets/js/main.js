function revealElements(){
  document.querySelectorAll('.reveal').forEach((el, index)=>{
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      setTimeout(() => {
        el.classList.add('active');
      }, index * 100); 
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
