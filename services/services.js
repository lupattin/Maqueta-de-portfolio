function servicesComponents(array){
  
    const container = document.querySelector(".services__container")
    const template = document.querySelector("#services__template");
  
    for (let index = 0; index < array.items.length; index++) {
      
      const servicesSubTitleEl = template.content.querySelector(".services__subtitle");
      servicesSubTitleEl.textContent = array.items[index].fields.titulo;
      const servicesDescriptionEl = template.content.querySelector(".services__description")
      servicesDescriptionEl.textContent = array.items[index].fields.descripcion.content[0].content[0].value
      const servicesImgEl = template.content.querySelector(".services__img")
      servicesImgEl.src =array.includes.Asset[index].fields.file.url
      
      const clone = document.importNode(template.content, true);
      container.appendChild(clone)
      
    }
    
  }
  
  function getArrayCMS(){
    fetch("https://cdn.contentful.com/spaces/cpy5n65phgzv/environments/master/entries?access_token=sgRmqDOhBv2tSc7hXa1HLzayYUsgFW_Z1edtaNIONfE&content_type=servicio")
    .then((response) => response.json())
    .then((data) => servicesComponents(data))
  }

  function main(){
      getArrayCMS()
      headerComponent()
      footerComponent ()
  }
  
  main()