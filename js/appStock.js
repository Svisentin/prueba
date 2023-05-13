
const main = document.querySelector('main')
const divContainer_stock = document.createElement("div");
divContainer_stock.classList.add("grid_stock");
divContainer_stock.style.justifyContent = "space-evenly"
divContainer_stock.style.alignItems = "center"

main.appendChild(divContainer_stock);

// Obtener los productos del almacenamiento local #lista-productos
// const productos = JSON.parse(localStorage.getItem("listaProductos")) || [];

// Ordenar los productos por el código
// productos.sort((a, b) => a.codigo.localeCompare(b.codigo));

// Recorrer el array de productos y agregarlos a la lista
/* productos.forEach((producto) => {
  const div_card = document.createElement("div");
  div_card.classList.add("card_stock");
  
  const codigoProducto = document.createElement("p");
  codigoProducto.innerHTML = `Código: ${producto.codigo}`;
  div_card.appendChild(codigoProducto);

  const imgProducto = document.createElement("img")
  imgProducto.src = `../img/${producto.codigo}.png`;
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
}); */


let productos = [];

async function obtenerProductos() {
    const productosJSON = await fetch('/js/productos.json');
    const data = await productosJSON.json();
    productos = data;
}

obtenerProductos().then(() => {
    console.log(productos);
  }).catch(error => {
    console.error('ERROR AL CARGAR EL ARCHIVO JSON POR LO SIGUIENTE:', error);
  }).finally(() => {
    console.log('SE COMPLETÓ LA CARGA DE LOS OBJETOS DENTRO DEL ARRAY');
  });