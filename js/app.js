
//CAMBIOS EN HTML Y CSS DEL INDEX
//Obtengo nodos
const body = document.body;

//Creo nuevos nodos
const main = document.createElement('main');
const div = document.createElement('div');
const p = document.createElement('p');
const divBotones = document.createElement('div');
const button1 = document.createElement('button');
const button2 = document.createElement('button');
const enlace1 = document.createElement('a');
const enlace2 = document.createElement('a');

//Agrego el contenido y lo bajo al html
p.innerHTML = '<br><br>Ya puedes gestionar la carga y control del stock de tus productos<br><br>' ;

enlace1.href = 'paginas/productos.html';
enlace1.textContent = "Cargar productos"
enlace1.style.fontSize = ("1.3em")

enlace2.href = 'paginas/stock.html';
enlace2.textContent = "Stock"
enlace2.style.fontSize = ("1.3em")

divBotones.style.textAlign = ("center")

body.appendChild(main);
main.appendChild(div);
div.appendChild(p);
div.appendChild(divBotones);
divBotones.appendChild(button1);
divBotones.appendChild(button2);
button1.appendChild(enlace1);
button2.appendChild(enlace2);

