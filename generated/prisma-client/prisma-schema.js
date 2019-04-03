module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.29.2). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregatePokemon {
  count: Int!
}

type AggregateTrainer {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createPokemon(data: PokemonCreateInput!): Pokemon!
  updatePokemon(data: PokemonUpdateInput!, where: PokemonWhereUniqueInput!): Pokemon
  updateManyPokemons(data: PokemonUpdateManyMutationInput!, where: PokemonWhereInput): BatchPayload!
  upsertPokemon(where: PokemonWhereUniqueInput!, create: PokemonCreateInput!, update: PokemonUpdateInput!): Pokemon!
  deletePokemon(where: PokemonWhereUniqueInput!): Pokemon
  deleteManyPokemons(where: PokemonWhereInput): BatchPayload!
  createTrainer(data: TrainerCreateInput!): Trainer!
  updateTrainer(data: TrainerUpdateInput!, where: TrainerWhereUniqueInput!): Trainer
  updateManyTrainers(data: TrainerUpdateManyMutationInput!, where: TrainerWhereInput): BatchPayload!
  upsertTrainer(where: TrainerWhereUniqueInput!, create: TrainerCreateInput!, update: TrainerUpdateInput!): Trainer!
  deleteTrainer(where: TrainerWhereUniqueInput!): Trainer
  deleteManyTrainers(where: TrainerWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Pokemon {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String
  url: String
  trainer: Trainer
}

type PokemonConnection {
  pageInfo: PageInfo!
  edges: [PokemonEdge]!
  aggregate: AggregatePokemon!
}

input PokemonCreateInput {
  name: String
  url: String
  trainer: TrainerCreateOneWithoutPokemonInput
}

input PokemonCreateManyWithoutTrainerInput {
  create: [PokemonCreateWithoutTrainerInput!]
  connect: [PokemonWhereUniqueInput!]
}

input PokemonCreateWithoutTrainerInput {
  name: String
  url: String
}

type PokemonEdge {
  node: Pokemon!
  cursor: String!
}

enum PokemonOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  url_ASC
  url_DESC
}

type PokemonPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String
  url: String
}

input PokemonScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [PokemonScalarWhereInput!]
  OR: [PokemonScalarWhereInput!]
  NOT: [PokemonScalarWhereInput!]
}

type PokemonSubscriptionPayload {
  mutation: MutationType!
  node: Pokemon
  updatedFields: [String!]
  previousValues: PokemonPreviousValues
}

input PokemonSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PokemonWhereInput
  AND: [PokemonSubscriptionWhereInput!]
  OR: [PokemonSubscriptionWhereInput!]
  NOT: [PokemonSubscriptionWhereInput!]
}

input PokemonUpdateInput {
  name: String
  url: String
  trainer: TrainerUpdateOneWithoutPokemonInput
}

input PokemonUpdateManyDataInput {
  name: String
  url: String
}

input PokemonUpdateManyMutationInput {
  name: String
  url: String
}

input PokemonUpdateManyWithoutTrainerInput {
  create: [PokemonCreateWithoutTrainerInput!]
  delete: [PokemonWhereUniqueInput!]
  connect: [PokemonWhereUniqueInput!]
  set: [PokemonWhereUniqueInput!]
  disconnect: [PokemonWhereUniqueInput!]
  update: [PokemonUpdateWithWhereUniqueWithoutTrainerInput!]
  upsert: [PokemonUpsertWithWhereUniqueWithoutTrainerInput!]
  deleteMany: [PokemonScalarWhereInput!]
  updateMany: [PokemonUpdateManyWithWhereNestedInput!]
}

input PokemonUpdateManyWithWhereNestedInput {
  where: PokemonScalarWhereInput!
  data: PokemonUpdateManyDataInput!
}

input PokemonUpdateWithoutTrainerDataInput {
  name: String
  url: String
}

input PokemonUpdateWithWhereUniqueWithoutTrainerInput {
  where: PokemonWhereUniqueInput!
  data: PokemonUpdateWithoutTrainerDataInput!
}

input PokemonUpsertWithWhereUniqueWithoutTrainerInput {
  where: PokemonWhereUniqueInput!
  update: PokemonUpdateWithoutTrainerDataInput!
  create: PokemonCreateWithoutTrainerInput!
}

input PokemonWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  trainer: TrainerWhereInput
  AND: [PokemonWhereInput!]
  OR: [PokemonWhereInput!]
  NOT: [PokemonWhereInput!]
}

input PokemonWhereUniqueInput {
  id: ID
}

type Query {
  pokemon(where: PokemonWhereUniqueInput!): Pokemon
  pokemons(where: PokemonWhereInput, orderBy: PokemonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Pokemon]!
  pokemonsConnection(where: PokemonWhereInput, orderBy: PokemonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PokemonConnection!
  trainer(where: TrainerWhereUniqueInput!): Trainer
  trainers(where: TrainerWhereInput, orderBy: TrainerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Trainer]!
  trainersConnection(where: TrainerWhereInput, orderBy: TrainerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TrainerConnection!
  node(id: ID!): Node
}

type Subscription {
  pokemon(where: PokemonSubscriptionWhereInput): PokemonSubscriptionPayload
  trainer(where: TrainerSubscriptionWhereInput): TrainerSubscriptionPayload
}

type Trainer {
  id: ID!
  name: String!
  pokemon(where: PokemonWhereInput, orderBy: PokemonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Pokemon!]
}

type TrainerConnection {
  pageInfo: PageInfo!
  edges: [TrainerEdge]!
  aggregate: AggregateTrainer!
}

input TrainerCreateInput {
  name: String!
  pokemon: PokemonCreateManyWithoutTrainerInput
}

input TrainerCreateOneWithoutPokemonInput {
  create: TrainerCreateWithoutPokemonInput
  connect: TrainerWhereUniqueInput
}

input TrainerCreateWithoutPokemonInput {
  name: String!
}

type TrainerEdge {
  node: Trainer!
  cursor: String!
}

enum TrainerOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TrainerPreviousValues {
  id: ID!
  name: String!
}

type TrainerSubscriptionPayload {
  mutation: MutationType!
  node: Trainer
  updatedFields: [String!]
  previousValues: TrainerPreviousValues
}

input TrainerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TrainerWhereInput
  AND: [TrainerSubscriptionWhereInput!]
  OR: [TrainerSubscriptionWhereInput!]
  NOT: [TrainerSubscriptionWhereInput!]
}

input TrainerUpdateInput {
  name: String
  pokemon: PokemonUpdateManyWithoutTrainerInput
}

input TrainerUpdateManyMutationInput {
  name: String
}

input TrainerUpdateOneWithoutPokemonInput {
  create: TrainerCreateWithoutPokemonInput
  update: TrainerUpdateWithoutPokemonDataInput
  upsert: TrainerUpsertWithoutPokemonInput
  delete: Boolean
  disconnect: Boolean
  connect: TrainerWhereUniqueInput
}

input TrainerUpdateWithoutPokemonDataInput {
  name: String
}

input TrainerUpsertWithoutPokemonInput {
  update: TrainerUpdateWithoutPokemonDataInput!
  create: TrainerCreateWithoutPokemonInput!
}

input TrainerWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  pokemon_every: PokemonWhereInput
  pokemon_some: PokemonWhereInput
  pokemon_none: PokemonWhereInput
  AND: [TrainerWhereInput!]
  OR: [TrainerWhereInput!]
  NOT: [TrainerWhereInput!]
}

input TrainerWhereUniqueInput {
  id: ID
}
`
      }
    