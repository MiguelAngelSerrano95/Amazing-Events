let datos = data.events._id
console.log(datos);
let date = data.events
console.log(date);

const param = location.search
console.log(param);

const objUrl = new URLSearchParams(param)
console.log(objUrl);

let objetoURL= objUrl.get("details")
console.log(objetoURL);

const objEvent = date.find( objetEvent => objetEvent._id === objetoURL)
console.log(objEvent);


const $containerDetail = document.getElementById("containerDetail")
console.log($containerDetail);



function createCard (objeto){
  return `<section class="d-flex  gap-4 m-5"> 
<img src="${objeto.image}" alt="Festival of the collectivities,Amazing Events" style="width:50vw; object-fit: contain;">

<div>
    <h2>${objeto.name}</h2>
    <p>${objeto.date}</p>
    <p>${objeto.description}</p>
    <p>${objeto.place}</p>
    <p>${objeto.capacity}</p>
    <p>${objeto.assistance}</p>
    <p>${objeto.price}</p>
</div>
</section>`
}

const cardDetail = createCard(objEvent)

function printCardDetail (container, card ){
    container.innerHTML = card
}
printCardDetail($containerDetail, cardDetail)


