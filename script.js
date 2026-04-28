 document.addEventListener("DOMContentLoaded", () => {

  const navbartoggle = document.querySelector('.navbar-toggle');
  const navbarmenu = document.querySelector('.menu'); 

  if (navbartoggle && navbarmenu) {
    navbartoggle.addEventListener('click', () => {
      navbartoggle.classList.toggle('active'); 
      navbarmenu.classList.toggle('active'); 
    });
  }

  const heroBtn = document.getElementById('heroBtn');
  const ctaBtn = document.getElementById('ctaBtn'); 

  function handleBtnClick(message) {
    alert(message);
  }

  if (heroBtn) {
    heroBtn.addEventListener('click', (e) => {
      e.preventDefault(); 
      handleBtnClick(' Welcome to DevelopersHub! Let\'s build your digital future.');

      const contactSection = document.querySelector('#contact-cta'); 
      if(contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

});
const video = document.getElementById("desktop-video");

function setVideo() {
  if (window.innerWidth <= 767) {
    video.src = "video2.mp4";
  } else {
    video.src = "video1.mp4";
  }
}

setVideo();
window.addEventListener("resize", setVideo);