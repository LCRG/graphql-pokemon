const { prisma } = require('./generated/prisma-client')

// A `main` function so that we can use async/await
async function main() {

  // Create a new user with a new post
  const newTrainer = await prisma
    .createTrainer({
      name: "Ash",
      pokemon: {
        create: [{
          name: "Pikachu",
        }, {
          name: "Squirtle",
        }]
      },
    })
  console.log(`Created new trainer: ${newTrainer.name} (ID: ${newTrainer.id})`)

  // Read all trainers from the database and print them to the console
  const allTrainers = await prisma.trainers()
  console.log(allTrainers)
}

main().catch(e => console.error(e))