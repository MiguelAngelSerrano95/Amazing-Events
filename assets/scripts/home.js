let contenedordecard = document.getElementById("cartas")


const amazingeventsdata = data.events;
console.log(amazingeventsdata);

function showevents (amazingeventsdata , contenedordecard){
    let card=""
    for(let event of amazingeventsdata){
        card += ` <div class="card" style="width: 18rem;">
            
        <img src="${event.image}" class="card-img-top amazingeventscard" alt="Halloween Night,Amazing Eventes">
        <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
            <p class="card-text textcardamazing">${event.description}</p>
            <a href="./assets/pages/details.html?details=${event._id}" class="btn btn-primary align-self-end">Details</a>
        </div>
    </div>`
    }
    contenedordecard.innerHTML=card
    
    
}
 
    showevents (amazingeventsdata, contenedordecard)






    let _checkAmazing = document.getElementById ("_checkAmazing")
console.log(_checkAmazing);

function filterCaterogory (amazingeventsdata){
  let categoryRepeated =[]
  for (const event of amazingeventsdata) {

      categoryRepeated.push(event.category)
  }
return categoryRepeated
}
let categoryRepeated = filterCaterogory(amazingeventsdata)
console.log(categoryRepeated);
const categorySinRepeating = [... new Set(categoryRepeated)];
console.log(categorySinRepeating);

    function createCheck (category){

        return  `<div class="form-check">
                    <input class="form-check-input" type="checkbox" value="${category}" name="${category}" id="${category}">
                    <label class="form-check-label" for="${category}">${category}</label>
                    </div>`
      }     
  
     
      function pintCheck (category, container){
        for (const dato of category) {
          let templete = createCheck(dato)
          container.innerHTML += templete
            
        } 
      }
      pintCheck( categorySinRepeating, _checkAmazing)


      

      // /------------------------------//ESCUCHANDO//------------------------------//

      let $check = document.getElementById("_checkAmazing") //ESCUCHANDO CHECK
      $check.addEventListener  ('change', ( ) => {
        dobleFiltro ()
      })
      
      function filtrarEventos(amazingeventsdata, category) { // FILTRO CHECK
        if (category.length === 0) {
          return amazingeventsdata;
        }
        return amazingeventsdata.filter(evento => category.includes(evento.category));
      }
      
      const $search = document.getElementById ('search') //ESCUCHANDO SERCH
        
      $search.addEventListener ('input', () => {
        dobleFiltro ()
      console.log($search);
      })
      
      function filtrarPorNombre (amazingeventsdata, busqueda){ //FILTRO SERCH
         filtradaxNombre = amazingeventsdata.filter( item => item.name.toLowerCase().includes(busqueda.toLowerCase()))
         console.log(filtradaxNombre);
         return filtradaxNombre
      }
      
      function dobleFiltro() { //FILTRO DOBLE
      
        const checkboxChecked = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(check => check.value);
        let filtrarPorBusqueda = filtrarPorNombre(amazingeventsdata, $search.value);
        let filtrarCheck = filtrarEventos(filtrarPorBusqueda, checkboxChecked);
      
        contenedordecard.innerHTML = filtrarCheck.map(evento => showevents(evento));}