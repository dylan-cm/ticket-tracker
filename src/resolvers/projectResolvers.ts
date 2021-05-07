import { IResolvers } from "apollo-server"
import { CustomDataSourceType } from "../types/common/api"
import * as type from "../types/generated"

const ProjectResolver: IResolvers = {
  Query: {
    getProject: async (
      _, 
      { projectId }: type.QueryGetProjectArgs, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<type.Project | undefined> => {
      if(!projectId) throw new Error('getProject query requires projectId')
      
      return await dataSources.projectAPI.getProject({projectId})
    },
    getAllProjects: async (
      _,  
      {pageSize = 20, after}: type.QueryGetAllProjectsArgs, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<type.ProjectFeed> => {
      return await dataSources.projectAPI.getAllProjects({pageSize, after})
    },
    getProjectTickets: async (
      _, 
      { projectId, pageSize = 20, after }: type.QueryGetProjectTicketsArgs, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<type.TicketFeed> => {
      if(!projectId) throw new Error('getProjectTickets query requires projectId')
      
      return await dataSources.projectAPI.getProjectTickets({projectId, pageSize, after})
    },
    getProjectTeam: async (
      _, 
      { projectId, pageSize = 20, after }: type.QueryGetProjectTeamArgs, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<type.UserFeed> => {
      if(!projectId) throw new Error('getProjectTeam query requires projectId')
      
      return await dataSources.projectAPI.getProjectTeam({projectId, pageSize, after})
    },
    getProjectSprints: async (
      _, 
      { projectId, pageSize = 20, after }: type.QueryGetProjectSprintsArgs, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<type.SprintFeed> => {
      if(!projectId) throw new Error('getProjectSprint query requires projectId')
      
      return await dataSources.projectAPI.getProjectSprints({projectId, pageSize, after})
    },
    getProjectLog: async (
      _, 
      { projectId, pageSize = 20, after }: type.QueryGetProjectLogArgs, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<type.EventFeed> => {
      if(!projectId) throw new Error('getProjectLog query requires projectId')
      
      return await dataSources.projectAPI.getProjectLog({projectId, pageSize, after})
    },

    getSprint: async (
      _, 
      { sprintId }: type.QueryGetSprintArgs, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<type.Sprint | undefined> => {
      if(!sprintId) throw new Error('getProject query requires sprintId')
      
      return await dataSources.projectAPI.getSprint({sprintId})
    },
    getAllSprints: async (
      _,  
      {pageSize = 20, after}: type.QueryGetAllSprintsArgs, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<type.SprintFeed> => {
      return await dataSources.projectAPI.getAllSprints({pageSize, after})
    },
    getSprintLog: async (
      _, 
      { sprintId, pageSize = 20, after }: type.QueryGetSprintLogArgs, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<type.EventFeed> => {
      if(!sprintId) throw new Error('getProject query requires sprintId')
      
      return await dataSources.projectAPI.getSprintLog({sprintId, pageSize, after})
    },
  },

  Mutation: {
    setProject: async (
      _,
      { projectId, input}: type.MutationSetProjectArgs,
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<type.ProjectUpdateResponse> => await dataSources.projectAPI.setProject({projectId, input}),
    deleteProject: async (
      _,
      { projectId }: type.MutationDeleteProjectArgs,
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<type.ProjectUpdateResponse> => {
      if(!projectId) throw new Error('deleteProject mutation requires projectId')
      
      return await dataSources.projectAPI.deleteProject({projectId})
    },
    addTeamMember: async (
      _,
      { projectId, userId }: type.MutationAddTeamMemberArgs,
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<type.ProjectUpdateResponse> => {
      if(!projectId) throw new Error('addTeamMember mutation requires projectId')
      
      return await dataSources.projectAPI.addTeamMember({projectId, userId})
    },
    removeTeamMember: async (
      _,
      { projectId, userId }: type.MutationRemoveTeamMemberArgs,
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<type.ProjectUpdateResponse> => {
      if(!projectId) throw new Error('removeTeamMember mutation requires projectId')
      
      return await dataSources.projectAPI.removeTeamMember({projectId, userId})
    },
    addManager: async (
      _,
      { projectId, userId }: type.MutationAddManagerArgs,
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<type.ProjectUpdateResponse> => {
      if(!projectId) throw new Error('addManager mutation requires projectId')
      
      return await dataSources.projectAPI.addManager({projectId, userId})
    },
    removeManager: async (
      _,
      { projectId, userId }: type.MutationRemoveManagerArgs,
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<type.ProjectUpdateResponse> => {
      if(!projectId) throw new Error('removeManager mutation requires projectId')
      
      return await dataSources.projectAPI.removeManager({projectId, userId})
    },

    setSprint: async (
      _,
      { projectId, sprintId, input}: type.MutationSetSprintArgs,
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<type.SprintUpdateResponse> => {
      if(!projectId) throw new Error('setSprint mutation requires projectId')

      return await dataSources.projectAPI.setSprint({projectId, sprintId, input})
    },
    deleteSprint: async (
      _,
      { sprintId }: type.MutationDeleteSprintArgs,
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<type.SprintUpdateResponse> => {
      if(!sprintId) throw new Error('deleteSprint mutation requires sprintId')
      
      return await dataSources.projectAPI.deleteSprint({sprintId})
    },
  }
}

export default ProjectResolver