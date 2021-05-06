import { IResolvers } from "apollo-server"
import { CustomDataSourceType } from "../types/common/api"
import { Scalars, Ticket, User } from "../types/generated"

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
      if(!userId) throw new Error('getUser query requires userId')
      
      return await dataSources.userAPI.getUserTickets(userId)
    },
  },
}

export default UserResolver