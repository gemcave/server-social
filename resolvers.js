const { gql } = require('apollo-server');

const resolvers = {
  Query: {
    example: () => ({ _id: '1', text: 'Example Query result' }),
  },
};

module.exports = resolvers;
