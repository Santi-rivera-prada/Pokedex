let search_input = document.getElementById("search_input")
let container = document.getElementById("container")

async function search() {
  console.log(search_input.value)
  let result = await search_pokemon(search_input.value)
  let pokemon = result.data
  console.log(pokemon)

}

async function search_pokemon(pokemon_name) {
  var config = {
    method: 'get',
    url: `https://pokeapi.co/api/v2/pokemon/${pokemon_name}`
  };

  return await axios(config)
}



const buscarPokemon = document.getElementById( 'buscarPokemon')
const pokemonNombre = document.querySelector('h2');
const pokemonImagen = document.querySelector('img');
const tipoPokemon = document.querySelectorAll('ul')[0].querySelectorAll('li')[0];
const alturaPokemon = document.querySelectorAll('ul')[0].querySelectorAll('li')[1];
const pesoPokemon = document.querySelectorAll('ul')[0].querySelectorAll('li')[2];
const ataquePokemon = document.querySelectorAll('ul')[1].querySelectorAll('li')[0];
const defensaPokemon = document.querySelectorAll('ul')[1].querySelectorAll('li')[1];
const velocidadPokemon = document.querySelectorAll('ul')[1].querySelectorAll('li')[2];
const movimientosPokemon = document.querySelectorAll('ul')[2];




async function search() {
  let pokemonName = search_input.value.toLowerCase().trim();
  if (pokemonName === '') {
    alert('Por favor ingresa un nombre de Pokemon.');
    return;
  }

  try {
    let result = await search_pokemon(pokemonName);
    let pokemon = result.data;

    pokemonNombre.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    pokemonImagen.src = pokemon.sprites.other['official-artwork'].front_default;
    tipoPokemon.textContent = 'Tipo: ' + pokemon.types[0].type.name;
    alturaPokemon.textContent = 'Altura: ' + pokemon.height + ' m';
    pesoPokemon.textContent = 'Peso: ' + pokemon.weight + ' kg';
    ataquePokemon.textContent = 'Ataque: ' + pokemon.stats[1].base_stat;
    defensaPokemon.textContent = 'Defensa: ' + pokemon.stats[2].base_stat;
    velocidadPokemon.textContent = 'Velocidad: ' + pokemon.stats[5].base_stat;

    // Agregar movimientos
    movimientosPokemon.innerHTML = '';
    for (let i = 0; i < 3; i++) {
      let movimiento = document.createElement('li');
      movimiento.textContent = pokemon.moves[i].move.name;
      movimientosPokemon.appendChild(movimiento);
    }
  } catch (error) {
    alert('No se encontró el Pokemon ' + pokemonName + '.');
  }
}









