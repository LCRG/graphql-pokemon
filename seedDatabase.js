const fs = require('fs')
const { GraphQLClient } = require('graphql-request')

const client = new GraphQLClient('http://localhost:4466')

const mutation = `mutation createPokemon(
    $name: String,
    $url: String
) {
    createPokemon(data: {
      name: $name
      url: $url
    })
    {
      id
    }
  }
`

const sampleFiles = ['pokemon-data.json']

async function main(inputFile) {
  const content = fs.readFileSync(`${inputFile}`)
  const allPokemon = JSON.parse(content)

  allPokemon.forEach(async item => {
    const variables = {
        name: item.name,
        url: item.url,
      }
    
      await client
        .request(mutation, variables)
        .then(data => console.log(data))
        .catch(err => console.log(`${err}`))
  })
  
}

for (let fileName of sampleFiles) {
    main(fileName).catch(e => console.error(e))
}