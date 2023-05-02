// //Appel d'API de type GET avec la méthode .then()

function getPokemon(name){
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(data => {
        data.json()
        .then(res => {
           let cardContainer = document.getElementById("cardContainer");
           let container = document.createElement("div");
           container.classList.add("box");
           let para = document.createElement("p");
           cardContainer.appendChild(container);
           para.innerHTML = "Nom: " + res.name;
           container.appendChild(para);
           let img = document.createElement("img");
           img.src = res.sprites.front_default;
           container.appendChild(img)
        })
    })
}

// async function getPokemon(name){
//     let pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
//     pokemons = await pokemons.json()
//     console.log(pokemons)
// }


btn = document.getElementById("submit");
console.log(btn);
btn.addEventListener("click", ()=>{
    element = document.getElementById("pokemon").value.toLowerCase();
    getPokemon(element);
});
