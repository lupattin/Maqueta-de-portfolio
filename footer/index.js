function footerComponent (){
    const footerEl = document.querySelector(".footer")
    footerEl.innerHTML = `<div class="footer__container">
    <h2 class="footer__title">Luca</h2>
    <div class="footer__container-socials">
      <div class="footer__container-links">
        <a href="https://www.instagram.com/apx.school/?hl=es"class="footer__social-name">Instagram</a>
        <img src="./images/instagram.png" alt="" class="footer__social-logo">
      </div>
      <div class="footer__container-links">
        <a href="https://ar.linkedin.com/company/apx-school"class="footer__social-name">Linkedin</a>
        <img src="./images/linkedin.png" alt="" class="footer__social-logo">
      </div>
      <div class="footer__container-links">
        <a href="https://github.com/lupattin"class="footer__social-name">Github</a>
        <img src="./images/github.png" alt="" class="footer__social-logo">
      </div>
    </div>
  </div>`
}