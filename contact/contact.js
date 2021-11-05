function contactComponent(){
    const sectionEl = document.querySelector(".contact")
    sectionEl.innerHTML += `<form action="" class="contact__form">
    <h2 class="contact__form-title">Contactate</h2>
    <div class="contact__container-main">
      <div class="contact__input-container">
        <label for="" class="contact__label">Nombre</label>
        <input type="text" name="name" class="contact_input">
      </div>
      <div class="contact__input-container">
        <label for="" class="contact__label">Email</label>
        <input type="email" name="email" class="contact_input">
      </div>
      <div class="contact__input-container">
        <label for="" class="contact__label">Mensaje</label>
        <textarea name="message" id="" cols="30" rows="10" class="contact_input message"></textarea>
      </div>
      <button class="contact__button">Enviar</button>
    </div>
  </form>`

  const formEl = document.querySelector(".contact__form")
  formEl.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    const dataForm = new FormData(e.target)

    const data = {
      to: dataForm.get("email"),
      message: dataForm.get("message"),
    };
    console.log(data);

    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    });
  });
  }