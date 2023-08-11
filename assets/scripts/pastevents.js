let contenedordecard = document.getElementById("cartas")

console.log(contenedordecard);

const amazingeventsdata = data.events;

function showevents (listevents , contenedordecard){
    let card=""
    for(let event of listevents){
        card += ` <div class="card" style="width: 18rem;">
            
        <img src="${event.image}" class="card-img-top amazingeventscard" alt="Halloween Night,Amazing Eventes">
        <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
            <p class="card-text textcardamazing">${event.description}</p>
            <a href="../pages/details.html?details=${event._id}" class="btn btn-primary align-self-end">Details</a>
        </div>
    </div>`
    }
    contenedordecard.innerHTML=card
   
    
}

function pastComingEvents (eventos) {
    const eventFiltrados = [];
    for (const evento of eventos){ 
        if ( evento.date < data.currentDate){

            eventFiltrados.push(evento)
        }
    } 
    return eventFiltrados
}

const pastEvents = pastComingEvents (data.events)


showevents(pastEvents,contenedordecard)




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
            console.log(templete);
        } 
      }
      pintCheck( categorySinRepeating, _checkAmazing)
