 //CAMBIOS EN EL HTML Y CSS DE PRODUCTOS
class Producto {
  constructor(codigo, stock, precioUnitario) {
    this.codigo = codigo;
    this.stock = stock;
    this.precioUnitario = precioUnitario;
  }
}
const main = document.querySelector('main')
main.style.width = "100%"
main.style.display = "flex"
main.style.flexFlow = "column"
main.style.alignItems = "center"

const productos = JSON.parse(localStorage.getItem("listaProductos")) || []
let formPrecio = document.getElementById('formPrecio');
formPrecio.addEventListener('submit', cargaPrecio);
let formStock = document.getElementById('formStock');
formStock.addEventListener('submit', cargaStock);

function limpiarMsg (){
  setTimeout (() => {
    divDatosCargados.textContent =""
  },1500)
}

function cargaPrecio(event) {
  event.preventDefault(); // Prevenir comportamiento predeterminado del formulario

  const codigo = document.querySelector('select[name="cod-prod"]').value;
  const precioUnitario = parseInt(document.querySelector('input[name="precioUnitario"]').value);
  
  if (!codigo || !precioUnitario) {
    document.getElementById ("divDatosCargados").textContent ="Por favor complete el campo de PRECIO"
    limpiarMsg()
    return;
  }

  let productoExistente = productos.find((producto) => producto.codigo === codigo);
  if (productoExistente) {

    productoExistente.precioUnitario = precioUnitario;

  } else {
    // Si el producto no existe, agregar un nuevo producto a la lista
    const nuevoProducto = new Producto(codigo,0, precioUnitario);
    productos.push(nuevoProducto);
  }

  console.table(productos); // Imprimir la tabla de productos en la consola
  localStorage.setItem("listaProductos", JSON.stringify(productos));
  mostrarUltimoValorCargado(productoExistente)
}

function cargaStock(event) {
  
  event.preventDefault(); // Prevenir comportamiento predeterminado del formulario

  const codigo = document.querySelector('select[name="cod-prod2"]').value;
  const stock = parseInt(document.querySelector('input[name="stock"]').value)
  
  if (!codigo || !stock) {
    document.getElementById ("divDatosCargados").textContent ="Por favor complete el campo de STOCK";
    limpiarMsg()
    return;
  }
  
  let productoExistente = productos.find((producto) => producto.codigo === codigo);
  if (productoExistente) {
    productoExistente.stock += parseInt(stock);
  } else {
    // Si el producto no existe, agregar un nuevo producto a la lista
    const nuevoProducto = new Producto(codigo, stock,0);
    productos.push(nuevoProducto);
  }
    
  

  console.table(productos); // Imprimir la tabla de productos en la consola
  localStorage.setItem("listaProductos", JSON.stringify(productos));
 
  mostrarUltimoValorCargado(productoExistente)
}

function mostrarUltimoValorCargado(productoExistente) {
  const divDatosCargados = document.getElementById("divDatosCargados");
  
  if (productoExistente) {
    divDatosCargados.textContent = `Valor actualizado: Código ${productoExistente.codigo}, Stock ${productoExistente.stock}, Precio Unitario ${productoExistente.precioUnitario}`;
  } else {
    divDatosCargados.textContent = "Producto cargado por primera vez";
  }
  
  const elementoHTML = document.createElement('p');
  main.appendChild(elementoHTML);
  limpiarMsg()
}
