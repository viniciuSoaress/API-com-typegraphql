import { Field, Int, ObjectType } from "type-graphql";


@ObjectType()
export class UserModel {

  @Field(() => String)
  name: string

  @Field(() => String)
  email: string
}