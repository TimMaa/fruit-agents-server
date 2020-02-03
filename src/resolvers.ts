import { agents, missions, ratings } from './mockdata';
import { Agent, Mission } from './interfaces';

export const resolvers = {
  Query: {
    agent: (_obj, args: agentArgs) => agents.find(a => a.id === args.id),
    agents: (_obj, args: agentsArgs) => args.name ? agents.filter(a => a.name.toLowerCase().includes(args.name.toLowerCase())) : agents,
    missions: (active: boolean) => missions,
  },
  Agent: {
    averageRating: (obj: Agent) => {
      const agentRatings = ratings.filter(r => r.agentId === obj.id).map(r => r.rating);
      return (agentRatings.reduce((cur, acc) => cur + acc, 0) / agentRatings.length).toFixed(2)
    },
    ratings: (obj: Agent) => ratings.filter(r => r.agentId === obj.id),
  },
  Mission: {
    averageRating: (obj: Agent) => {
      const missionRatings = ratings.filter(r => r.missionId === obj.id).map(r => r.rating);
      return (missionRatings.reduce((cur, acc) => cur + acc, 0) / missionRatings.length).toFixed(2)
    },
    ratings: (obj: Mission) => ratings.filter(r => r.missionId === obj.id),
  }
}

interface agentArgs {
  id: string
}

interface agentsArgs {
  name: string
}