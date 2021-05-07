import * as type from "../generated"

interface CustomDataSourceType {
  userAPI: UserAPIProps
  ticketAPI: TicketAPIProps
  projectAPI: ProjectAPIProps
}

interface UserAPIProps {
  getUser: ({userId}: type.QueryGetUserArgs) => Promise<type.User | undefined>
  currentUser: () => Promise<type.User | undefined>
  getUserTickets: ({userId, pageSize, after}: type.QueryGetUserTicketsArgs) => Promise<type.TicketFeed>
  getAllUsers: ({pageSize, after}: type.QueryGetAllUsersArgs) => Promise<type.UserFeeTicketFeed>
  getUserLog: ({userId, pageSize, after}: type.QueryGetUserLogArgs) => Promise<type.EventFeeTicketFeed>

  setUser: ({userId, input}: type.MutationSetUserArgs) => Promise<type.UserUpdateResponse>
  deleteUser: ({userId}: type.MutationDeleteUserArgs) => Promise<type.UserUpdateResponse>
}

interface TicketAPIProps {
  getTicket: ({ticketId}: type.QueryGetTicketArgs) => Promise<type.Ticket | undefined>
  getAllTickets: ({pageSize, after}: type.QueryGetAllTicketsArgs) => Promise<type.TicketFeed>
  getTicketLog: ({ticketId, pageSize, after}: type.QueryGetTicketLogArgs) => Promise<type.EventFeeTicketFeed>

  setTicket: ({ticketId, input}: type.MutationSetTicketArgs) => Promise<type.TicketUpdateResponse>
  deleteTicket: ({ticketId}: type.MutationDeleteTicketArgs) => Promise<type.TicketUpdateResponse>
  closeTicket: ({ticketId}: type.MutationCloseTicketArgs) => Promise<type.TicketUpdateResponse>
  openTicket: ({ticketId}: type.MutationOpenTicketArgs) => Promise<type.TicketUpdateResponse>
  assignTicket: ({ticketId, userId}: type.MutationAssignTicketArgs) => Promise<type.TicketUpdateResponse>

  setComment: ({ticketId, commentId, comment}: type.MutationSetCommentArgs) => Promise<type.CommentUpdateResponse>
}

interface ProjectAPIProps {
  getProject: ({projectId}: type.QueryGetProjectArgs) => Promise<type.Project | undefined>
  getAllProjects: ({pageSize, after}: type.QueryGetAllProjectsArgs) => Promise<type.ProjectFeeTicketFeed>
  getProjectTeam: ({projectId, pageSize, after}: type.QueryGetProjectTeamArgs) => Promise<type.UserFeeTicketFeed>
  getProjectTickets: ({projectId, pageSize, after}: type.QueryGetProjectTicketsArgs) => Promise<type.TicketFeed>
  getProjectSprints: ({projectId, pageSize, after}: type.QueryGetProjectSprintsArgs) => Promise<type.SprintFeeTicketFeed>
  getProjectLog: ({projectId, pageSize, after}: type.QueryGetProjectLogArgs) => Promise<type.EventFeeTicketFeed>

  setProject: ({projectId, input}: type.MutationSetProjectArgs) => Promise<type.ProjectUpdateResponse>
  deleteProject: ({projectId}: type.MutationDeleteProjectArgs) => Promise<type.ProjectUpdateResponse>
  addTeamMember: ({projectId, userId}: type.MutationAddTeamMemberArgs) => Promise<type.ProjectUpdateResponse>
  removeTeamMember: ({projectId, userId}: type.MutationRemoveTeamMemberArgs) => Promise<type.ProjectUpdateResponse>
  addManager: ({projectId, userId}: type.MutationAddManagerArgs) => Promise<type.ProjectUpdateResponse>
  removeManager: ({projectId, userId}: type.MutationRemoveManagerArgs) => Promise<type.ProjectUpdateResponse>

  getSprint: ({sprintId}: type.QueryGetSprintArgs) => Promise<type.Sprint | undefined>
  getAllSprints: ({pageSize, after}: type.QueryGetAllSprintsArgs) => Promise<type.SprintFeeTicketFeed>
  getSprintLog: ({sprintId, pageSize, after}: type.QueryGetSprintLogArgs) => Promise<type.EventFeeTicketFeed>

  setSprint: ({projectId, sprintId, input}: type.MutationSetSprintArgs) => Promise<type.SprintUpdateResponse>
  deleteSprint: ({sprintId}: type.MutationDeleteSprintArgs) => Promise<type.SprintUpdateResponse>
}