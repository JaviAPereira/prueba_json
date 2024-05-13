window.onload = function(){
    loadData();
}

function loadData(){
    fetch('data/practica_json.json')
        .then(Response => Response.json())
        .then(data => showData(data))
        .catch(error => console.error('error al cargar losd datos:', error));
}

function showData(data){
    const userData = document.getElementById('user-data');
    userData.innerHTML= ''
    data.forEach(usuario => {
        userData.innerHTML += `
          <div class="tarjeta">
            <p>ID: ${usuario.id}</p>
            <p>Nombre: ${usuario.nombre}</p>
            <p>Apellido: ${usuario.apellido}</p>
            <p>Ciudad: ${usuario.ciudad}</p>
            <p>Número de Teléfono: ${usuario.numero_de_telefono}</p>
            <img src= ${usuario.foto} width=40px>
          </div>
        `;
      });
}