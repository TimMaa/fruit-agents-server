import { gql } from 'apollo-server-core';

export const typeDefs = gql`
  scalar Date

  type Agent{
    id: ID!
    name: String!
    image: String
    photoUrl: String
    missions: [Mission!]
    previousMission: Mission
    nextMission: Mission
    averageRating: Float
    latestRating: Float
    ratings: [Rating!]
  }

  type Mission{
    id: ID!
    start: String!
    end: String!
    ratings: [Rating!]
    averageRating: Float
    agent: Agent
  }

  type Rating{
    id: ID!
    score: Int!
    created: Date!
  }

  type Query {
    agents(name: String): [Agent]
    agent(id: ID): Agent
    missions(active: Boolean): [Mission]
  }
`;

export const types = typeDefs;