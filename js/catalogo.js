/* Inicio objetos */

class Plantas  {
    constructor (planta, tierra, tamaño, stock) {

        this.planta = planta;
        this.tierra = tierra;
        this.tamaño = tamaño;
        this.stock = stock;
        this.activo = true;

    }

    datosPlantas () {

        console.log (`La planta ${this.planta} maneja un sustrato de tipo ${this.tierra} es de tamaño ${this.tamaño} y nos quedan un total de: ${this.stock}.`);
    
    }

};

const SuculentaNormal = new Plantas ("Echeveria elegans", "Normal", "Pequeña", 30);

const Cactus = new Plantas ("Cactus Chin", "Normal", "Mediana", 5);

const Minijardin = new Plantas ("Minijardin", "Normal", "Pequeño", 15);

const CarnivoraDrosera = new Plantas ("Drosera", "Peatmoss", "Pequeña", 10);

const SuculentaPachyveria = new Plantas ("Suculenta Pachyveria", "Normal", "Grande", 2);

const CarnivoraMatamoscas = new Plantas ("Carnivota mata moscas", "Peatmoss", "Pequeña", 5);

// console.log (Carnivora);
// Carnivora.datosPlantas ();
// Minijardin.datosPlantas ();

/* Final Objetos */





/* Inicio Arrays */

const catalogoPlantas = [];

catalogoPlantas.push (new Plantas ("Echeveria elegans", "Normal", "Pequeña", 30));
catalogoPlantas.push (new Plantas ("Cactus Chin", "Normal", "Mediana", 5));
catalogoPlantas.push (new Plantas ("Minijardin", "Normal", "Pequeño", 15));
catalogoPlantas.push (new Plantas ("Drosera", "Peatmoss", "Pequeña", 10));
catalogoPlantas.push (new Plantas ("Suculenta Pachyveria", "Normal", "Grande", 2));
catalogoPlantas.push (new Plantas ("Carnivota mata moscas", "Peatmoss", "Pequeña", 5));

// console.log (catalogoPlantas)

// function datosProductos () {

//     for (let i = 0; i < catalogoPlantas.length; i++) {
//         console.log (catalogoPlantas[i]);
        
//     }

// };

// // datosProductos ()

// const cantidadProductos = catalogoPlantas.sort ((a, b) => {

//     return b.stock - a.stock;

// });

// console.log (cantidadProductos);
 
// const ordenProductos = productos.sort ((orn1, orn2) => {

//     return (orn1.nombre < orn2.nombre) ? - 1 : 1;

// });

// console.log (ordenProductos) 

// console.table (productos);

/* Fin Arrays */




/* Inicio LocalStorage */



/* Final LocalStorage */




/* Inicio events y DOM */

const botonesCompra = document.querySelectorAll(`.btn__buy`);
// console.log (botonesCompra)

const contenedorCompras = document.querySelector (`.productos__comprados`);

botonesCompra.forEach (eventoCompra => {
    eventoCompra.addEventListener(`click`, añadirCompra);

});

function añadirCompra (event) {

    const button = event.target;

    const productos = button.closest(`.productos`);

    const titutoProductos = productos.querySelector (`.titulos__productos`).textContent;

    const precioProductos = productos.querySelector (`.precio__productos`).textContent;

    const fotoProducto = productos.querySelector (`img`).src;


    añadirProductos (titutoProductos, precioProductos, fotoProducto);

}

function añadirProductos (titutoProductos, precioProductos, fotoProducto) {
    
const productosCreados = document.createElement ("div");

const productosContenidos = `

    <div class="elementos__comprados">

        <div class="producto__carrito">

            <img src= ${fotoProducto} alt="Suculenta Echeveria">

            <h4> ${titutoProductos} </h4>

            <h5 class="precio__elemento"> ${precioProductos} </h5>

        </div>

        <div>

            <input class="cantidadProductos" type="number" name="" id="" value="1">

        </div>

    </div>

`;

productosCreados.innerHTML = productosContenidos;

contenedorCompras.append (productosCreados);

actualizacionDatos ()

}

function actualizacionDatos() {
    let total = 0; 

    const totalProductos = document.querySelector (".total__productos");
    
    const productosComprados = document.querySelectorAll (".elementos__comprados");
  
    productosComprados.forEach((productoComprado) => {
      const precioElemento = productoComprado.querySelector(
        '.precio__elemento'
      );
      const costoDelItem = Number(
        precioElemento.textContent.replace('$', '')
      );
      const cantidadObjetos = productoComprado.querySelector(
        '.cantidadProductos'
      );
      const cantidadProductos = Number(
        cantidadObjetos.value
      );
      total = total + costoDelItem * cantidadProductos;
    });
    totalProductos.innerHTML = `${total.toFixed(3)}$`;
  }

/* Final events y DOM */






