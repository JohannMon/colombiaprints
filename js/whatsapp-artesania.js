document.getElementById("formulario-compra").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe por defecto

    // Obtener los valores seleccionados por el usuario
    var tituloPagina = document.getElementById("titulo-pagina").textContent;
    var cantidadSeleccionada = document.getElementById("input-cantidad").value;

    // Crear el mensaje con los valores seleccionados
    var mensaje = "¡Hola! Estoy interesado/a en la siguiente artesania:" + "\n";
    mensaje += "'"  + tituloPagina + "'\n";
    mensaje += "Cantidad: " + cantidadSeleccionada;

    // Reemplaza el número de WhatsApp con el número real al que deseas enviar el mensaje
    var numeroWhatsApp = "3194364518";

    // Codifica el mensaje para incluirlo en la URL de WhatsApp
    var mensajeCodificado = encodeURIComponent(mensaje);

    // Crea la URL de WhatsApp con el número y mensaje
    var urlWhatsApp = "https://wa.me/" + numeroWhatsApp + "?text=" + mensajeCodificado;

    // Abre una nueva ventana o pestaña con la URL de WhatsApp
    window.open(urlWhatsApp, "_blank");
});
