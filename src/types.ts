import { gql } from 'apollo-server-core';

export const typeDefs = gql`
  scalar Date

  type Agent{
    id: String!
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
    id: String!
    start: String!
    end: String!
    ratings: [Rating!]
    averageRating: Float
    agent: Agent
  }

  type Rating{
    id: String!
    score: Int!
    created: Date!
  }

  type Query {
    agents(name: String): [Agent]
    agent(id: ID): Agent
    missions: [Mission]
    nextMission: Mission
    previousMission: Mission
    activeMission: Mission 
  }

  type Mutation {
    addRating(score: Int, missionId: String): Rating
  }
`;

export const types = typeDefs;