const pokemons = {
  pikachu: {
    name: 'pikachu',
    order: '25',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png',
    moves: [
    'mega-punch', 'thunder-punch', 'thunder-shock', 'thunder-bold'] },


  bulbasaur: {
    name: 'bulbasaur',
    order: '1',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
    moves: [
    'razor-wind', 'swords-dance', 'vine-whip', 'solar-beam'] },


  charmander: {
    name: 'charmander',
    order: '4',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png',
    moves: [
    'flamethrower', 'bite', 'dragon-rage', 'fire-spin'] },


  squirtle: {
    name: 'squirtle',
    order: '7',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png',
    moves: [
    'ice-punch', 'water-gun', 'hydro-pump', 'surf'] } };




let arrayPokemon = [];

for (const pokemon in pokemons) {
  arrayPokemon.push(pokemons[pokemon]);
}

const listPokemons = arrayPokemon.map(pokemon => /*#__PURE__*/React.createElement("li", null, pokemon.name));

function handleData(e) {
  const pokemonName = document.getElementById('name');
  const pokemonOrder = document.getElementById('order');
  const pokemonMoves = document.getElementById('moves');

  let itemId = e.target.getAttribute('id');
  const result = arrayPokemon.filter(item => item.order === itemId).map(value => {
    pokemonName.value = value.name;
    pokemonOrder.value = value.order;
    pokemonMoves.value = value.moves.join(', ');
  });
  return result;
}

const pokemonImages = arrayPokemon.map((pokemonItem) => /*#__PURE__*/
React.createElement("div", { className: "imagesCard" }, /*#__PURE__*/
React.createElement("h3", { className: "cardTitle" }, pokemonItem.name), /*#__PURE__*/
React.createElement("img", {
  className: "cardImage",
  src: pokemonItem.image,
  alt: pokemonItem.name,
  key: pokemonItem.order,
  id: pokemonItem.order,
  onClick: handleData })));




//console.log(pokemonImages);

const information = /*#__PURE__*/
React.createElement("div", { class: "informationCard" }, /*#__PURE__*/
React.createElement("label", { id: "nameLabel" }, "Name"), /*#__PURE__*/
React.createElement("input", { disabled: true, type: "text", readonly: "readonly", id: "name", value: "" }), /*#__PURE__*/
React.createElement("label", { id: "orderLabel" }, "Order"), /*#__PURE__*/
React.createElement("input", { disabled: true, type: "text", readonly: "readonly", id: "order", value: "" }), /*#__PURE__*/
React.createElement("label", { id: "movesLabel" }, "Moves"), /*#__PURE__*/
React.createElement("textarea", { className: "moves", disabled: true, type: "text", readonly: "readonly", id: "moves", value: "" }));



ReactDOM.render(pokemonImages, document.getElementById('imagesContainer'));

ReactDOM.render(information, document.getElementById('informationContainer'));