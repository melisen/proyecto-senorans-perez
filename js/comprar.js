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
const tarjetaCredito = document.getElementById("tarjetaCredito");
const pagoFacil = document.getElementById("pagoFacil");
const rapipago = document.getElementById("rapipago");
const transferencia = document.getElementById("transferencia");  
const envioDomicilio = document.getElementById("envioDomicilio");
const retirar = document.getElementById("retirar");
const cardCodigoPago = document.getElementById("cardCodigoPago");
const cardTransferencia = document.getElementById("cardTransferencia");
const btnCompletarDatosTarjeta = document.getElementById("btnCompletarDatosTarjeta");

//Dom tarjeta animada:
const tarjeta = document.querySelector("#tarjeta");
const numeroTarjeta = document.querySelector("#tarjeta .numero");
const nombreTarjeta = document.querySelector("#tarjeta .nombre");
const apellidoTarjeta = document.querySelector("#tarjeta .apellido");
const logoMarca = document.querySelector("#logo-marca");
const firmaNombre = document.querySelector("#firmaNombre");
const firmaApellido = document.querySelector("#firmaApellido");
const ccv = document.querySelector("#ccv");
const mesExpiracion = document.querySelector("#mesExpiracion");
const yearExpiracion = document.querySelector("#yearExpiracion");

//DOM formulario tarjeta:
const formulario = document.querySelector("#formulario-tarjeta");
const inputNumero= document.querySelector("#numeroTarjeta");
const inputNombre = document.querySelector("#nombreTitular");
const inputApellido = document.getElementById("apellidoTitular");
const dniTitular = document.getElementById("dniTitular");
const inputCCV = document.querySelector("#codigoTarjeta");
const selectMes = document.querySelector("#selectMes");
const selectYear = document.querySelector("#selectYear");


//DOM para el MODAL Resumen de compra:
const btnConfirmarPedido = document.getElementById("btnConfirmarPedido");
const btnVerPedido = document.getElementById("btnVerPedido");
const contenedorResumen = document.getElementById("contenedorResumen");
const contSubtotal = document.getElementById("contSubtotal");
const contMetodoPago = document.getElementById("contMetodoPago");
const contTipoEnvio = document.getElementById("contTipoEnvio");
const contCostoEnvio = document.getElementById("contCostoEnvio");
const contTotalPedido = document.getElementById("contTotalPedido");
const btnPagar = document.getElementById("btnPagar");


/////// Rellenar formulario:
//Input nombre:
nombre.addEventListener("keyup", (e) =>{
    let valorNombre =  e.target.value;
    nombre.value = valorNombre
                    .toUpperCase() //mayúsculas
                    .replace(/[0-9]/g, "");  // no se pueda poner números
});

//Input apellido:
apellido.addEventListener("keyup", (e) =>{
    let valorApellido =  e.target.value;
    apellido.value = valorApellido
                    .toUpperCase() //mayúsculas
                    .replace(/[0-9]/g, "");  // no se pueda poner números
});

// Input DNI validación:
dni.addEventListener("keyup", (e) =>{
    let valorDNI =  e.target.value;
    dni.value = valorDNI
    .replace(/\s/g, "")  //Elimina espacios en blanco
    .replace(/\D/g, "")  //Elimina todas las letras      
});

//Input telefono validación:
telefono.addEventListener("keyup", (e) =>{
    let valorTel =  e.target.value;
    telefono.value = valorTel
    .replace(/\s/g, "")  //Elimina espacios en blanco
    .replace(/\D/g, "")  //Elimina todas las letras
});




let localidadElegida;
localidad.addEventListener("change", () =>{
    localidadElegida = parseInt(localidad.value);
});

// Seleccionar medio de pago:
let checkPago = metodosDePago.querySelectorAll('[type=radio]');
let metodoPagoElegido;
checkPago.forEach(valor =>{
    valor.addEventListener('click',()=>{
        switch (valor.value) {
            case 'Tarjeta':
                localStorage.setItem(valor.value,valor.checked);
                formularioLS.push(valor.value);
                btnCompletarDatosTarjeta.style.display= "block";
                cardCodigoPago.style.display="none";
                cardTransferencia.style.display="none";
                break;
            case 'Transferencia':
                localStorage.setItem(valor.value,valor.checked);
                formularioLS.push(valor.value);
                btnCompletarDatosTarjeta.style.display= "none";
                cardCodigoPago.style.display="none";
                cardTransferencia.style.display="block";
                break;
            case 'Pago Fácil':
                localStorage.setItem(valor.value,valor.checked);
                formularioLS.push(valor.value);
                btnCompletarDatosTarjeta.style.display= "none";
                cardCodigoPago.style.display="block";
                cardTransferencia.style.display="none";
                break;
            case 'Rapipago':
                localStorage.setItem(valor.value,valor.checked);
                formularioLS.push(valor.value);
                btnCompletarDatosTarjeta.style.display= "none";
                cardCodigoPago.style.display="block";
                cardTransferencia.style.display="none";
                break;
            default:
                console.log('no hubo seleccion');
                localStorage.setItem('nada', 'no hubo seleccion')
                break;
        }
        console.log(valor.checked, valor.value);
        metodoPagoElegido=valor.value;
        console.log(metodoPagoElegido);
    })
});

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
});




///////////MOdal tarjeta///////////////////////////////

//Rellenar options select mes:
for(let i = 1; i<13; i++){
    let opcion = document.createElement("option");
    opcion.value = i;
    opcion.innerText=i;
    selectMes.appendChild(opcion);
}

//Rellenar options select year:
const yearActual = new Date().getFullYear();
for(let i= yearActual; i<= yearActual + 8; i++){
    let opcion = document.createElement("option");
    opcion.value = i;
    opcion.innerText=i;
    selectYear.appendChild(opcion);
}

//Rellenar input número tarjeta:
if(inputNumero.value ==""){
    numeroTarjeta.textContent= "#### #### #### ####"
    logoMarca.innerHTML="";
}

inputNumero.addEventListener("keyup", (e) => {
    let valorInput = e.target.value;
    inputNumero.value = valorInput
                        //Guardo el valor del input y lo reemplazo por una expresion regular
                        .replace(/\s/g, "") 
                        //Elimina espacios en blanco
                        .replace(/\D/g, "") 
                        //Elimina todas las letras
                        .replace(/([0-9]{4})/g, "$1 ")
                        //Agrega un espacio cada 4 números
                        .trim();
                        //Quita el espacio final

    numeroTarjeta.textContent = valorInput;
    //Qué aparece si el usuario borra los números:
    if(valorInput ==""){
        numeroTarjeta.textContent= "#### #### #### ####"
        logoMarca.innerHTML="";
    }

    //Incluir logo visa o mastercard
    if(valorInput[0] ==4){
        logoMarca.innerHTML=""; //Para que no se repita el logo cada vez que se escribe 4
        const imagen = document.createElement("img");
        imagen.src="../images/tarjeta/logo-visa.png";
        logoMarca.appendChild(imagen);
    } else if (valorInput[0] ==5){
        logoMarca.innerHTML=""; //Para que no se repita el logo cada vez que se escribe 5
        const imagen = document.createElement("img");
        imagen.src="../images/tarjeta/logo-mastercard.png";
        logoMarca.appendChild(imagen);
    }

    mostrarFrente();
});

//Rotar la tarjeta para ver el frente:
function mostrarFrente(){
    if(tarjeta.classList.contains("active")){
        tarjeta.classList.remove("active");
    }
}


/*** Rellenar input nombre de la tarjeta  y la firma del dorso*/
if(inputNombre.value ==""){
    nombreTarjeta.textContent= "Nombre Titular";
    firmaNombre.textContent= "Nombre Titular";
}

inputNombre.addEventListener("keyup", (e) =>{
let valorInput = e.target.value; //guardo el valor del input en una variable

inputNombre.value = valorInput.replace(/[0-9]/g, ""); //No se puedan poner números

nombreTarjeta.textContent=valorInput;
firmaNombre.textContent = valorInput;

if(valorInput ==""){
    nombreTarjeta.textContent= "Nombre Titular";
    firmaNombre.textContent= "Nombre Titular";
}

mostrarFrente();

});

/*** Rellenar input apellido de la tarjeta  y la firma del dorso*/

inputApellido.addEventListener("keyup", (e) =>{
let valorInput = e.target.value; //guardo el valor del input en una variable

inputApellido.value = valorInput.replace(/[0-9]/g, ""); //No se puedan poner números
""
apellidoTarjeta.innerHTML=`  ${valorInput}`;
firmaApellido.innerHTML = `  ${valorInput}`;

mostrarFrente();

});

// Select mes
selectMes.addEventListener("change", (e) =>{
    mesExpiracion.textContent= e.target.value;
    mostrarFrente();
})

//Select year
selectYear.addEventListener("change", (e) =>{
    yearExpiracion.textContent= e.target.value.slice(2);
    mostrarFrente();
});

//Código de seguridad CCV: dar vuelta tarjeta:
inputCCV.addEventListener("keyup", () =>{
    if(!tarjeta.classList.contains("active")){
        tarjeta.classList.toggle("active");
    }

    //Validación del código de seguridad: sin espacio, caracteres máximos, etc
    inputCCV.value= inputCCV.value
                .replace(/\s/g, "") //Elimina espacios en blanco
                .replace(/\D/g, ""); //Elimina todas las letras
                
    //Rellenar el CCV en la tarjeta:
    ccv.textContent= inputCCV.value;                                      

});

// Input DNI Titular tarjeta:
dniTitular.addEventListener("keyup", (e) =>{
    let valorDNITit =  e.target.value;
    dniTitular.value = valorDNITit
    .replace(/\s/g, "")  //Elimina espacios en blanco
    .replace(/\D/g, "")  //Elimina todas las letras
                    
});

//////////// Fin modal tarjeta////////////////////////




dirFacturacion.addEventListener("click", () =>{
    dirFacturacion.checked ?  formularioLS.push(dirFacturacion.value="true"):  formularioLS.push(dirFacturacion.value="false");
    console.log(formularioLS);
})

function rellenarTodosLosCampos(){
    btnConfirmarPedido.addEventListener("click", () => {
        if( (nombre.value=="" || apellido.value=="" || telefono.value=="" || dni.value=="" || direccion.value=="" || email.value=="" || localidad.value=="null" || metodoEnvioElegido==null || metodoPagoElegido==null) 
        || ( (metodoPagoElegido=="Tarjeta") && (selectMes.value=="" || selectYear.value=="" || inputCCV.value=="" || inputNombre.value=="" || inputApellido.value=="" || dniTitular.value=="")) ){
            swal.fire({
                title: `Falta completar campos`,
                imageUrl:("../images/oryza-logo-chico.png"),
                text:  `Es necesario completar todos los campos para confirmar el pedido`,
                cancelButtonText: "Ok",
                cancelButtonColor: "#0B8585"
            })
        } else{
        btnVerPedido.style.display="block";
        }
    })
    
}
rellenarTodosLosCampos();
    
btnVerPedido.addEventListener("click", () =>{
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
        <td>${el.GramosEnBolsa} g</td>
        <td>$${el.precioXBolsa}</td>
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
        avatar: "../images/oryza-logo.png",
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
guardarDatosLS(metodoPagoElegido, metodoPagoUsuario, metodoPagoLS);

let metodoEnvioUsuario;
let metodoEnvioLS="metodoEnvioLS";
guardarDatosLS(metodoEnvioElegido, metodoEnvioUsuario, metodoEnvioLS);

/////En caso de elegir tarjeta:

let numeroTarjetaUsuario;
let numeroTarjetaLS = "numeroTarjetaLS";
guardarDatosLS(numeroTarjeta, numeroTarjetaUsuario, numeroTarjetaLS);

let codigoTarjetaUsuario;
let codigoTarjetaLS="codigoTarjetaLS";
guardarDatosLS(inputCCV, codigoTarjetaUsuario, codigoTarjetaLS);

let vencimientoTarjetaMesUsuario;
let vencimientoTarjetaMesLS="vencimientoTarjetaLS";
guardarDatosLS(selectMes, vencimientoTarjetaMesUsuario, vencimientoTarjetaMesLS);

let vencimientoTarjetaYearUsuario;
let vencimientoTarjetaYearLS="vencimientoTarjetaLS";
guardarDatosLS(selectYear, vencimientoTarjetaYearUsuario, vencimientoTarjetaYearLS);

let nombreTitularUsuario;
let nombreTitularLS="nombreTitularLS";
guardarDatosLS(inputNombre, nombreTitularUsuario, nombreTitularLS);

let apellidoTitularUsuario;
let apellidoTitularLS="apellidoTitularLS";
guardarDatosLS(inputApellido, apellidoTitularUsuario, apellidoTitularLS);

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