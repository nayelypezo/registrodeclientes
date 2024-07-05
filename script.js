document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('clientForm');
    const messages = document.getElementById('messages');
    const clientList = document.getElementById('clientList');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const cedula = document.getElementById('cedula').value;
        const apellidos = document.getElementById('apellidos').value;
        const nombres = document.getElementById('nombres').value;
        const direccion = document.getElementById('direccion').value;
        const telefono = document.getElementById('telefono').value;
        const email = document.getElementById('email').value;

        messages.innerHTML = '';

        // Validaciones
        const cedulaRegex = /^\d{10}$/;
        const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
        const telefonoRegex = /^\d{7,10}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!cedulaRegex.test(cedula)) {
            messages.innerHTML += 'La cédula debe contener 10 dígitos.<br>';
            return;
        }
        if (!nombreRegex.test(apellidos)) {
            messages.innerHTML += 'Los apellidos solo deben contener letras.<br>';
            return;
        }
        if (!nombreRegex.test(nombres)) {
            messages.innerHTML += 'Los nombres solo deben contener letras.<br>';
            return;
        }
        if (!telefonoRegex.test(telefono)) {
            messages.innerHTML += 'El teléfono debe contener entre 7 y 10 dígitos.<br>';
            return;
        }
        if (!emailRegex.test(email)) {
            messages.innerHTML += 'El correo electrónico no es válido.<br>';
            return;
        }

        // Almacenar datos en localStorage
        const clientData = {
            cedula,
            apellidos,
            nombres,
            direccion,
            telefono,
            email
        };

        let clients = JSON.parse(localStorage.getItem('clients')) || [];
        clients.push(clientData);
        localStorage.setItem('clients', JSON.stringify(clients));

        messages.innerHTML = 'Datos guardados exitosamente.';
        form.reset();
        displayClients();
    });

    function displayClients() {
        clientList.innerHTML = '';
        let clients = JSON.parse(localStorage.getItem('clients')) || [];
        clients.forEach((client, index) => {
            let listItem = document.createElement('li');
            listItem.textContent = `Cédula: ${client.cedula}, Apellidos: ${client.apellidos}, Nombres: ${client.nombres}, Dirección: ${client.direccion}, Teléfono: ${client.telefono}, Correo Electrónico: ${client.email}`;
            clientList.appendChild(listItem);
        });
    }

    // Mostrar los clientes al cargar la página
    displayClients();
});
