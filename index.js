/*Objetivos: calcular la cantidad en gramos que necesito de cada ingrediente para preparar una receta para la cantidad de comensales (pizza individual) que ingrese e usuario, y calcular el costo de ingredientes y el costo final.
Aclaración: el "factor de corrección" tiene en cuenta el desperdicio para calcular la cantidad de compra de un ingrediente y tener mejor control de gastos. Por ejemplo, el factor de Corrección de la Harina es 1 porque no tiene desperdicio, mientras que el factor de la naranja para jugo es 2 porque el 50% de una naranja aproximadamente es desperdicio cuando se compra naranja para hacer jugo. O sea si necesito 50g de jugo (es el peso Neto para mi receta), necesito comprar 100g de naranjas (peso Bruto).*/
//Cada objeto creado con la clase Ingrediente contempla como propiedad el peso neto para 1 pizza individual.
//Variables globales:


class Ingrediente{
    constructor(id, nombreIngred, marca, pesoNeto1Pizza, factorCorreccion,GramosEnBolsa, precioXBolsa, foto, cantidad){
    this.id=id
    this.nombreIngred=nombreIngred;
    this.marca=marca;
    this.pesoNeto1Pizza=pesoNeto1Pizza;
    this.factorCorreccion=factorCorreccion;
    this.GramosEnBolsa=GramosEnBolsa;
    this.precioXBolsa=precioXBolsa;
    this.foto=foto;
    this.cantidad=cantidad;

    }
    //métodos
    costoXGramo(){ 
        return this.precioXBolsa/this.GramosEnBolsa;
    }
    //Calcular Peso Bruto:
    pesoBruto(){ 
        return this.pesoNeto1Pizza * this.factorCorreccion;
    }
    //Calcular el costo del ingrediente para 1 pizza:
    costoIngred1Pizza(){
        return this.costoXGramo()*this.pesoBruto();
    }
    cantidadTotalNetaIngred(){
        return cantidadPizzas*this.pesoNeto1Pizza;
    }
    //Calcular la cantidad total del ingrediente para la receta para todos los comensales
    cantidadTotalBrutaIngred(){
        return cantidadPizzas*this.pesoBruto();
    }
    //Calcular costo total del ingrediente en la receta para todos los comensales:
    costoTotalIngred(){
        return cantidadPizzas*this.costoIngred1Pizza();
    }
    //Calcular cantidad de unidades de compra necesarias del ingrediente para la receta para todos los comensales (aunque se necesite menos gramos que lo que trae el envase igualmente devolverá 1 unidad de compra entera):
    cantUnidadesCompra(){
        let unidades = this.cantidadTotalBrutaIngred()/this.GramosEnBolsa;
        return  Math.ceil(unidades);
    }
    //Calcular costo de la cantidad de unidades de compra del ingrediente:
    costoUnidadesCompra(){
        return this.cantidad*this.precioXBolsa;
    }
    
}


//Declaración de Objetos que son los ingredientes de la receta de pizza integral, con cantidades para 1 pizza individual:

const aceiteOliva = new Ingrediente (14, "Aceite de oliva", "Biolive", 10, 1, 500, 930, 'images/ingred/olive-oil.png');
const agua = new Ingrediente(15, "Agua","corriente", 65, 1, 1, 0, 'images/ingred/water.png');
const albahaca = new Ingrediente (1, "Albahaca fresca", "verduTienda", 20, 2, 80, 150, 'images/ingred/albahaca.png');
const ananaLata = new Ingrediente (2, "Ananá", "Nuestras Manos", 100, 2, 800, 520, 'images/ingred/anana.png');
const champignones = new Ingrediente(3, "Champignones", "verduTIenda", 80, 1, 200, 380, 'images/ingred/mushroom.png');
const espinaca = new Ingrediente (4, "Espinaca", "verduTienda", 40, 1.6, 150, 120, 'images/ingred/spinach.png');
const jamonCoc = new Ingrediente(5, "Jamón cocido", "Bocatti", 30, 1, 130, 368, 'images/ingred/ham.png');
const jamonCrudo = new Ingrediente(6, "Jamón Crudo", "Campos Chivilcoy", 30, 1, 100, 464, 'images/ingred/jamon-crudo.png');
const premezcla = new Ingrediente (16, "Premezcla ", "Kapac", 100, 1, 500, 337, 'images/ingred/flour.png');
const mozzarella = new Ingrediente(7, "Mozzarella", "Vacalín", 80, 1, 500, 560, 'images/ingred/mozzarella.png');
const oregano = new Ingrediente (8, "Orégano", "Yuspe", 3, 1, 10, 84, 'images/ingred/oregano.png');
const quesoAzul = new Ingrediente (9, "Queso Azul", "Bavaria", 30, 1, 140, 408, 'images/ingred/queso-azul.png');
const quesoSardo = new Ingrediente(10, "Queso Sardo", "Vacalín", 15, 1, 250, 375, 'images/ingred/cheese.png');
const rucula = new Ingrediente (11, "Rúcula", "verduTienda", 40, 1.6, 150, 120, 'images/ingred/arugula.png');
const sal = new Ingrediente(17, "Sal fina", "Celusal", 1, 1, 500, 80, 'images/ingred/salt-shaker.png');
const tomate = new Ingrediente (12, "Tomate fresco", "verduTienda", 80, 1.1, 1000, 220, 'images/ingred/tomato.png');
const tomatesSecos = new Ingrediente(13, "Tomates Secos", "El Hornero", 15, 1, 50, 125, 'images/ingred/drying.png');
//array de ingredientes posibles para agregar a creaTuPizza
const listadoIngredParaElegir =[albahaca, ananaLata, champignones, espinaca, jamonCoc, jamonCrudo, mozzarella, oregano, quesoAzul, quesoSardo, rucula, tomate, tomatesSecos];

///DOM:
const ingredientesSeleccionar = document.querySelector(".ingredientesSeleccionar");
const comensales = document.querySelector("#comensales");
const cantidadesReceta = document.querySelector(".cantidadesReceta");
const productosCarrito = document.querySelector(".productosCarrito");
const btnConfirmarCompra = document.querySelector("#btnConfirmarCompra");
const contenedorCarrito = document.getElementById('contenedorCarrito');
const tituloPrecioTotal = document.getElementById('tituloPrecioTotal');
const precioTotal = document.getElementById('precioTotal');
const tabla = document.getElementById('tabla');


/////Se concaneta la receta de masa de pizza con la cubierta creada por el usuario:
const pizzaCreada = [premezcla, agua, sal, aceiteOliva];
/*Qué guardo en local Storage: CLAVES:
cantidad de comensales/pizzas --> 'cantidadPizzas'
ingrediente checkeado --> "ingredElegidoID"
cada vez que se agrega o quita un objeto del array pizzaCreada (que funciona como carrito) --> "pizza"
la lista de cantidades de la receta para cocinar --> "listaCantidadesReceta"

*/


//App:

//Selecciono cantidad de comensales desde un select:
let cantidadPizzas;
comensales.addEventListener("change",() =>{
    cantidadPizzas = comensales.value;
    localStorage.setItem('cantidadPizzas', JSON.stringify(cantidadPizzas));
    //Es relevante llamar la atención al usuario sobre la importancia de completar este paso para poder seguir con el resto del proceso (brindar el dato para poder calcular cantidades). Se una un toast ya que no es necesario interrumpir el flujo de acciones del usuario (como sería por ejemplo con un alert).
    Toastify({
        avatar: "images/oryza-logo.png",
        text: "Seleccionaste la cantidad de comensales, ¡Genial!",
        gravity: "top",
        position: "right",
        style:{
            background: "rgba(65, 44, 16, 0.897)"
        }
    }).showToast();      
    
});

//Ver los productos disponibles para seleccionar:
//Usuario selecciona ingredientes: clickea el checkbox de cada card de cada ingrediente
const mostrarIngred = () =>{
    listadoIngredParaElegir.forEach((e) =>{
        const cardIngredSelec = document.createElement("div");
        cardIngredSelec.className ="cardIngredSelec";
        ingredientesSeleccionar.appendChild(cardIngredSelec);
        cardIngredSelec.innerHTML =    
        `<div class="card-seleccionar ">
            <img    src="${e.foto}"
                    class=" card-img-top img-fluid"
                    alt="${e.nombreIngred}"/>
            <br>
            <label  for="${e.nombreIngred}">${e.nombreIngred}</label>
            <input type="checkbox" class="checkboxCuadrado"  id="checkbox${e.id}" value="1"><br>
        </div>`
        
    })
}

function quePasaCuandoCheck(){
    listadoIngredParaElegir.forEach((e) =>{
        const elegido = document.getElementById(`checkbox${e.id}`);
        elegido.addEventListener('click',()=>{ 
            elegido.value!==null && agregarAPizzaCreada(e.id);
            localStorage.setItem("ingredElegidoID",JSON.stringify(e.id))
            //Se inserta un toast para enfatizar que la acción de agregar un ingrediente por parte del usuario es importante para el proceso general de armar la pizza.
            Toastify({
                avatar: "images/oryza-logo.png",
                text: "¡Agregaste un nuevo ingrediente!",
                gravity: "bottom",
                position: "right",
                style:{
                    background: "rgba(65, 44, 16, 0.897)"
                }
            }).showToast();       
        })
    })
}

function agregarAPizzaCreada(id){
    let pusheando = listadoIngredParaElegir.find((e) => e.id == id);
    pizzaCreada.push(pusheando);
    localStorage.setItem('pizza', JSON.stringify(pizzaCreada))
}


//Confirmación de que dejó de seleccionar ingredientes. Validación: que haya seleccionado la cantidad de comensales, de lo contrario sale un sweetalert.
//Desencadena 2 procesos en paralelo: mostrar las cantidades para la receta, y mostrar los productos agregados automáticamente al carrito (por haberse pusheado a pizzaCreada)
document.querySelector("#spinner").style.display = "none";
function confirmacionSelecIngred(){
    document.querySelector('#yaTermine').addEventListener("click", () =>{
        //comensales.value==0 ? alertComensales()  : (mostrarCantidadesReceta(pizzaCreada), mostrarProductos(pizzaCreada));
        document.querySelector("#spinner").style.display = "inline-block";
        const promesa = new Promise ((resolve, reject) => {
            if(comensales.value==0){
                setTimeout(() => {
                    
                    resolve();
                },2000);
            }else{
                setTimeout(() => {
                    reject();
                },2000);
            }
            
        });
        promesa
        .then(() => {
            alertComensales()
        })
        .catch(() => {
            mostrarCantidadesReceta(pizzaCreada);
            mostrarProductos(pizzaCreada);
            
           
        })
        .finally(() => {
            document.querySelector("#spinner").style.display = "none";
            document.querySelector("#cantidadesNecesarias").innerHTML = `Cantidades necesarias:`;
            document.querySelector("#carrito").innerHTML = ` Hemos agregado los artículos necesarios a tu carrito: <br><span>Puedes agregar o quitar los que necesites</span>`;
        });
    
    })
}

function alertComensales(){
    //Utilizo la librería Sweet Alert ya que un alert resulta conveniente en este proceso porque se necesita llamar la atención sal usuario sobre la necesidad de realizar una acción previa (seleccionar número de comensales) a la de confirmar la selección de ingredientes, y se le solicita que la cumpla.
    swal.fire({
        //icon:"info",
        title: "Te faltó decirnos para cuántos cocinarás",
        text: "Para poder calcular las cantidades de tu receta",
        confirmButtonText:"Ok",
        confirmButtonColor: "#1b8f72",
        backdrop: `
        rgba(31,95,79,0.37)
        url("images/comensales.png")
        top
        no-repeat
    `
    })
}

//Calcular cantidades de la receta con el método, dentro de cada card de ingrediente:
function mostrarCantidadesReceta (arrayReceta){
    arrayReceta.innerHTML = "";
    
    arrayReceta.forEach(ingred => {
    const cajaCantidadesReceta = document.createElement("div");
    cajaCantidadesReceta.className ="cajaCantidadesReceta";
    cantidadesReceta.appendChild(cajaCantidadesReceta);
    cajaCantidadesReceta.innerHTML= 
        `<div class="  card-body-receta">
            <img    src="${ingred.foto}"
                    class=" card-img-top img-fluid"
                    alt="${ingred.nombreIngred}"/>
            <h4>${ingred.nombreIngred.toUpperCase()}</h4>
            <h4>${ingred.cantidadTotalNetaIngred()}g</h4> 
        </div>`;
    })
    localStorage.setItem("listaCantidadesReceta", JSON.stringify(arrayReceta))
}

//Mostrar cards en la sección de productos carrito, cada card contiene datos del ingrediente, cantidad de unidades de compra necesarias, su precio unitario y el subtotal
function mostrarProductos(arrayProductos){
    arrayProductos = arrayProductos.filter(item => item.id !== 15);
    productosCarrito.innerHTML="";
    arrayProductos.forEach(producto =>{
        //Declaración de propiedad cantidad:
        producto.cantidad = producto.cantUnidadesCompra();
        //Creación de cards:
    const divCaja = document.createElement("div");
    divCaja.className ="caja";
    productosCarrito.appendChild(divCaja);
    divCaja.innerHTML = 
    `<div class=" card-carrito">
        <img    src="${producto.foto}"
                class=" card-img-top img-fluid"
                alt="${producto.nombreIngred}"/>
        <h4>${producto.nombreIngred.toUpperCase()}</h4>
        <h4>${producto.marca}</h4>
        <h4>Contenido: ${producto.GramosEnBolsa}g</h4>
        <h4>$ ${producto.precioXBolsa} c/u</h4>
        <h4 id="cant${producto.id}"> Cantidad:${producto.cantidad}</h4>   
        <button type="button" id="agregar${producto.id}" class="btn btn-outline-secondary"> + </button> <button type="button" id="eliminar${producto.id}" class="btn btn-outline-secondary"> - </button>
        <h3 id="subtotal${producto.id}"> Subtotal: $ ${producto.cantidad*producto.precioXBolsa}</h3>
    </div>`;

        //Agregar y eliminar unidades de las cards de los productos: Va cambiando la propiedad cantidad de los objetos.
        let btnAgregar = document.getElementById(`agregar${producto.id}`);
        btnAgregar.addEventListener('click',()=>{
            producto.cantidad += 1;
            document.getElementById(`cant${producto.id}`).innerText =`Cantidad: ${producto.cantidad}`;
            document.getElementById(`subtotal${producto.id}`).innerText =`Subtotal: $ ${producto.cantidad*producto.precioXBolsa}`;
            localStorage.setItem('pizza', JSON.stringify(pizzaCreada))
        })
        
        let btnEliminar = document.getElementById(`eliminar${producto.id}`);
        btnEliminar.addEventListener('click',()=>{
            if(producto.cantidad == 1){
                    // Paramos el envio del formulario submit
                    //producto.preventDefault();
                    //alert 
                    swal.fire({
                        title: `¿Quieres eliminar este producto ${producto.nombreIngred}?`,
                        icon: "warning",
                        text:  `${producto.nombreIngred} será quitado del carrito.`,
                        showCancelButton: true,
                        confirmButtonText: "Sí, quiero quitarlo",
                        confirmButtonColor: "#1b8f72",
                        cancelButtonText: "No, no quiero quitarlo",
                        cancelButtonColor: "#aa8d67cc"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            //borrar card del carrito:
                            btnEliminar.parentElement.remove()
                            //buscamos en el localstorage
                            pizzaCreada = pizzaCreada.filter(item => item.id != producto.id)
                            localStorage.setItem('pizza', JSON.stringify(pizzaCreada))
                        }
                    });
            } else{
                    producto.cantidad -= 1;
                    //Actualizao cantidad y subtotal en las cards:
                    document.getElementById(`cant${producto.id}`).innerText =`Cantidad: ${producto.cantidad}`;
                    document.getElementById(`subtotal${producto.id}`).innerText =`Subtotal: $ ${producto.cantidad*producto.precioXBolsa}`;
                    localStorage.setItem('pizza', JSON.stringify(pizzaCreada));       
            }
        })
    })       

    comprar();

}

//Confirmación de compra: muestra lista final de productos y precio total.
function comprar(){
    btnConfirmarCompra.style.display="flex"
    btnConfirmarCompra.addEventListener("click", () =>{
        
        mostrarCarritoFinal();
        pasosDeSuCompra();
    })
}

let carritoFinal;
function mostrarCarritoFinal() {
    contenedorCarrito.innerHTML = "";

    tabla.style.display = "table";
 

    pizzaCreada.splice(1,1);
    

    pizzaCreada.forEach(el => {
        const productoEnCarrito = document.createElement('tr');
        productoEnCarrito.className = 'productoEnCarrito';
        productoEnCarrito.innerHTML=`
        <td>${el.nombreIngred.toUpperCase()}</td>
        <td>${el.marca}</td>
        <td>${el.GramosEnBolsa}  g</td>
        <td>$${el.precioXBolsa} </td>
        <td>${el.cantidad}</td> `;                        
        contenedorCarrito.appendChild(productoEnCarrito);
    })
    localStorage.setItem("pizzaCreadaFinal", JSON.stringify(pizzaCreada));

    calcularTotal();
    document.querySelector("#btnRealizarPedido").style.display = "block";
}

////Calcular total:
const calcularTotal = () =>{
    // método reduce() para hacer una sumatoria, devuelve el resutado que lo guardamos en una variable total. El último parámetro, que está en 0, es desde dónde va a empezar a sumar
    let total = pizzaCreada.reduce((acc, elemento) => acc + (elemento.cantidad*elemento.precioXBolsa), 0);
    precioTotal.innerHTML =`<h2 class="col-5 " id="tituloPT" > Total del pedido: $ ${total} </h2> `;
    
    localStorage.setItem("total", JSON.stringify(total))
}

function recuperar() {
    let recuperarLS = JSON.parse(localStorage.getItem('pizza'))
    
    if(recuperarLS){
        recuperarLS.forEach(el=> {
            mostrarCantidadesReceta(recuperarLS);
            mostrarProductos(recuperarLS);
            pizzaCreada.push(el)
            mostrarCarritoFinal()
        })
    }
   
   
   }

////////Llamo funciones:
mostrarIngred();
quePasaCuandoCheck();
confirmacionSelecIngred();
recuperar();

