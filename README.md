# A GraphQL Pokemon practice server
Sample graphql server and db using a simple Pokemon API for learning purposes.  You will need Node, NPM, and Docker installed.

Start with this Prisma set up guide: 
https://www.prisma.io/docs/get-started/01-setting-up-prisma-new-database-JAVASCRIPT-a002/

1. Clone this repo and run 
```
npm install
```
2. Launch Prisma and the connected database Docker images 
```
docker-compose up -d
```
3. Use Prisma CLI to configure the Prisma API
```
prisma init --endpoint http://localhost:4466
```
4. Deploy the default data model to make sure everything is working
```
prisma deploy
```
5. Modify the datamodel.prisma file to represent Pokemon and their trainers.  This documentation can help: https://www.prisma.io/docs/1.29/datamodel-and-migrations/datamodel-POSTGRES-knum/

6. Deploy the new Pokemon data model
```
prisma deploy
```
7. Manipulate the Prisma API directly using the Playground at http://localhost:4466

8. Generate Prisma client code for programmatic Prisma API manipulation by adding this to prisma.yml:
```
generate:
  - generator: javascript-client
    output: ./generated/prisma-client/
```
and then
```
prisma generate
```
9. Install the prisma-client-lib and save as a dependency
```
npm install --save prisma-client-lib
```
10. Create a new Pokemon and then read all of them by executing this script
```
node index.js
```
11. Create a nested object by creating a new Trainer and associating two new Pokemon with it
```
node new-trainer.js
```
---
## These next steps take the Prisma model and generated prisma-client code and generate a GraphQL API server
### This tutorial provides the instructions: https://www.prisma.io/blog/using-graphql-nexus-with-a-database-pmyl3660ncst

12. Add the following dependencies so we can configure a nexus-prisma workflow
```
npm install --save nexus graphql nexus-prisma prisma-client-lib graphql-yoga
npm install --save-dev typescript ts-node-dev
```
13.  Add these two lines to `prisma.yml` so the Prisma client and nexus-prisma code will auto generate whenever we change the data model
```
hooks:
  post-deploy:
    - prisma generate
    - npx nexus-prisma-generate --client ./generated/prisma-client --output ./generated/nexus-prisma
```
14. Add this script to your package.json file to start a development server that will auto update when files are changed
```
"scripts": {
  "start": "ts-node-dev --no-notify --respawn --transpileOnly ./"
},
```
15. Run prisma deploy again to get the auto generated CRUD GraphQL API
```
prisma deploy
```
16. Run the start script to fire up the GraphQL API server and check it out on http://localhost:4000
```
npm start
```
Now you could hook up any GraphQL compatible front-end libraries like Apollo with React, Vue, etc. or just hit your API endpoint with straight-up POST requests.

Libraries such as graphql-request can also be used to access your API - espcially useful to seed the database like this example script:
```
npm install --save graphql-request
node seedDatabase.js
```