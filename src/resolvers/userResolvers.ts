import { IResolvers } from "apollo-server"
import { CustomDataSourceType } from "../types/common/api"
import { Event, Scalars, Ticket, User } from "../types/generated"

const UserResolver: IResolvers = {
  Query: {
    getUser: async (
      _, 
      { userId }: {userId: Scalars['ID']}, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<User | undefined> => {
      if(!userId) throw new Error('getUser query requires userId')
      
      return await dataSources.userAPI.getUser(userId)
    },
    getAllUsers: async (
      _, 
      __, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<User[]> => {
      return await dataSources.userAPI.getAllUsers()
    },
    currentUser: async (
      _,
      __,
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<User | undefined> => {
      return await dataSources.userAPI.currentUser()
    },
    getUserTickets: async (
      _, 
      { userId }: {userId: Scalars['ID']}, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<Ticket[]> => {
      if(!userId) throw new Error('getUserTickets query requires userId')
      
      return await dataSources.userAPI.getUserTickets(userId)
    },
    getUserLog: async (
      _, 
      { userId }: {userId: Scalars['ID']}, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<Event[]> => {
      if(!userId) throw new Error('getUserLog query requires userId')
      
      return await dataSources.userAPI.getUserLog(userId)
    },

  },
}

export default UserResolver