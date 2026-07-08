//mostra el menu completo, plato por linea de codigo, recorriendo el array de platos
//tengo que tener un array de objetos donde tenran las claves de nombre, precio, categoria y disponible ( boolean)

const prompt = require("prompt-sync")();

const platos = [
  {
    nombre: "Bandeja Paisa Especial",
    precio: 45000,
    categoria: "fuerte",
    disponible: true,
  },
  {
    nombre: "Cazuela de Mariscos",
    precio: 55000,
    categoria: "fuerte",
    disponible: true,
  },
  {
    nombre: "Ajiaco Santafereno",
    precio: 32000,
    categoria: "fuerte",
    disponible: true,
  },
  {
    nombre: "Sancocho de Gallina",
    precio: 30000,
    categoria: "fuerte",
    disponible: true,
  },
  {
    nombre: "Mondongo Antioqueño",
    precio: 28000,
    categoria: "fuerte",
    disponible: true,
  },
  {
    nombre: "Lomo al Trapo",
    precio: 48000,
    categoria: "fuerte",
    disponible: false,
  },
  {
    nombre: "Posta Negra Cartagenera",
    precio: 42000,
    categoria: "fuerte",
    disponible: true,
  },
  {
    nombre: "Arroz con Camarones",
    precio: 38000,
    categoria: "fuerte",
    disponible: true,
  },
  {
    nombre: "Empanadas de Carne (3 unidades)",
    precio: 9000,
    categoria: "entrada",
    disponible: true,
  },
  {
    nombre: "Patacones con Hogao",
    precio: 12000,
    categoria: "entrada",
    disponible: true,
  },
  {
    nombre: "Chicharron con Arepa",
    precio: 18000,
    categoria: "entrada",
    disponible: true,
  },
  {
    nombre: "Limonada de Coco",
    precio: 12000,
    categoria: "bebida",
    disponible: true,
  },
  {
    nombre: "Jugo Natural en Agua",
    precio: 8000,
    categoria: "bebida",
    disponible: true,
  },
  {
    nombre: "Jugo Natural en Leche",
    precio: 9500,
    categoria: "bebida",
    disponible: true,
  },
];
let pedido = [];

function mostrarMenu(array) {
  console.log("*****************  MENU  ************************");
  for (let i = 0; i < array.length; i++) {
    console.log(array[i].nombre, " - precio: ", array[i].precio);
  }
  return platos;
}

mostrarMenu(platos);

//bonus
//platos por categoria, funcion platosPorCategoria recibe dos parametros un menu, que es un array de objetos y categoria, devuelve un array nuevo con los platos de esa categoria
//mostrar el array nuevoi
function platosPorCategoria(array, categoria) {
  let platosPorCategoria = [];
  console.log(`****** ${categoria} **********`);
  for (let i = 0; i < array.length; i++) {
    if (categoria === array[i].categoria) {
      platosPorCategoria.push(array[i].nombre);
    }
  }
  return platosPorCategoria;
}
console.log(platosPorCategoria(platos, "fuerte"));

//reto 2
//funcion --> soloDisponibles, donde muestra un array nuevo, solo con los platos disponibles, o sea true

function soloDispopnibles() {
  let platosDisponibles = [];
  console.log("*************  PLATOS DISPONIBLES  *******************");

  platos.map((plato) => {
    if (plato.disponible === true) {
      platosDisponibles.push(plato);
    }
  });
  return platosDisponibles;
}

let platosDisponibles = soloDispopnibles();
mostrarMenu(platosDisponibles);

//RETO 3
//tomar el pedido de una mesa, funcion nueva

function pedidoMesa() {
  let estadoPedido = true;
  console.log("******** TOMANDO PEDIDO **************");
  while (estadoPedido) {
    let platos = prompt("Que plato desea ?: ");
    pedido.push(platos);
    let continuarPedido = prompt("Desea ordenar algo mas? si/no ");

    if (continuarPedido === "no") {
      let eliminarPlato = prompt(
        "Desea quitar el ultimo plato de su orden si/no ",
      );
      if (eliminarPlato.toLowerCase() === "si") {
        pedido.pop();
      }

      estadoPedido = false;
    }
  }
  console.log("*************** CONFIRMACION PEDIDO ******************");
  console.log("Para confirmar su pedido, tenemos ");
  return pedido;
}

let pedidoCompleto = pedidoMesa();

//retoo 4
//Cobrar la cuenta con IVA!
//tener la funcion calcularCuenta recibe el pedido como tal, devuelva el total mas el IVA!
//sumar el valor de cada plato, pero en una variable como si fuera acumulativo

function calcularCuenta(array) {
  let totalSinIva = 0;
  console.log("****** FACTURA - VALOR A PAGAR *******");
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < platos.length; j++) {
      if (array[i].toLowerCase() === platos[j].nombre.toLowerCase()) {
        console.log(array[i], "- valor: ", platos[j].precio);
        totalSinIva += platos[j].precio;
      } else {
        continue;
      }
    }
  }
  console.log("Valor total+ IVA", totalSinIva * 0.19 + totalSinIva);
}

calcularCuenta(pedidoCompleto);
