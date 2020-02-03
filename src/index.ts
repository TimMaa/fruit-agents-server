import { ApolloServer } from 'apollo-server';
import { resolvers } from './resolvers';
import { types as typeDefs } from './types';

const server = new ApolloServer({ typeDefs, resolvers, playground: true });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});