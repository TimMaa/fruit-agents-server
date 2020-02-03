import moment from 'moment';

import { agents, missions, ratings } from './mockdata';
import { Agent, Mission } from './interfaces';

export const resolvers = {
  Query: {
    agent: (_obj, args: agentArgs) => agents.find(a => a.id === args.id),
    agents: (_obj, args: agentsArgs) => args.name ? agents.filter(a => a.name.toLowerCase().includes(args.name.toLowerCase())) : agents,
    missions: () => missions,
    activeMission: () => missions.find(m => moment(m.end, 'X') > moment() && moment(m.start, 'X') < moment()),
    previousMission: () => missions.find(m => moment(m.end, 'X') < moment()),
    nextMission: () => missions.find(m => moment(m.start, 'X') > moment()),
  },
  Agent: {
    averageRating: (obj: Agent) => {
      const agentRatings = ratings.filter(r => r.agentId === obj.id).map(r => r.score);
      return (agentRatings.reduce((cur, acc) => cur + acc, 0) / agentRatings.length).toFixed(2)
    },
    previousMission: (obj: Agent) => missions.filter(m => m.agentId === obj.id).find(m => moment(m.end, 'X') < moment()),
    nextMission: (obj: Agent) => missions.filter(m => m.agentId === obj.id).find(m => moment(m.start, 'X') > moment()),
    ratings: (obj: Agent) => ratings.filter(r => r.agentId === obj.id),
  },
  Mission: {
    agent: (obj: Mission) => agents.find(a => a.id === obj.agentId),
    averageRating: (obj: Mission) => {
      const missionRatings = ratings.filter(r => r.missionId === obj.id).map(r => r.score);
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