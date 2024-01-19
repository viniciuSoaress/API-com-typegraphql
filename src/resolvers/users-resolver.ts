import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { CreateUserInput } from "../dtos/inputs/create-user-input";
import { UserModel } from "../dtos/models/user-model";


@Resolver(() => UserModel)
export class UserResolvers {

  @Query(() => [UserModel])
  async users() {
    return [{ name: '', email: '' }]
  }

  @Query(() => UserModel)
  async user() {
    return { name: 'ola', email: 'sssss' }
  }


  @Mutation(() => UserModel)
  async createUser(@Arg('data', () => CreateUserInput) data: CreateUserInput) {
    console.log(data);
    return data;
  }
}
