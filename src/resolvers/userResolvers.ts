import { IResolvers } from "apollo-server"
import { CustomDataSourceType } from "../types/common/api"
import { Event, Project, Scalars, Sprint, Ticket, User } from "../types/generated"

const UserResolver: IResolvers = {
  Query: {
    getUser: async (
      _, 
      { userId }: {userId: Scalars['ID']}, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<User | undefined> => {
      if(!userId) throw new Error('getUser query requires userId')
      
      return await dataSources.userAPI.getUser(userId)
    },
    getAllUsers: async (
      _, 
      __, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<User[]> => {
      return await dataSources.userAPI.getAllUsers()
    },
    currentUser: async (
      _,
      __,
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<User | undefined> => {
      return await dataSources.userAPI.currentUser()
    },
    getUserTickets: async (
      _, 
      { userId }: {userId: Scalars['ID']}, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<Ticket[]> => {
      if(!userId) throw new Error('getUser query requires userId')
      
      return await dataSources.userAPI.getUserTickets(userId)
    },

    getProject: async (
      _, 
      { projectId }: {projectId: Scalars['ID']}, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<Project | undefined> => {
      if(!projectId) throw new Error('getUser query requires projectId')
      
      return await dataSources.userAPI.getProject(projectId)
    },
    getAllProjects: async (
      _, 
      __, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<Project[]> => {
      return await dataSources.userAPI.getAllProjects()
    },
    getProjectTickets: async (
      _, 
      { projectId }: {projectId: Scalars['ID']}, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<Ticket[]> => {
      if(!projectId) throw new Error('getUser query requires projectId')
      
      return await dataSources.userAPI.getProjectTickets(projectId)
    },

    getTicket: async (
      _, 
      { ticketId }: {ticketId: Scalars['ID']}, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<Ticket | undefined> => {
      if(!ticketId) throw new Error('getUser query requires ticketId')
      
      return await dataSources.userAPI.getTicket(ticketId)
    },
    getAllTickets: async (
      _, 
      __, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<Ticket[]> => {
      return await dataSources.userAPI.getAllTickets()
    },
    getTicketLog: async (
      _, 
      { ticketId }: {ticketId: Scalars['ID']}, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<Event[]> => {
      if(!ticketId) throw new Error('getUser query requires ticketId')
      
      return await dataSources.userAPI.getTicketLog(ticketId)
    },

    getSprint: async (
      _, 
      { sprintId }: {sprintId: Scalars['ID']}, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<Sprint | undefined> => {
      if(!sprintId) throw new Error('getUser query requires sprintId')
      
      return await dataSources.userAPI.getSprint(sprintId)
    },
    getAllSprints: async (
      _, 
      __, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<Sprint[]> => {
      return await dataSources.userAPI.getAllSprints()
    },

  },
}

export default UserResolver