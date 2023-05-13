
const main = document.querySelector('main')
const divContainer_stock = document.createElement("div");
divContainer_stock.classList.add("grid_stock");
divContainer_stock.style.justifyContent = "space-evenly"
divContainer_stock.style.alignItems = "center"

main.appendChild(divContainer_stock);

// Obtener los productos del almacenamiento local #lista-productos


// Ordenar los productos por el código
// ;

// Recorrer el array de productos y agregarlos a la lista



let productos = [];

async function obtenerProductos() {
    const productosJSON = await fetch('/js/productos.json');
    const data = await productosJSON.json();
    productos = data;
}

obtenerProductos().then(() => {
  productos.forEach((producto) => {
    const div_card = document.createElement("div");
    div_card.classList.add("card_stock");

    const idProducto = document.createElement("p");
    idProducto.innerHTML = `Código: ${producto.id}`;
    div_card.appendChild(idProducto);
    
    const nombreProducto = document.createElement("p");
    nombreProducto.innerHTML = `${producto.nombre}`;
    div_card.appendChild(nombreProducto);

    const imgProducto = document.createElement("img")
    imgProducto.src = `../img/${producto.nombre}.png`;
    imgProducto.width = 150
    imgProducto.height = 150
    imgProducto.style.borderRadius = "5px"
    imgProducto.style.display = "block"
    imgProducto.style.margin = "auto" 
    imgProducto.style.marginBottom = "10px";
    imgProducto.style.marginTop = "10px";
    imgProducto.style.objectFit = "cover";

    div_card.appendChild(imgProducto)
    
    const stockProducto = document.createElement("p");
    stockProducto.innerHTML = `Stock: ${producto.stock}`;
    div_card.appendChild(stockProducto);
    
    const precioProducto = document.createElement("p");
    precioProducto.innerHTML = `Precio Unitario: $${producto.precioUnitario}`;
    div_card.appendChild(precioProducto);
    
    divContainer_stock.appendChild(div_card);
  });
    console.log(productos);
  }).catch(error => {
    console.error('ERROR AL CARGAR EL ARCHIVO JSON POR LO SIGUIENTE:', error);
  }).finally(() => {
    console.log('SE COMPLETÓ LA CARGA DE LOS OBJETOS DENTRO DEL ARRAY');
  });