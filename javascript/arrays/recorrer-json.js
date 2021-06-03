var json = { nombre: 'jose', apellido: 'sanchez', edad: 25 };
for (var key in json) {
    document.write('<br>' + key + ' - ' + json[key]);
}
