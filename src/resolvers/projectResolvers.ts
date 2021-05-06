import { IResolvers } from "apollo-server"
import { CustomDataSourceType } from "../types/common/api"
import { Event, Project, Scalars, Sprint, Ticket } from "../types/generated"

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
      __, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<Project[]> => {
      return await dataSources.projectAPI.getAllProjects()
    },
    getProjectTickets: async (
      _, 
      { projectId }: {projectId: Scalars['ID']}, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<Ticket[]> => {
      if(!projectId) throw new Error('getUserTickets query requires projectId')
      
      return await dataSources.projectAPI.getProjectTickets(projectId)
    },
    getProjectLog: async (
      _, 
      { projectId }: {projectId: Scalars['ID']}, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<Event[]> => {
      if(!projectId) throw new Error('getProjectLog query requires projectId')
      
      return await dataSources.projectAPI.getProjectLog(projectId)
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
      __, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<Sprint[]> => {
      return await dataSources.projectAPI.getAllSprints()
    },
    getSprintLog: async (
      _, 
      { sprintId }: {sprintId: Scalars['ID']}, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<Event[]> => {
      if(!sprintId) throw new Error('getUser query requires sprintId')
      
      return await dataSources.projectAPI.getSprintLog(sprintId)
    },

  },
}

export default UserResolver