function portfolioComponent(array){
    const container = document.querySelector(".portfolio__container")
    const template = document.querySelector("#portfolio__template");
  
    
    for (let index = 0; index < array.items.length; index++) {
      
      const servicesSubTitleEl = template.content.querySelector(".portfolio__subtitle");
      servicesSubTitleEl.textContent = array.items[index].fields.titulo;
      const servicesDescriptionEl = template.content.querySelector(".portfolio__description")
      servicesDescriptionEl.textContent = array.items[index].fields.descripcion.content[0].content[0].value
      const servicesImgEl = template.content.querySelector(".portfolio__img")
      servicesImgEl.src =array.includes.Asset[index].fields.file.url
      
      const clone = document.importNode(template.content, true);
      container.appendChild(clone)
      
    }
    
  }
  
  function getArrayCMS(){
    fetch("https://cdn.contentful.com/spaces/cpy5n65phgzv/environments/master/entries?access_token=sgRmqDOhBv2tSc7hXa1HLzayYUsgFW_Z1edtaNIONfE&content_type=portfolio")
    .then((response) => response.json())
    .then((data) => portfolioComponent(data))
}


function main (){
    headerComponent()
    footerComponent()
    getArrayCMS()
}

main()