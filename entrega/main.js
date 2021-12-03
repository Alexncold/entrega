class Producto {
  constructor(id, nombre, precio){
    this.id = id;
    this.nombre = nombre;
    this.precio = parseFloat(precio);
  }
}

const productos = []
productos.push(new Producto("1", "pizza", 5));
productos.push(new Producto("2", "empanadas", 4));
productos.push(new Producto("3", "postre", 3));

const iva = productos.map(elemento => elemento.precio * 1.21)

let bienvenida = prompt(
  "Bienvenido a Pizzamania!\nQue tenés ganas de comer hoy?\nSeleccioná una de las opciones de abajo\n1) Large Pizza\n2) Docena de Empanadas\n3) Postrecito"
);

switch (bienvenida) {
  case "1":
    alert("El costo es de " + iva[0] + "$");
    bienvenida = iva[0];
    break;
  case "2":
    alert("El costo es de " + iva[1] + "$");
    bienvenida = iva[1];
    break;
  case "3":
    alert("El costo es de " + iva[2]+ "$");
    bienvenida = iva[2];
    break;
}

let envio = prompt(
  "Necesitas que te lo enviemos?\n1) Si! (+10$)\n2) No, retiro por el local (gratis)"
);

switch (envio) {
  case "1":
    envio = 10;
    break;
  case "2":
    envio = 0;
    break;
}

const envioPedido = () => {
  alert(
    "Su total es de " +
      (bienvenida + envio) +
      "$\nMuchas gracias por elerginos\nEl pedido estará listo dentro de las próximas 8hs"
  );
};

envioPedido();


//funcion para calcular el costo del pedido

//funcion sumar bienvenida + envio
