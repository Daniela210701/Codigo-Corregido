const baseEndpoint = 'https://api.github.com'; // primero explore el url para saber que era me dio que era una base de datos 
// tipo y formato json 
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); // Corregir el selector para que coincida con la clase
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');
// le puse el sync ya  que tiene que ir por que va lo del await lleva el return
async function displayUser(username) {
  try {
    $n.textContent = 'Cargando...';
    const response = await fetch(`${usersEndpoint}/${username}`);
    // le quite el console.log (data); ya que primero pase lo de const
    // declare lo de data y el json ya que es un formato  
    const data = await response.json();
    console.log(data);
    $n.textContent = data.name; // Utilizar la interpolación de cadena directa, no necesitas '${}'
    $b.textContent = data.blog;
    $l.textContent = data.location;
    // puse el catch err para  que si algo sale mal me diga en consola
  } catch (err) {
    handleError(err);
  }
}

function handleError(err) {
  console.error();('OH NO!', err); // Usar console.error para errores
  $n.textContent = `Algo salió mal: ${err}`;
}

displayUser('stolinski'); // No se puede usar .catch en una función que no devuelve una promesa
