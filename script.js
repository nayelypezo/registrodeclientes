document.getElementById("clientForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    // Aquí podrías realizar validaciones adicionales si lo deseas

    var message = "Cliente registrado: Nombre - " + name + ", Email - " + email + ", Teléfono - " + phone;
    document.getElementById("message").innerText = message;

    // Aquí podrías enviar los datos a un servidor utilizando AJAX o fetch()

    // Limpiar el formulario después de enviar los datos
    document.getElementById("clientForm").reset();
});
