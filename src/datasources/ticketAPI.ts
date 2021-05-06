import { DataSource } from "apollo-datasource"
import { Comment, Event, Project, Scalars, Ticket, TicketType, User } from "../types/generated"

class TicketAPI extends DataSource {
  context: any;
  constructor() {
    super();
  }

  initialize({ context }: any) {
    this.context = context
  }

  getTicket = async (ticketId: Scalars['ID']): Promise<Ticket | undefined> => {
    if (!ticketId) throw new Error('getTicket query requires ticketId')
    // if(ticket does not exist) return undefined

    let tag: string = ""
    let title: string = ""
    let description: string = ""
    let assignedTo: User | undefined
    let assignedBy: User | undefined
    let assigned: boolean = false 
    let createdAt: Scalars['Date'] = ""
    let updatedAt: Scalars['Date'] = ""
    let deleted: boolean = false
    let open: boolean = false
    let closedAt: Scalars['Date'] = ""
    let priority: number = 0
    let type: TicketType = TicketType.Bug
    let comments: Comment[] = []
    let log: Event[] = []

    let author: User | undefined
    let project: Project | undefined

    if (!author || !project) throw new Error('ticket must have an assigned author and project')

    let ticket: Ticket = {
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

  getAllTickets= async (): Promise<Ticket[]> => {
    return []
  }

  getTicketLog = async (ticketId: Scalars['ID']): Promise<Event[]> => {
    if (!ticketId) throw new Error('getTicket query requires ticketId')
   
    return []
  }
}

export default TicketAPI