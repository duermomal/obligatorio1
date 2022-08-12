let currentProductsArray = [];

let currentSortCriteria = undefined;
let minCount = undefined; //preguntar esto
let maxCount = undefined;


function showProductsList(){

    let htmlContentToAppend = "";
    for(let i = 0; i < currentProductsArray.length; i++){
        let producto = currentProductsArray[i];

        if (((minCount == undefined) || (minCount != undefined && parseInt(producto.productCount) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(producto.productCount) <= maxCount))){

            htmlContentToAppend += `
            <div onclick="setCatID(${producto.id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${producto.image}" alt="${producto.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${producto.name}</h4>
                            <small class="text-muted">${producto.soldCount} artículos</small>
                        </div>
                        <p class="mb-1">${producto.description}</p>
                    </div>
                </div>
            </div>
            `
        }

        document.getElementById("listado").innerHTML = htmlContentToAppend;
    }
}




document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL+'101.json').then(function(resultObj){
        if (resultObj.status === "ok"){
            currentProductsArray = resultObj.data;
          //  debugger;
            showProductsList();
            //sortAndShowCategories(ORDER_ASC_BY_NAME, resultObj.data);
        }
    });

    
});