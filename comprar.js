//DOM:

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

/////////Prueba de guardar un solo input:
const nombre = document.getElementById("nombre");
let nombreUsuario;
function guardarDatos(){
nombre.addEventListener("input", () => { nombreUsuario = nombre.value;  });
console.log(nombreUsuario)
localStorage.setItem("nombreLS", JSON.stringify(nombreUsuario));
}
guardarDatos();

//////////////////Ejemplo de clase:
function guardarLocal(clave, valor){
    localStorage.setItem(clave, valor);
}
arrayDatos = [apellido, email, dni, direccion, piso, localidad, telefono, metodoPago, metodoEnvio, dirFacturacion]
function guardarTodosLosDatos(){
    for (const dato of arrayDatos){
        guardarLocal(dato, JSON.stringify(dato));
    }
}
//////////////////////
/*
localStorage.setItem("apellidoLS", JSON.stringify(apellidoUsuario));
localStorage.setItem("emailLS", JSON.stringify(emailUsuario));
localStorage.setItem("dniLS", JSON.stringify(dnUsuario));
localStorage.setItem("direccionLS", JSON.stringify(direccionUsuario));
localStorage.setItem("pisoLS", JSON.stringify(pisoUsuario));
localStorage.setItem("localidadLS", JSON.stringify(localidadUsuario));
localStorage.setItem("telefonoLS", JSON.stringify(telefonoUsuario));
localStorage.setItem("tarjetaLS", JSON.stringify(tarjetaUsuario));
localStorage.setItem("pagoFacilLS", JSON.stringify(pagoFacilUsuario));
localStorage.setItem("rapipagoLS", JSON.stringify(rapipagoUsuario));
localStorage.setItem("transferenciaLS", JSON.stringify(transferenciaUsuario));
localStorage.setItem("envioDomicilioLS", JSON.stringify(envioDomicilioUsuario));
localStorage.setItem("retirarLS", JSON.stringify(retirarUsuario));
localStorage.setItem("dirFacturacionLS", JSON.stringify(dirFacturacionUsuario));
*/

///////////////////////////MODAL//////////////////////////////////////////////////



//DOM:
const contenedorResumen = document.getElementById("contenedorResumen");
const contSubtotal = document.getElementById("contSubtotal");
const contTipoEnvio = document.getElementById("contTipoEnvio");
const contCostoEnvio = document.getElementById("contCostoEnvio");
const contTotalPedido = document.getElementById("contTotalPedido");



let costoEnvio;
let calcularEnvio = () =>{
    if (metodoEnvio = domicilio){
        costoEnvio = 0;
    }else{
        costoEnvio = 450;
    }
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

        //Rellenar el modal con lo de abajo , crear los elementos en este función en vez de solo rellenarlos
    })

    contSubtotal.innerText=`Subtotal: $${subtotal}`

    contMetodoPago.innerText = `Método de pago: ${metodoPago.value}`

    contTipoEnvio.innerText=`Tipo de Envío: ${metodoEnvio.value}`

    calcularEnvio();
    contCostoEnvio.innerText=`Costo de envío: $${costoEnvio}`

    totalCompra = subtotal + costoEnvio;
    contTotalPedido.innerText=`TOTAL DEL PEDIDO: $${totalCompra}`
    
}

mostrarResumenCompra();

console.log(nombre)