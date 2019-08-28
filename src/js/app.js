let amigos = new Array;

// Funciones

let saludar_amigos = () => {
    for (let i = 0; i < amigos.length; i++) {
        alert('Hola ' + amigos[i] + ' Posición: ' + i);
        console.log(amigos[i] + ' Posición: ' + i);
    }
    console.log('\n');
}

let agregar_amigos = () => {
    let nombre = prompt('Ingrese el nombre de su amigo');
    amigos.push(nombre);

    alert('Su amigo ' + nombre + ' se ha agregado correctamente');
    console.log(nombre + ' agregado');
    console.log('\n');
}

let buscar_amigos = (nombre) => {
    return amigos.indexOf(nombre);
}

let eliminar_amigos = () => {
    let nombre = prompt('Ingrese el nombre del amigo ha eliminar');
    let posicion = buscar_amigos(nombre);

    if (nombre === -1) {
        alert('Su amigo no se ha encontrado')
        console.error('Amigo no encontrado');
        console.log('\n');
    }
    else {
        amigos.splice(posicion, 1);
        alert('Su amigo ' + nombre + ' se ha eliminado correctamente');
        console.log(nombre + ' eliminado');
        console.log('\n');
    }
}