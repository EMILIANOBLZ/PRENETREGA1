alert("Hola estimado, bievenido a AMG DYNASTY, aca podras comprar tu lujoso Mercedes, Porsche, Audi o Bmw con dolares americanos.")

let salir

while (salir !== "Salir") {
    const ingresa = prompt("¿Qué vehiculo desea poseer? Mercedes, Porsche, Audi o Bmw?");


    if (ingresa === "Mercedes") {
        function Mercedes() {
            const dolares = parseInt(prompt("Ingrese la cantidad de Mercedes que desea comprar"));

            const resultado = parseFloat(dolares * 395000);

            console.log("El precio total es", resultado, "dólares americanos");

            const precio = prompt("Escriba Confirmar para confirmar la compra, y escriba Cancelar para cancelar la compra");

            if (precio === "Confirmar" || precio === "confirmar") {
                alert("Transacción finalizada, usted ha recibido " + dolares + "Mercedes a su propiedad. ¡Muchas gracias por usar nuestro servicio!");
                console.log(dolares, "Mercedes");
            } else if (precio === "Cancelar" || precio === "cancelar") {
                alert("Se canceló la compra. ¡Que tenga buenas tardes!");
            }
        }

        Mercedes();
    }

    if (ingresa === "Porsche") {
        function Porsche() {
            const dolares = parseInt(prompt("Ingrese la cantidad de Porsche que desea comprar"));

            const resultado = parseFloat(dolares * 1220000);

            console.log("El precio total es", resultado, "dólares americanos");

            const precio = prompt("Escriba Confirmar para confirmar la compra, y escriba Cancelar para cancelar la compra");

            if (precio === "Confirmar" || precio === "confirmar") {
                alert("Transacción finalizada, usted ha recibido " + dolares + " Porsche a su propiedad. ¡Muchas gracias por usar nuestro servicio!");
                console.log(dolares, "Porsche");
            } else if (precio === "Cancelar" || precio === "cancelar") {
                alert("Se canceló la compra. ¡Que tenga buenas tardes!");
            }
        }

        Porsche();
    }

    if (ingresa === "Audi") {
        function Audi() {
            const dolares = parseInt(prompt("Ingrese la cantidad de Audi que desea comprar"));

            const resultado = parseFloat(dolares * 795000);

            console.log("El precio total es", resultado, "dólares americanos");

            const precio = prompt("Escriba Confirmar para confirmar la compra, y escriba Cancelar para cancelar la compra");

            if (precio === "Confirmar" || precio === "confirmar") {
                alert("Transacción finalizada, usted ha recibido " + dolares + " Audi a de su propiedad. ¡Muchas gracias por usar nuestro servicio!");
                console.log(dolares, "Audi");
            } else if (precio === "Cancelar" || precio === "cancelar") {
                alert("Se canceló la compra. ¡Que tenga buenas tardes!");
            }
        }

        Audi();
    }

    if (ingresa === "Bmw") {
        function Bmw() {
            const dolares = parseInt(prompt("Ingrese la cantidad de Bmw que desea comprar"));

            const resultado = parseFloat(dolares * 135000);

            console.log("El precio total es", resultado, "dólares americanos");

            const precio = prompt("Escriba Confirmar para confirmar la compra, y escriba Cancelar para cancelar la compra");

            if (precio === "Confirmar" || precio === "confirmar") {
                alert("Transacción finalizada, usted ha recibido " + dolares + " Bmw a su propiedad. ¡Muchas gracias por usar nuestro servicio!");
                console.log(dolares, "Bmw");
            } else if (precio === "Cancelar" || precio === "cancelar") {
                alert("Se canceló la compra. ¡Que tenga buenas tardes!");
            }
        }

        Bmw();
    }


    salir = prompt("ingresa salir si quieres salir de esta red, sino oprima cualquier tecla")



}
