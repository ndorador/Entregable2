

/*Este codigo es para anotar la lista del supermercado, para no olvidar el mandado.
primer bucle for, es para solicitar los productos a comprar. se solicita solo 4 productos, y 
luego otro bucle for para mostrar los nombres de la lista ingresada en la consola.*/ 

let miLista = [];

for (let i = 1; i <= 4; i++) {
     let entrada = prompt("Ingresa nombre del producto a comprar " + i);
  
    if (entrada === null) {
        break;
    }

    miLista.push(entrada);
}

console.log("Listas de lo que tengo que comprar :");
for (let i = 0; i < miLista.length; i++) {
    console.log(miLista[i]);
}