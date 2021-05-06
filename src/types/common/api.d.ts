import { Ticket, User, Project, Event, Sprint } from "../generated"

interface CustomDataSourceType {
  userAPI: UserAPIProps
}

interface UserAPIProps {
  getUser: (email: string) => Promise<User | undefined>
  currentUser: () => Promise<User | undefined>
  getUserTickets: (email: string) => Promise<Ticket[]>
  getAllUsers: () => Promise<[User]>

  getProject: (projectId: string) => Promise<Project | undefined>
  getAllProjects: () => Promise<[Project]>
  getProjectTeam: (projectId: string) => Promise<[User]>
  getProjectTickets: (projectId: string) => Promise<[Ticket]>
  getProjectSprints: (projectId: string) => Promise<[Sprint]>

  getTicket: (ticketId: string) => Promise<Ticket | undefined>
  getAllTickets: () => Promise<[Ticket]>
  getTicketLog: (ticketId: string) => Promise<[Event]>

  getSprint: (sprintId: string) => Promise<Sprint | undefined>
  getAllSprints: () => Promise<[Sprint]>
}