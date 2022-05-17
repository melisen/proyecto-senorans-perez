
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

///////////Modal tarjeta///////////////////////////////

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
