import { IResolvers } from "apollo-server"
import { CustomDataSourceType } from "../types/common/api"
import { Event, Project, Scalars, Sprint, Ticket, User } from "../types/generated"

const UserResolver: IResolvers = {
  Query: {
    getProject: async (
      _, 
      { projectId }: {projectId: Scalars['ID']}, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<Project | undefined> => {
      if(!projectId) throw new Error('getProject query requires projectId')
      
      return await dataSources.projectAPI.getProject(projectId)
    },
    getAllProjects: async (
      _,  
      {pageSize = 20, after} : {pageSize: number, after: string}, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<Project[]> => {
      return await dataSources.projectAPI.getAllProjects(pageSize, after)
    },
    getProjectTickets: async (
      _, 
      { projectId, pageSize = 20, after }: {projectId: Scalars['ID'], pageSize: number, after: string}, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<Ticket[]> => {
      if(!projectId) throw new Error('getUserTickets query requires projectId')
      
      return await dataSources.projectAPI.getProjectTickets(projectId, pageSize, after)
    },
    getProjectTeam: async (
      _, 
      { projectId, pageSize = 20, after }: {projectId: Scalars['ID'], pageSize: number, after: string}, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<User[]> => {
      if(!projectId) throw new Error('getUserTeam query requires projectId')
      
      return await dataSources.projectAPI.getProjectTeam(projectId, pageSize, after)
    },
    getProjectSprints: async (
      _, 
      { projectId, pageSize = 20, after }: {projectId: Scalars['ID'], pageSize: number, after: string}, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<Sprint[]> => {
      if(!projectId) throw new Error('getUserSprint query requires projectId')
      
      return await dataSources.projectAPI.getProjectSprints(projectId, pageSize, after)
    },
    getProjectLog: async (
      _, 
      { projectId, pageSize = 20, after }: {projectId: Scalars['ID'], pageSize: number, after: string}, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<Event[]> => {
      if(!projectId) throw new Error('getProjectLog query requires projectId')
      
      return await dataSources.projectAPI.getProjectLog(projectId, pageSize, after)
    },

    getSprint: async (
      _, 
      { sprintId }: {sprintId: Scalars['ID']}, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<Sprint | undefined> => {
      if(!sprintId) throw new Error('getUser query requires sprintId')
      
      return await dataSources.projectAPI.getSprint(sprintId)
    },
    getAllSprints: async (
      _,  
      {pageSize = 20, after} : {pageSize: number, after: string}, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<Sprint[]> => {
      return await dataSources.projectAPI.getAllSprints(pageSize, after)
    },
    getSprintLog: async (
      _, 
      { sprintId, pageSize = 20, after }: {sprintId: Scalars['ID'], pageSize: number, after: string}, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<Event[]> => {
      if(!sprintId) throw new Error('getUser query requires sprintId')
      
      return await dataSources.projectAPI.getSprintLog(sprintId, pageSize, after)
    },

  },
}

export default UserResolver