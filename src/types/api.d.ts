export type CustomDataSourceType = {
  userAPI: UserAPIProps
}

export type UserAPIProps = {
  getUser: (email?: string) => Promise<User>
}