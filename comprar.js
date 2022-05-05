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
//DOM para el MODAL:
const btnEnviarPedido = document.getElementById("btnEnviarPedido");
const contenedorResumen = document.getElementById("contenedorResumen");
const contSubtotal = document.getElementById("contSubtotal");
const contMetodoPago = document.getElementById("contMetodoPago");
const contTipoEnvio = document.getElementById("contTipoEnvio");
const contCostoEnvio = document.getElementById("contCostoEnvio");
const contTotalPedido = document.getElementById("contTotalPedido");


let checkPago = metodosDePago.querySelectorAll('[type=radio]')
let metodoPagoElegido;
checkPago.forEach(valor =>{
    
    valor.addEventListener('click',()=>{
        switch (valor.value) {
            case 'tarjeta':
                localStorage.setItem(valor.value,valor.checked)
                break;
            case 'transferencia':
                localStorage.setItem(valor.value,valor.checked)
                break;
            case 'pagoFacil':
                localStorage.setItem(valor.value,valor.checked)
                break;
            case 'rapipago':
                localStorage.setItem(valor.value,valor.checked)
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

let checkEnvio = metodosDeEnvio.querySelectorAll('[type=radio]');
let metodoEnvioElegido;
checkEnvio.forEach(valor =>{
    
    valor.addEventListener('click',()=>{
        switch (valor.value) {
            case 'Retiro en local':
                localStorage.setItem(valor.value,valor.checked)
                break;
            case 'Envío a domicilio':
                localStorage.setItem(valor.value,valor.checked)
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




///////////////////////////   MODAL   Resumen de compra   //////////////////////////////////////////////////
let costoEnvio;
let localidadElegida;
//RECUPERAR LOCAL STORAGE datos del otro html:
const pizzaCreadaFinal = JSON.parse(localStorage.getItem('pizzaCreadaFinal'));
let subtotal = JSON.parse(localStorage.getItem('total'));



//Calcular costo de envío:

localidad.addEventListener("change", () =>{
    localidadElegida = parseInt(localidad.value);
})

function calcularEnvio(){
    if((metodoEnvioElegido ==="Retiro en local") && (localidadElegida!==6)){
        costoEnvio = 0;
    }else{
        costoEnvio = 450;
    }
    console.log(costoEnvio);
}   

function mostrarResumenCompra(){

    calcularEnvio();

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
        

btnEnviarPedido.addEventListener("click", () =>{
    mostrarResumenCompra();
})



//////////////////////////////////////////////// Almacenar datos del formulario en localStorage:
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

