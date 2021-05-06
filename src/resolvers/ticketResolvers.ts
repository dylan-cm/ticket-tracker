import { IResolvers } from "apollo-server"
import { CustomDataSourceType } from "../types/common/api"
import { Event, Scalars, Ticket } from "../types/generated"

const TicketResolvers: IResolvers = {
  Query: {
    getTicket: async (
      _, 
      { ticketId }: {ticketId: Scalars['ID']}, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<Ticket | undefined> => {
      if(!ticketId) throw new Error('getUser query requires ticketId')
      
      return await dataSources.ticketAPI.getTicket(ticketId)
    },
    getAllTickets: async (
      _,  
      {pageSize = 20, after} : {pageSize: number, after: string}, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<Ticket[]> => {
      return await dataSources.ticketAPI.getAllTickets(pageSize, after)
    },
    getTicketLog: async (
      _, 
      { ticketId, pageSize = 20, after }: {ticketId: Scalars['ID'], pageSize: number, after: string}, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<Event[]> => {
      if(!ticketId) throw new Error('getUser query requires ticketId')
      
      return await dataSources.ticketAPI.getTicketLog(ticketId, pageSize, after)
    },

  },
}

export default TicketResolvers