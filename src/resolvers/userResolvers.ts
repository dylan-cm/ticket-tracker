import { IResolvers } from "apollo-server"
import { CustomDataSourceType } from "../types/api"
import { Scalars, User } from "../types/generated"

const UserResolver: IResolvers = {
  Query: {
    getUser: async (
      _, 
      { userId }: {userId: Scalars['ID']}, 
      { dataSources }: {dataSources: CustomDataSourceType}
    ): Promise<User> => {
      if(!userId) throw new Error('getUser query requires userId')
      
      return await dataSources.userAPI.getUser(userId)
    },
  },
}

export default UserResolver