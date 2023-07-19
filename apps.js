alert("Hola estimado, bievenido a AMG DYNASTY, aca podras comprar tu lujoso Mercedes, Porsche y Audi con dolares americanos.")

let salir

while (salir !== "Salir") {
    const ingresa = prompt("¿Qué desea comprar? Mercedes, Porsche o Audi?");


    if (ingresa === "Mercedes") {
        function Mercedes() {
            const dolares = parseInt(prompt("Ingrese la cantidad de Mercedes que desea comprar"));

            const resultado = parseFloat(dolares * 395000);

            console.log("El precio total es", resultado, "dólares americanos");

            const precio = prompt("Escriba Confirmar para confirmar la compra, y escriba Cancelar para cancelar la compra");

            if (precio === "Confirmar" || precio === "confirmar") {
                alert("Transacción finalizada, usted ha recibido " + dolares + " Mercedes en la cuenta de su banco. ¡Muchas gracias por usar nuestro servicio!");
                console.log(mercedes, "Mercedes");
                alert
            } else if (precio === "Cancelar" || precio === "cancelar") {
                alert("Se canceló la compra. ¡Que tenga buenas tardes!");
            }
        }

        Mercedes();
    }

    if (ingresa === "Porsche") {
        function Porsche() {
            const dolares = parseInt(prompt("Ingrese la cantidad de Mercedes que desea comprar"));

            const resultado = parseFloat(dolares * 395000);

            console.log("El precio total es", resultado, "dólares americanos");

            const precio = prompt("Escriba Confirmar para confirmar la compra, y escriba Cancelar para cancelar la compra");

            if (precio === "Confirmar" || precio === "confirmar") {
                alert("Transacción finalizada, usted ha recibido " + dolares + " Porsche en la cuenta de su banco. ¡Muchas gracias por usar nuestro servicio!");
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

            const resultado = parseFloat(dolares * 98000);

            console.log("El precio total es", resultado, "dólares americanos");

            const precio = prompt("Escriba Confirmar para confirmar la compra, y escriba Cancelar para cancelar la compra");

            if (precio === "Confirmar" || precio === "confirmar") {
                alert("Transacción finalizada, usted ha recibido " + dolares + " Audi en la cuenta de su banco. ¡Muchas gracias por usar nuestro servicio!");
                console.log(dolares, "Mercedes");
            } else if (precio === "Cancelar" || precio === "cancelar") {
                alert("Se canceló la compra. ¡Que tenga buenas tardes!");
            }
        }

        Audi();
    }


    salir = prompt("ingresa salir si quieres salir del programa, sino oprima cualquier tecla")



}