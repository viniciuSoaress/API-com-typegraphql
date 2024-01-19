import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { AppointmentsResolver } from "./resolvers/appointments-resolver";

import path from 'node:path'
import { UserResolvers } from "./resolvers/users-resolver";

async function bootstrap() {

  const schema = await buildSchema({
    resolvers: [
      AppointmentsResolver,
      UserResolvers
    ],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
    validate: false
  })

  const server = new ApolloServer({
    schema
  })

  const { url } = await server.listen()
  console.log(`server running on ${url}`)
}

bootstrap()