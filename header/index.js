function headerComponent(){
    /* Agrego el HTML del header al DOM */
    
    const welcomeEl= document.querySelector(".welcome")
    welcomeEl.innerHTML += `
    <div class="header">
    <a href="index.html">
    <img src="" alt="" class="header__logo">
    </a>
    <div class="header__container-links">
        <a href="./porfolio.html" class="header__links">Portfolio</a>
        <a href="./services.html" class="header__links">Servicios</a>
        <a href="./contact.html" class="header__links">Contacto</a>
      </div>
    <img src="" alt="" class="header__dropdown-icon-menu">
  </div>
  <div class="header__contenet-dropdown-menu">
    <p class="header__dropdown-menu-close">x</p>
      <ul class="header__dropdown-menu-list">
        <a class="header__dropdown-menu-item" href="./porfolio.html">Portfolio</a>
        <a class="header__dropdown-menu-item" href="./services.html">Servicios</a>
        <a class="header__dropdown-menu-item" href="./contact.html">Contacto</a>
      </ul>
  </div>`

  /* Agrego imagenes desde CMS al header */

  fetch(
    "https://cdn.contentful.com/spaces/cpy5n65phgzv/environments/master/assets/17gp3ZeyNUXW3qJEACr3WP?access_token=sgRmqDOhBv2tSc7hXa1HLzayYUsgFW_Z1edtaNIONfE"
  ).then((e)=>{
      return e.json();
  }).then((e)=>{
      const imgEl = document.querySelector(".header__logo")
      imgEl.src = e.fields.file.url
  })
  
fetch(
    "https://cdn.contentful.com/spaces/cpy5n65phgzv/environments/master/assets/2MK3og6k45tJZwvWyLQxpF?access_token=sgRmqDOhBv2tSc7hXa1HLzayYUsgFW_Z1edtaNIONfE"
  ).then((e)=>{
      return e.json();
  }).then((e)=>{
      const imgEl = document.querySelector(".header__dropdown-icon-menu")
      imgEl.src = e.fields.file.url
  })
  /* Agrego el menu desplegable */

  const headerMenuEl = document.querySelector(".header__dropdown-icon-menu")
  const headerDropdownMenuEl = document.querySelector(".header__contenet-dropdown-menu")
  const headerDropdownMenuCloseEl = document.querySelector(".header__dropdown-menu-close")

  headerMenuEl.addEventListener("click", ()=>{
    headerDropdownMenuEl.style.display = "inherit"
  })
  headerDropdownMenuCloseEl.addEventListener("click", ()=>{
    headerDropdownMenuEl.style.display = ""
  })
}