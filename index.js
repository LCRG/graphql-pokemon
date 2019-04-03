const { prisma } = require('./generated/prisma-client')

// A `main` function so that we can use async/await
async function main() {

  // Create a new Pokemon called `Bulbasaur`
    const newPokemon = await prisma.createPokemon({
        name: 'Bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon/1'})
  console.log(`Created new pokemon: ${newPokemon.name} (ID: ${newPokemon.id})`)

  // Read all pokemon from the database and print them to the console
  const allPokemon = await prisma.pokemons()
  console.log(allPokemon)
}

main().catch(e => console.error(e))