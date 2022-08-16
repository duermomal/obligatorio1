/*function cargaProductos(){
    const lista = document.getElementById("listado");
    lista.innerHTML = "";
    fetch(PRODUCTS_URL+'101.json')
        .then(respuesta => respuesta.json())
        .then(productos => {
            productos.forEach(producto => {
                lista.innerHTML += getCardHTML();
            });
        })

}*/
/*
const getCardHTML = (producto) => {
    //producto.name
    //producto.descripcion
    //producto.soldCount
    //produto.currency
    return `<div class="card">
    <img src="${PRODUCTS_URL}${producto.image}" />
    <h3>${title}</h3>
    <a href="${API_URL_SEARCH}${encodeURIComponent(title)}" target="_blank">Ver Más</a>
</div>`;
}
*/

/*
const showProducts = (array) => { // una vez que se obtienen los datos y no se encontraron errores, se procede a mostrarlos usando esta funcion, la cual agrega a cada objeto a un contenedor, el cual se llama por id mediante DOM
    // ## INICIO BLOQUE 3 ##
    debugger;
    const container = document.getElementById("listado");
    container.innerHTML = "";
    for (let movie of array) {
        container.innerHTML += getCardHTML(movie.poster_path, movie.title)
    }
    // ## FIN BLOQUE 3 ##
}*/



function showProductsList(categoria){

    let htmlContentToAppend = 
        `<div class="text-center p-4">
            <h2>Productos</h2>
            <p class="lead">Verás aquí todas los productos de la categoría ${categoria.catName}.</p>
        </div>`;
    for(let producto of categoria.products){
            htmlContentToAppend += `
            <div class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${producto.image}" alt="${producto.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${producto.name} - ${producto.currency} ${producto.cost}</h4>
                            <small class="text-muted">${producto.soldCount} vendidos</small>
                        </div>
                        <p class="mb-1">${producto.description}</p>
                    </div>
                </div>
            </div>
            `
        
    }
    document.getElementById("listado").innerHTML = htmlContentToAppend;
    
}

document.addEventListener("DOMContentLoaded", function(e){
    let catId = localStorage.getItem('catID');
    fetch(PRODUCTS_URL + catId + '.json')
    .then(respuestaDelFetch => respuestaDelFetch.json())
    .then(dataJson => {
        showProductsList(dataJson);    
    });
   
});


/*
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(resultObjstr => {
       showProductsList(resultObjstr);

    });
   
});*/

