import { Ticket, User } from "../generated"

interface CustomDataSourceType {
  userAPI: UserAPIProps
}

interface UserAPIProps {
  getUser: (email?: string) => Promise<User | undefined>
  currentUser: () => Promise<User | undefined>
  getUserTickets: (email?: string) => Promise<Ticket[]>
}