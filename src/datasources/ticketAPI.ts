import { DataSource } from "apollo-datasource"
import * as type from "../types/generated"
import { TicketType } from "../types/generated"

class TicketAPI extends DataSource {
  context: any;
  constructor() {
    super();
  }

  initialize({ context }: any) {
    this.context = context
  }

  getTicket = async ({ticketId}: type.QueryGetTicketArgs): Promise<type.Ticket | undefined> => {
    if (!ticketId) throw new Error('getTicket query requires ticketId')
    // if(ticket does not exist) return undefined

    let tag: string = ""
    let title: string = ""
    let description: string = ""
    let assignedTo: type.User | undefined
    let assignedBy: type.User | undefined
    let assigned: boolean = false 
    let createdAt: type.Scalars['Date'] = ""
    let updatedAt: type.Scalars['Date'] = ""
    let deleted: boolean = false
    let open: boolean = false
    let closedAt: type.Scalars['Date'] = ""
    let priority: number = 0
    let type: type.TicketType = TicketType.Bug
    let comments: type.Comment[] = []
    let log: type.Event[] = []

    let author: type.User | undefined
    let project: type.Project | undefined

    if (!author || !project) throw new Error('ticket must have an assigned author and project')

    let ticket: type.Ticket = {
    id: ticketId,
    tag,
    title,
    description,
    author,
    project,
    assignedTo,
    assignedBy,
    assigned,
    createdAt,
    updatedAt,
    deleted,
    open,
    closedAt,
    priority,
    type,
    comments,
    log
    }

    return ticket
  }

  getAllTickets= async ({after, pageSize = 20}: type.QueryGetAllTicketsArgs): Promise<type.TicketFeed> => {
    let ticketFeed: type.TicketFeed = {
      after,
      pageSize: 0,
      tickets: []
    }

    return ticketFeed
  }

  getTicketLog = async ({ticketId, after, pageSize = 20}: type.QueryGetTicketLogArgs): Promise<type.EventFeed> => {
    if (!ticketId) throw new Error('getTicket query requires ticketId')
   
    let eventFeed: type.EventFeed = {
      after,
      pageSize: 0,
      events: []
    }

    return eventFeed
  }

  setTicket = async ({ticketId, input}: type.MutationSetTicketArgs): Promise<type.TicketUpdateResponse> => {
    let response: type.TicketUpdateResponse = {
      success: false
    }

    return response
  }

  deleteTicket = async ({ticketId}: type.MutationDeleteTicketArgs): Promise<type.TicketUpdateResponse> => {
    if (!ticketId) throw new Error('deleteTicket query requires ticketId')
    
    let response: type.TicketUpdateResponse = {
      success: false
    }

    return response
  }

  closeTicket = async ({ticketId}: type.MutationCloseTicketArgs): Promise<type.TicketUpdateResponse> => {
    if (!ticketId) throw new Error('closeTicket query requires ticketId')
    
    let response: type.TicketUpdateResponse = {
      success: false
    }

    return response
  }

  openTicket = async ({ticketId}: type.MutationOpenTicketArgs): Promise<type.TicketUpdateResponse> => {
    if (!ticketId) throw new Error('openTicket query requires ticketId')
    
    let response: type.TicketUpdateResponse = {
      success: false
    }

    return response
  }

  assignTicket = async ({ticketId, userId}: type.MutationAssignTicketArgs): Promise<type.TicketUpdateResponse> => {
    if (!ticketId || !userId) throw new Error('assignTicket query requires ticketId and userId')
    
    let response: type.TicketUpdateResponse = {
      success: false
    }

    return response
  }

  setComment = async ({ticketId, commentId, comment}: type.MutationSetCommentArgs): Promise<type.CommentUpdateResponse> => {
    if (!ticketId || !comment) throw new Error('assignTicket query requires ticketId and comment')
    
    let response: type.CommentUpdateResponse = {
      success: false
    }

    return response
  }
}

export default TicketAPI