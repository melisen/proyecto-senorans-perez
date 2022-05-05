//DOM:
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const dni = document.getElementById("dni");
const direccion = document.getElementById("direccion");
const piso = document.getElementById("piso");
const localidad = document.getElementById("localidad");
const telefono = document.getElementById("telefono");
const metodoPago = document.querySelector(".seleccionMetodosPago:checked");
const metodoEnvio = document.querySelector(".seleccionMetodosEnvio:checked");
const dirFacturacion = document.getElementById("dirFacturacion"); 
/*
const tarjeta = document.getElementById("tarjeta");
const pagoFacil = document.getElementById("pagoFacil");
const rapipago = document.getElementById("rapipago");
const transferencia = document.getElementById("transferencia");  
const envioDomicilio = document.getElementById("envioDomicilio");
const retirar = document.getElementById("retirar");*/




//////////prueba hacer una función para ir guardando todos los datos:

//declarar datoUsuario
//declarar datoLS = "datoLS"
function guardarDatosLS(dato, datoUsuario, datoLS){
    dato.addEventListener("input", () => {
        datoUsuario = dato.value;
        console.log(datoUsuario)
        localStorage.setItem(datoLS, JSON.stringify(datoUsuario));
    });
}
////////Guardamos los inputs:
let nombreUsuario;
let nombreLS="nombreLS";
guardarDatosLS(nombre, nombreUsuario, nombreLS);

let apellidoUsuario;
let apellidoLS="apellidoLS";
guardarDatosLS(apellido, apellidoUsuario, apellidoLS);

let emailUsuario;
let emailLS = "emailLS";
guardarDatosLS(email, emailUsuario, emailLS);

let dniUsuario;
let dniLS="dniLS";
guardarDatosLS(dni, dniUsuario, dniLS);

let direccionUsuario;
let direccionLS="direccionLS"
guardarDatosLS(direccion, direccionUsuario, direccionLS);

let pisoUsuario;
let pisoLS="pisoLS";
guardarDatosLS(piso, pisoUsuario, pisoLS);

let localidadUsuario;
let localidadLS="localidadLS";
guardarDatosLS(localidad, localidadUsuario, localidadLS);

let telefonoUsuario;
let telefonoLS="telefonoLS";
guardarDatosLS(telefono, telefonoUsuario, telefonoLS);

let metodoPagoUsuario;
let metodoPagoLS="metodoPagoLS";
guardarDatosLS(metodoPago, metodoPagoUsuario, metodoPagoLS);

let metodoEnvioUsuario;
let metodoEnvioLS="metodoEnvioLS";
guardarDatosLS(metodoEnvio, metodoEnvioUsuario, metodoEnvioLS);

let dirFacturacionUsuario;
let dirFacturacionLS="dirFacturacionLS";
guardarDatosLS(dirFacturacion, dirFacturacionUsuario, dirFacturacionLS);



///////////////////////////   MODAL   //////////////////////////////////////////////////

//DOM:

const contenedorResumen = document.getElementById("contenedorResumen");
const contSubtotal = document.getElementById("contSubtotal");
const contMetodoPago = document.getElementById("contMetodoPago");
const contTipoEnvio = document.getElementById("contTipoEnvio");
const contCostoEnvio = document.getElementById("contCostoEnvio");
const contTotalPedido = document.getElementById("contTotalPedido");



let costoEnvio;
let calcularEnvio = () =>{
    if ((metodoEnvio.value !== "Retiro en local") || (localidad.value=="6")  ){
       costoEnvio = 450;
    }else{
        costoEnvio = 0;
    }
    console.log(costoEnvio)
}

let totalCompra;




function mostrarResumenCompra(){
    //RECUPERAR LOCAL STORAGE:
const pizzaCreadaFinal = JSON.parse(localStorage.getItem('pizzaCreadaFinal'));
let subtotal = JSON.parse(localStorage.getItem('total'));
    
    pizzaCreadaFinal.forEach(el => {
        const productoEnResumen = document.createElement('tr');
        productoEnResumen.className = 'productoEnResumen';
        productoEnResumen.innerHTML=`
        <th scope="row">${el.nombreIngred.toUpperCase()}</td>
        <td>${el.marca}</td>
        <td>${el.GramosEnBolsa}  g</td>
        <td>$${el.precioXBolsa} </td>
        <td>${el.cantidad}</td> `;                        
        contenedorResumen.appendChild(productoEnResumen);      
    })

    contSubtotal.innerHTML=`$${subtotal}`;
    
    //contMetodoPago.innerHTML = ` ${metodoPago.value}`;

    //contTipoEnvio.innerHTML=`${metodoEnvio.value}`;

    //contCostoEnvio.innerHTML=`$${costoEnvio}`;

    //totalCompra = subtotal + costoEnvio;
   // contTotalPedido.innerHTML=`$${totalCompra}`;
}
        



calcularEnvio();
mostrarResumenCompra();
/*
contSubtotal.innerHTML=`
<th scope="row">Subtotal: </td>
<td>$ ${subtotal}</td>`;
contenedorResumen.appendChild(contSubtotal);*/