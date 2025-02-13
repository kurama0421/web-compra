let allproducts = document.getElementById(`product`)
let conteo = 0
let carrito = document.getElementById(`carro`)

function agregarcosas(nombre,descripcion,valor,imagen){
    conteo++;
 allproducts.innerHTML +=`
 <div class ="produtico">
 <img alt="" src="${imagen}">
 <h4>${nombre}</h4>
 <h3>${descripcion}</h3>
 <p>${valor}</p>
 </div> 
 `;
 carrito.textContent=conteo;
}

document.getElementById(`vaciar`).addEventListener(`click`,() =>{
allproducts.innerHTML = ``;
conteo=0
carro.textContent = ``;

});
function mostrar(){
    document.getElementById(`modal-content`).style.display = `block`;
    document.getElementById(`modal`).style.display = `block`;
}