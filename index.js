const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const validateTokenAndGetUserId = (token) => {
  return 'user-1';
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const context = {};
    if (req.headers.authorization) {
      const [bearer, token] = req.headers.authorization.split(' ');
      console.log(bearer, token);

      context.userId = validateTokenAndGetUserId(token);
    }
    return context;
  },
});

server.listen().then(({ url }) => {
  console.log(`Server is running at ${url}`);
});
