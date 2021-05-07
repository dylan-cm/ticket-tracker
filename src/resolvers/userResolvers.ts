import { IResolvers } from "apollo-server"
import { CustomDataSourceType } from "../types/common/api"
import * as type from "../types/generated"

const UserResolver: IResolvers = {
  Query: {
    getUser: async (
      _, 
      { userId }: type.QueryGetUserArgs, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<type.User | undefined> => {
      if(!userId) throw new Error('getUser query requires userId')
      
      return await dataSources.userAPI.getUser({userId})
    },
    getAllUsers: async (
      _, 
      {pageSize = 20, after}: type.QueryGetAllUsersArgs, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<type.UserFeed> => {
      return await dataSources.userAPI.getAllUsers({pageSize, after})
    },
    currentUser: async (
      _,
      __,
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<type.User | undefined> => {
      return await dataSources.userAPI.currentUser()
    },
    getUserTickets: async (
      _, 
      { userId, pageSize = 20, after }: type.QueryGetUserTicketsArgs, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<type.TicketFeed> => {
      if(!userId) throw new Error('getUserTickets query requires userId')
      
      return await dataSources.userAPI.getUserTickets({userId, pageSize, after})
    },
    getUserLog: async (
      _, 
      { userId, pageSize = 20, after }: type.QueryGetUserLogArgs, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<type.EventFeed> => {
      if(!userId) throw new Error('getUserLog query requires userId')
      
      return await dataSources.userAPI.getUserLog({userId, pageSize, after})
    },
  },

  Mutation: {
    setUser: async (
      _,
      { userId, input}: type.MutationSetUserArgs,
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<type.UserUpdateResponse> => await dataSources.userAPI.setUser({userId, input}),
    deleteUser: async (
      _,
      { userId }: type.MutationDeleteUserArgs,
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<type.UserUpdateResponse> => {
      if(!userId) throw new Error('deleteUser mutation requires userId')
      
      return await dataSources.userAPI.deleteUser({userId})
    },
  },
}

export default UserResolver