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
            <a href="./assets/pages/details.html" class="btn btn-primary align-self-end">Details</a>
        </div>
    </div>`
    }
    contenedordecard.innerHTML=card
    console.log(listevents,contenedordecard);
    
}
 
    

console.log(amazingeventsdata);
showevents (amazingeventsdata, contenedordecard)



