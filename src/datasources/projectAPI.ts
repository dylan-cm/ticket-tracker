import { DataSource } from "apollo-datasource"
import * as type from "../types/generated"

class ProjectAPI extends DataSource {
  context: any;
  constructor() {
    super();
  }

  initialize({ context }: any) {
    this.context = context
  }

  getProject = async ({projectId}: type.QueryGetProjectArgs): Promise<type.Project | undefined> => {
    if (!projectId) throw new Error('getProject query requires projectId')
    // if(project does not exist) return undefined

    let title = ""
    let description = ""
    let tickets: type.Ticket[] = []
    let managers: type.User[] = []
    let team: type.User[] = []
    let createdAt: type.Scalars['Date'] = ""
    let log: type.Event[] = []

    let user: type.Project = {
      id: projectId,
      title,
      description,
      tickets,
      managers,
      team,
      createdAt,
      log,
    }

    return user
  }

  getAllProjects = async ({after, pageSize = 20}: type.QueryGetAllProjectsArgs): Promise<type.ProjectFeed> => {
    let projectFeed: type.ProjectFeed = {
      after,
      pageSize: 0,
      projects: []
    }

    return projectFeed
  }
  
  getProjectTeam = async ({projectId, after, pageSize = 20}: type.QueryGetProjectTeamArgs): Promise<type.UserFeed> => {
    if (!projectId) throw new Error('getProjectTeam query requires projectId')
    
    let userFeed: type.UserFeed = {
      after,
      pageSize: 0,
      users: []
    }

    return userFeed
  }
  
  getProjectTickets = async ({projectId, after, pageSize = 20}: type.QueryGetProjectTicketsArgs): Promise<type.TicketFeed> => {
    if (!projectId) throw new Error('getProjectTickets query requires projectId')
    
    let ticketFeed: type.TicketFeed = {
      after,
      pageSize: 0,
      tickets: []
    }

    return ticketFeed
  }

  getProjectSprints = async ({projectId, after, pageSize = 20}: type.QueryGetProjectSprintsArgs): Promise<type.SprintFeed> => {
    if (!projectId) throw new Error('getProjectSprints query requires projectId')
    
    let sprintFeed: type.SprintFeed = {
      after,
      pageSize: 0,
      sprints: []
    }

    return sprintFeed
  }

  getProjectLog = async ({projectId, after, pageSize = 20}: type.QueryGetProjectLogArgs): Promise<type.EventFeed> => {
    if (!projectId) throw new Error('getProjectLog query requires projectId')
    
    let eventFeed: type.EventFeed = {
      after,
      pageSize: 0,
      events: []
    }

    return eventFeed
  }

  getSprint = async ({sprintId}: type.QueryGetSprintArgs): Promise<type.Sprint> => {
    if (!sprintId) throw new Error('getSprint query requires sprintId')
    // if(ticket does not exist) return undefined

    let title: string = ""
    let description: string = ""
    let startDate: type.Scalars['Date'] = ""
    let endDate: type.Scalars['Date'] = ""
    let tickets: type.Ticket[] = []
    let log: type.Event[] = []
    
    let project: type.Project | undefined = await this.getProject({projectId: 'implement'})

    if (!project) throw new Error('sprint must have an assigned project')

    let sprint: type.Sprint = {
    id: sprintId,
    title,
    description,
    project,
    startDate,
    endDate,
    tickets,
    log,
    }

    return sprint
  }

  getAllSprints = async ({after, pageSize = 20}: type.QueryGetAllSprintsArgs): Promise<type.SprintFeed> => {
    let sprintFeed: type.SprintFeed = {
      after,
      pageSize: 0,
      sprints: []
    }

    return sprintFeed
  }

  getSprintLog = async ({sprintId, after, pageSize = 20}: type.QueryGetSprintLogArgs): Promise<type.EventFeed> => {
    if (!sprintId) throw new Error('getSprintLog query requires sprintId')

    let eventFeed: type.EventFeed = {
      after,
      pageSize: 0,
      events: []
    }

    return eventFeed
  }

  setProject = async ({projectId, input}: type.MutationSetProjectArgs): Promise<type.ProjectUpdateResponse> => {
    let response: type.ProjectUpdateResponse = {
      success: false
    }

    return response
  }


  deleteProject = async ({projectId}: type.MutationDeleteProjectArgs): Promise<type.ProjectUpdateResponse> => {
    if (!projectId) throw new Error('deleteProject query requires projectId')
    
    let response: type.ProjectUpdateResponse = {
      success: false
    }

    return response
  }

  addTeamMember = async ({projectId}: type.MutationAddTeamMemberArgs): Promise<type.ProjectUpdateResponse> => {
    if (!projectId) throw new Error('addTeamMember query requires projectId')
    
    let response: type.ProjectUpdateResponse = {
      success: false
    }

    return response
  }

  removeTeamMember = async ({projectId}: type.MutationRemoveTeamMemberArgs): Promise<type.ProjectUpdateResponse> => {
    if (!projectId) throw new Error('removeTeamMember query requires projectId')
    
    let response: type.ProjectUpdateResponse = {
      success: false
    }

    return response
  }

  addManager = async ({projectId}: type.MutationAddManagerArgs): Promise<type.ProjectUpdateResponse> => {
    if (!projectId) throw new Error('addManager query requires projectId')
    
    let response: type.ProjectUpdateResponse = {
      success: false
    }

    return response
  }

  removeManager = async ({projectId}: type.MutationRemoveManagerArgs): Promise<type.ProjectUpdateResponse> => {
    if (!projectId) throw new Error('removeManager query requires projectId')
    
    let response: type.ProjectUpdateResponse = {
      success: false
    }

    return response
  }

  setSprint = async ({projectId, sprintId, input}: type.MutationSetSprintArgs): Promise<type.SprintUpdateResponse> => {
    if (!projectId) throw new Error('setSprint query requires projectId')
    
    let response: type.SprintUpdateResponse = {
      success: false
    }

    return response
  }


  deleteSprint = async ({sprintId}: type.MutationDeleteSprintArgs): Promise<type.SprintUpdateResponse> => {
    if (!sprintId) throw new Error('deleteSprint query requires sprintId')
    
    let response: type.SprintUpdateResponse = {
      success: false
    }

    return response
  }
}

export default ProjectAPI