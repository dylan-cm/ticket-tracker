import { IResolvers } from "apollo-server"
import { CustomDataSourceType } from "../types/common/api"
import * as type from "../types/generated"

const TicketResolvers: IResolvers = {
  Query: {
    getTicket: async (
      _, 
      { ticketId }: type.QueryGetTicketArgs, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<type.Ticket | undefined> => {
      if(!ticketId) throw new Error('getTicket query requires ticketId')
      
      return await dataSources.ticketAPI.getTicket({ticketId})
    },
    getAllTickets: async (
      _,  
      { pageSize = 20, after }: type.QueryGetAllTicketsArgs, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<type.TicketFeed> => {
      return await dataSources.ticketAPI.getAllTickets({pageSize, after})
    },
    getTicketLog: async (
      _, 
      { ticketId, pageSize = 20, after }: type.QueryGetTicketLogArgs, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<type.EventFeed> => {
      if(!ticketId) throw new Error('getTicket query requires ticketId')
      
      return await dataSources.ticketAPI.getTicketLog({ticketId, pageSize, after})
    },
  },

  Mutation: {
    setTicket: async (
      _, 
      { ticketId, input}: type.MutationSetTicketArgs, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<type.TicketUpdateResponse> => {
      return await dataSources.ticketAPI.setTicket({ticketId, input})
    },
    deleteTicket: async (
      _, 
      { ticketId }: type.MutationDeleteTicketArgs, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<type.TicketUpdateResponse> => {
      if(!ticketId) throw new Error('deleteTicket mutation requires ticketId')
      
      return await dataSources.ticketAPI.deleteTicket({ticketId})
    },
    assignTicket: async (
      _, 
      { ticketId }: type.MutationAssignTicketArgs, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<type.TicketUpdateResponse> => {
      if(!ticketId) throw new Error('assignTicket mutation requires ticketId')
      
      return await dataSources.ticketAPI.deleteTicket({ticketId})
    },
    closeTicket: async (
      _, 
      { ticketId }: type.MutationCloseTicketArgs, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<type.TicketUpdateResponse> => {
      if(!ticketId) throw new Error('closeTicket mutation requires ticketId')
      
      return await dataSources.ticketAPI.closeTicket({ticketId})
    },
    openTicket: async (
      _, 
      { ticketId }: type.MutationOpenTicketArgs, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<type.TicketUpdateResponse> => {
      if(!ticketId) throw new Error('openTicket mutation requires ticketId')
      
      return await dataSources.ticketAPI.openTicket({ticketId})
    },

    
    setComment: async (
      _, 
      { ticketId, commentId, comment }: type.MutationSetCommentArgs, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<type.CommentUpdateResponse> => {
      if(!ticketId) throw new Error('setComment mutation requires ticketId')
      
      return await dataSources.ticketAPI.setComment({ticketId, commentId, comment})
    },
  }
}

export default TicketResolvers