document.addEventListener("click", (e) => {
    // Parte 1, hacer click en el logo
    if (e.target.id == "sticker-logo") {
        const borderImg = document.getElementById("sticker-logo");
        //alert ('Borde Rojo al click')
        // alternar hacer click poner el borde 

        if (borderImg.style.border == "2px solid red") {
            borderImg.style.border = "none"; //quito el borde
        } else {
            borderImg.style.border = "2px solid red"; // agrego el borde
        }
    }

    // Parte 2 - suma de sticker seleccionados
    if (e.target.id == "btn-verificar") {
        const num1 = document.querySelector("#card-1");
        const num2 = document.querySelector("#card-2");
        const num3 = document.querySelector("#card-3");

        // mensaje segun total de sticker seleccionados
        if (validarInput(num1) && validarInput(num2) && validarInput(num3)) {
            const suma = Number(num1.value) + Number(num2.value) + Number(num3.value);

            if (suma > 10) {
                document.querySelector("#txt-verificar").innerHTML = "Llevas demasiados stickers!";
            } else {
                document.querySelector("#txt-verificar").innerHTML = `Llevas ${suma} stickers.`;
            }
            // limpiar mensaje
        } else {
            document.querySelector("#txt-verificar").innerHTML = "";
        }
    }

    // Parte 3 verificación password
    if (e.target.id == "btn-ingresar") {
        const digito0 = document.getElementById("digito-0").value;
        const digito1 = document.getElementById("digito-1").value;
        const digito2 = document.getElementById("digito-2").value;
        const password = Number(digito0 + digito1 + digito2); // concatena 

        const mensaje = document.getElementById("txt-password"); // comparar contraseña ingresada con valor correcto
        password === 911
            ? (mensaje.innerHTML = "Password 1 correcto") // mensaje correcto
            : password === 714
            ? (mensaje.innerHTML = "Password 2 correcto")
            : (mensaje.innerHTML = "Password Incorrecto!"); // mensaje incorrecto
    }
});
// validar los input numéricos
function validarInput(inputNum) {
    let valor = parseFloat(inputNum.value);

     // verificar que el valor sea un entero y mayor o igual a 0   
    if (Number.isInteger(valor) && valor >= 0) {
        inputNum.style.border = "1px solid #333"; // borde válido
        inputNum.style.animation = ""; // reinicio animación
        inputNum.placeholder = ""; // limpiar placholder
        return true; // validación exitosa
    } else {
        inputNum.style.border = "1px solid red";
        inputNum.style.animation = "shake-horizontal 0.8s ease-out";
        inputNum.value = ""; // limpiar el valor del input
        inputNum.placeholder = "Numero no valido"; // mensaje del placeholder
        return false; 
    }
}
