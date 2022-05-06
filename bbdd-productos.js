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


//Convertir objetos a JSON:
const aceiteDeOliva = JSON.stringify(aceiteOliva);
console.log(aceiteDeOliva);



/////Se concaneta la receta de masa de pizza con la cubierta creada por el usuario:
const pizzaCreada = [premezcla, agua, sal, aceiteOliva];
/*Qué guardo en local Storage: CLAVES:
cantidad de comensales/pizzas --> 'cantidadPizzas'
ingrediente checkeado --> "ingredElegidoID"
cada vez que se agrega o quita un objeto del array pizzaCreada (que funciona como carrito) --> "pizza"
la lista de cantidades de la receta para cocinar --> "listaCantidadesReceta"

*/


//App:
