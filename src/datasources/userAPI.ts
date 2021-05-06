import { DataSource } from "apollo-datasource";
import { Project, Role, Ticket, User } from "../types/generated";

class UserAPI extends DataSource  {
  context: any;
  constructor() {
    super();
  }

  initialize({ context }: any) {
    this.context = context
  }

  getUser = (userId: string) => {
    if (!userId) throw new Error('getUser query requires userId')

    let name = ""
    let email = ""
    let role = Role.Developer
    let lastLogin = ""
    let joined = ""
    let tickets: Ticket[] = []
    let createdTickets: Ticket[] = []
    let assignedTickets: Ticket[] = []
    let project: Project | null = null
    let resolved = 0

    let user: User = {
      id: userId,
      name,
      email,
      role,
      lastLogin,
      joined,
      tickets,
      createdTickets,
      assignedTickets,
      project,
      resolved
    }

    return user
  }
}

export default UserAPI