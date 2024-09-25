// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Selección de elementos del DOM
    const form = document.getElementById('passwordForm');
    const mensaje = document.getElementById('txt-password');
    const parte3 = document.querySelector('.parte-3');
    const digitosIds = ['digito-0', 'digito-1', 'digito-2'];

    // Objetivo de passwords válidos y sus mensajes correspondientes
    const validPasswords = {
        911: 'Password 1 correcto',
        714: 'Password 2 correcto'
    };

    /**
     * Función para validar el password ingresado
     * @param {Event} e - Evento de envío del formulario
     */
    const validarPassword = (e) => {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario

        // Obtener los valores seleccionados en los selectores
        const digitos = digitosIds.map(id => document.getElementById(id).value);

        // Verificar que todos los dígitos estén seleccionados
        if (digitos.includes('')) {
            mostrarMensaje('Por favor, selecciona todos los dígitos del password.', 'red');
            aplicarAnimacion(parte3);
            return;
        }

        // Combinar los dígitos para formar el password
        const password = parseInt(digitos.join(''), 10);

        // Verificar si el password es válido
        if (validPasswords.hasOwnProperty(password)) {
            mostrarMensaje(validPasswords[password], 'green');
        } else {
            mostrarMensaje('Password Incorrecto!', 'red');
            aplicarAnimacion(parte3);
        }
    };

    /**
     * Función para mostrar mensajes al usuario
     * @param {string} texto - Texto del mensaje
     * @param {string} color - Color del texto
     */
    const mostrarMensaje = (texto, color) => {
        mensaje.textContent = texto;
        mensaje.style.color = color;
    };

    /**
     * Función para aplicar la animación de sacudida
     * @param {HTMLElement} elemento - Elemento al que se le aplicará la animación
     */
    const aplicarAnimacion = (elemento) => {
        elemento.classList.add('shake');
        // Remover la clase de animación después de que termine
        setTimeout(() => elemento.classList.remove('shake'), 800);
    };

    /**
     * Función para validar individualmente cada selector al cambiar
     * @param {HTMLElement} select - Elemento select a validar
     */
    const validarSelect = (select) => {
        if (select.value === '') {
            select.style.border = '2px solid red';
            aplicarAnimacion(select);
            select.placeholder = 'Número no válido';
        } else {
            select.style.border = '2px solid #555555';
            select.placeholder = '';
        }
    };

    // Añadir evento de envío al formulario
    form.addEventListener('submit', validarPassword);

    // Añadir eventos de cambio a cada selector para validación en tiempo real
    digitosIds.forEach(id => {
        const select = document.getElementById(id);
        select.addEventListener('change', () => validarSelect(select));
    });
});
