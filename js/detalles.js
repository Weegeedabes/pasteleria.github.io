function Detalles1() {
    Swal.fire({
        title: "Detalles",
        html: '<p>Precio: 345</p> <p>Sabor: fresa</p> <p>Calificaion: 2 estrellas</p> <a href="../paginas/formulario.html">Comprar!</a>',
        icon: "info",
        showConfirmButton: false,
        timer: 10000,
        timerProgressBar: true
    });
}

function Detalles2() {
    Swal.fire({
        title: "Detalles",
        html: '<p>Precio: 585</p> <p>Sabor: fresa</p> <p>Calificaion: 5 estrellas</p> <a href="../paginas/formulario.html">Comprar!</a>',
        icon: "info",
        showConfirmButton: false,
        timer: 10000,
        timerProgressBar: true
    });
}

function Detalles3() {
    Swal.fire({
        title: "Detalles",
        html: '<p>Precio: 125</p> <p>Sabor: fresa</p> <p>Calificaion: 3 estrellas</p> <a href="../paginas/formulario.html">Comprar!</a>',
        icon: "info",
        showConfirmButton: false,
        timer: 10000,
        timerProgressBar: true
    });
}

function Detalles4() {
    Swal.fire({
        title: "Detalles",
        html: '<p>Precio: 925</p> <p>Sabor: chocolate</p> <p>Calificaion: 5 estrellas</p> <a href="../paginas/formulario.html">Comprar!</a>',
        icon: "info",
        showConfirmButton: false,
        timer: 10000,
        timerProgressBar: true
    });
}

function Detalles5() {
    Swal.fire({
        title: "Detalles",
        html: '<p>Precio: 525</p> <p>Sabor: chocolate</p> <p>Calificaion: 3 estrellas</p> <a href="../paginas/formulario.html">Comprar!</a>',
        icon: "info",
        showConfirmButton: false,
        timer: 10000,
        timerProgressBar: true
    });
}

function Detalles6() {
    Swal.fire({
        title: "Detalles",
        html: '<p>Precio: 225</p> <p>Sabor: chocolate</p> <p>Calificaion: 2 estrellas</p> <a href="../paginas/formulario.html">Comprar!</a>',
        icon: "info",
        showConfirmButton: false,
        timer: 10000,
        timerProgressBar: true
    });
}

function funcionesAgrupadas() {
    mensaje();
    validarCorreo();
}

function mensaje() {
    if (document.getElementById('Nombre').value === null || document.getElementById('Nombre').value === "" && document.getElementById('Telefono').value === null || document.getElementById('Telefono').value === "" && document.getElementById('Direccion').value === null || document.getElementById('Direccion').value === "") {
        alert("Todos los campos deben ser llenados");
    } else {
        alert("Te enviaremos el pastel lo mas rapido a tu direccion,saludos cordeales.");
    }

}

function validarCorreo() {
    expresionRegular = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    if (!expresionRegular.exec(document.getElementById('Email').value)) {
        alert('email no valido');
    }
}