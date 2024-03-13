async function fetchPokemon() {
    const pokemon_name = document.getElementById("pokemon-name").value.toLowerCase();
    const pokemon_image = document.getElementById("pokemon-image");
    const use = document.getElementById("use");
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`);
    try {
        if (!response.ok) {
            use.innerHTML = `${pokemon_name} couldn't be found. <br> For more information, check the console.`;
            throw new Error("Couldn't fetch resource");
        }
        console.clear();
        const data = await response.json();
        const pokemon_spirit = data.sprites.front_default;
        let original_name = data.name;
        let name3 = original_name.slice(1);
        let name2 = original_name[0].toUpperCase();
        let return_name = name2 + name3;
        pokemon_image.src = pokemon_spirit;
        pokemon_image.style.display = "block";
        use.innerHTML = return_name;
    } catch (error) {
        console.log(error);
    }
}
