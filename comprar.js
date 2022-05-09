//DOM formulario:
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const dni = document.getElementById("dni");
const direccion = document.getElementById("direccion");
const piso = document.getElementById("piso");
const localidad = document.getElementById("localidad");
const telefono = document.getElementById("telefono");
const metodosDePago = document.querySelector("#metodosDePago");
const metodosDeEnvio = document.querySelector("#metodosDeEnvio");
const dirFacturacion = document.getElementById("dirFacturacion"); 
const tarjeta = document.getElementById("tarjeta");
const pagoFacil = document.getElementById("pagoFacil");
const rapipago = document.getElementById("rapipago");
const transferencia = document.getElementById("transferencia");  
const envioDomicilio = document.getElementById("envioDomicilio");
const retirar = document.getElementById("retirar");

//DOM Modal Tarjeta:
const numeroTarjeta = document.getElementById("numeroTarjeta");
const vencimientoTarjeta = document.getElementById("vencimientoTarjeta");
const codigoTarjeta = document.getElementById("codigoTarjeta");
const nombreTitular = document.getElementById("nombreTitular");
const apellidoTitular = document.getElementById("apellidoTitular");
const dniTitular = document.getElementById("dniTitular");

//DOM para el MODAL Resumen de compra:
const btnEnviarPedido = document.getElementById("btnEnviarPedido");
const contenedorResumen = document.getElementById("contenedorResumen");
const contSubtotal = document.getElementById("contSubtotal");
const contMetodoPago = document.getElementById("contMetodoPago");
const btnCompletarDatosTarjeta = document.getElementById("btnCompletarDatosTarjeta");
const contTipoEnvio = document.getElementById("contTipoEnvio");
const contCostoEnvio = document.getElementById("contCostoEnvio");
const contTotalPedido = document.getElementById("contTotalPedido");
const btnPagar = document.getElementById("btnPagar");


/////// Rellenar formulario:

let localidadElegida;
localidad.addEventListener("change", () =>{
    localidadElegida = parseInt(localidad.value);
})

// Seleccionar medio de pago:
let checkPago = metodosDePago.querySelectorAll('[type=radio]')
let metodoPagoElegido;
checkPago.forEach(valor =>{
    
    valor.addEventListener('click',()=>{
        switch (valor.value) {
            case 'tarjeta':
                localStorage.setItem(valor.value,valor.checked);
                formularioLS.push(valor.value);
                btnCompletarDatosTarjeta.style.display= "block";
                break;
            case 'transferencia':
                localStorage.setItem(valor.value,valor.checked);
                formularioLS.push(valor.value);
                break;
            case 'pagoFacil':
                localStorage.setItem(valor.value,valor.checked);
                formularioLS.push(valor.value);
                break;
            case 'rapipago':
                localStorage.setItem(valor.value,valor.checked);
                formularioLS.push(valor.value);
                break;
        
            default:
                console.log('no hubo seleccion');
                localStorage.setItem('nada', 'no hubo seleccion')
                break;
        }
        console.log(valor.checked, valor.value);
        metodoPagoElegido=valor.value;
        console.log(metodoPagoElegido)
    })
})

//Seleccionar medio de envío:
let checkEnvio = metodosDeEnvio.querySelectorAll('[type=radio]');
let metodoEnvioElegido;
checkEnvio.forEach(valor =>{
    
    valor.addEventListener('click',()=>{
        switch (valor.value) {
            case 'Retiro en local':
                localStorage.setItem(valor.value,valor.checked)
                formularioLS.push(valor.value);
                break;
            case 'Envío a domicilio':
                localStorage.setItem(valor.value,valor.checked)
                formularioLS.push(valor.value);
                break;
        
            default:
                console.log('no hubo seleccion');
                localStorage.setItem('nada', 'no hubo seleccion')
                break;
        }
        console.log(valor.checked, valor.value);
        metodoEnvioElegido = valor.value;
        console.log(metodoEnvioElegido)
    })
})

dirFacturacion.addEventListener("click", () =>{
    dirFacturacion.checked ?  formularioLS.push(dirFacturacion.value="true"):  formularioLS.push(dirFacturacion.value="false");
    console.log(formularioLS);
})

btnEnviarPedido.addEventListener("click", () =>{
    mostrarResumenCompra();
})


///////////////////////////   MODAL   Resumen de compra   //////////////////////////////////////////////////


//Calcular costo de envío:
let costoEnvio;
function calcularEnvio(){
    //if((metodoEnvioElegido ==="Retiro en local") && (localidadElegida!==6)){
        if ((metodoEnvioElegido ==="Retiro en local") && (localidadElegida!==6)){
        costoEnvio = 0;
    }else{
        costoEnvio = 450;
    }
    console.log(costoEnvio);
}   

//Rellena modal Resumen de compra:
function mostrarResumenCompra(){

    calcularEnvio();

    //RECUPERAR LOCAL STORAGE datos del otro html:
    const pizzaCreadaFinal = JSON.parse(localStorage.getItem('pizzaCreadaFinal'));
    let subtotal = JSON.parse(localStorage.getItem('total'));

    contenedorResumen.innerHTML="";
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
    
    contMetodoPago.innerHTML = `${metodoPagoElegido}`;

    contTipoEnvio.innerHTML=`${metodoEnvioElegido}`;

    contCostoEnvio.innerHTML=`$${costoEnvio}`;

    let totalCompra = subtotal + costoEnvio;
    contTotalPedido.innerHTML=`$${totalCompra}`;
}


btnPagar.addEventListener("click", () => {
    Toastify({
        avatar: "images/oryza-logo.png",
        text: "¡Muchas gracias por tu compra!",
        gravity: "bottom",
        position: "right",
        style:{
            background: "rgba(65, 44, 16, 0.897)"
        }
    }).showToast();   
})


///////////// Almacenar datos del formulario en localStorage:
const formularioLS = [];
//declarar datoUsuario
//declarar datoLS = "datoLS"
function guardarDatosLS(dato, datoUsuario, datoLS){
    dato.addEventListener("input", () => {
        datoUsuario = dato.value;
        localStorage.setItem(datoLS, JSON.stringify(datoUsuario));
        formularioLS.push(datoUsuario);
        console.log(formularioLS);
        localStorage.setItem('formulario', JSON.stringify(formularioLS));
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

let numeroTarjetaUsuario;
let numeroTarjetaLS = "numeroTarjetaLS";
guardarDatosLS(numeroTarjeta, numeroTarjetaUsuario, numeroTarjetaLS);

let codigoTarjetaUsuario;
let codigoTarjetaLS="codigoTarjetaLS";
guardarDatosLS(codigoTarjeta, codigoTarjetaUsuario, codigoTarjetaLS);

let vencimientoTarjetaUsuario;
let vencimientoTarjetaLS="vencimientoTarjetaLS";
guardarDatosLS(vencimientoTarjeta, vencimientoTarjetaUsuario, vencimientoTarjetaLS);

let nombreTitularUsuario;
let nombreTitularLS="nombreTitularLS";
guardarDatosLS(nombreTitular, nombreTitularUsuario, nombreTitularLS);

let apellidoTitularUsuario;
let apellidoTitularLS="apellidoTitularLS";
guardarDatosLS(apellidoTitular, apellidoTitularUsuario, apellidoTitularLS);

let dniTitularUsuario;
let dniTitularLS="dniTitularLS";
guardarDatosLS(dniTitular, dniTitularUsuario, dniTitularLS);



function recuperarFormulario() {
    let recuperarFormLS = JSON.parse(localStorage.getItem('formulario'))
    if(recuperarFormLS){
        recuperarFormLS.forEach(el=> {
            formularioLS.push(el);
            console.log(formularioLS);
        })
    }
}
recuperarFormulario();