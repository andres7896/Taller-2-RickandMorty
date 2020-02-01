const contenedor = document.querySelector('.contenedor')
const mensaje = document.querySelector('.mensaje')
const contador = document.querySelector('.mensaje')
var next = document.querySelector('.btnNext')
var after = document.querySelector('.btnAfter')

setTimeout(function () {
    contador.remove()
}, 2000);

jQuery.ajax('https://rickandmortyapi.com/api/',{
    method: 'GET',
    success: function(response){
    //Obteniendo Personajes
    jQuery.ajax(response.characters, {
        method: 'GET',
        success: function(response){
                console.log('Lista de personajes', response)
                response.results.forEach(function(personaje) {
                    contenedor.innerHTML = contenedor.innerHTML + `<div class="personaje">
                                                                        <img src="${personaje.image}" alt=""/>
                                                                        <h3>${personaje.name}</h3>
                                                                        <h4>${personaje.species}</h4>
                                                                        <p><strong>Estatus:</strong> ${personaje.status}</p>
                                                                        <hr>
                                                                        <p><strong>Genero:</strong> ${personaje.gender}</p>
                                                                        <hr>
                                                                        <p><strong>Origen:</strong> ${personaje.origin.name}</p>
                                                                    </div>`
                });
                mensaje.innerHTML = mensaje.innerHTML + `<p>La cantidad de resultados es: ${response.info.count}</p>`
        },
        error: function(error) {
            console.log('Error trayendo personajes ', error)
        }
        })
    }
})

//Capturar datos
function busqueda() {
    var busca = document.querySelector('#buscador').value
    console.log(contador)

    jQuery.ajax('https://rickandmortyapi.com/api/character?name=' + busca,{
    method: 'GET',
    success: function(response){
    //Obteniendo Personajes
                console.log('Lista de personajes', response)
                contenedor.innerHTML = '';
                response.results.forEach(function(personaje) {
                    if (personaje.name.toLowerCase().includes(busca)) {
                        contenedor.innerHTML = contenedor.innerHTML + `<div class="personaje">
                                                                        <img src="${personaje.image}" alt=""/>
                                                                        <h3>${personaje.name}</h3>
                                                                        <h4>${personaje.species}</h4>
                                                                        <p><strong>Estatus:</strong> ${personaje.status}</p>
                                                                        <hr>
                                                                        <p><strong>Genero:</strong> ${personaje.gender}</p>
                                                                        <hr>
                                                                        <p><strong>Origen:</strong> ${personaje.origin.name}</p>
                                                                    </div>`
                    }
                });
        },
        error: function(error) {
            console.log('Error trayendo personajes ', error)
        }
    })
}

//Paginacion
