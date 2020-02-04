export interface Agent {
  id: string
  name: string
  averageRating: number
  missions: Array<Mission>
}

export interface Mission {
  id: string
  start: string
  end: string
  agentId: string
  agent?: Agent
}

export interface Rating {
  id: string
  score: number
  date: string
  missionId: string
  agentId: string
}