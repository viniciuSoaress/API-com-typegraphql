
import { Field, InputType, Int } from "type-graphql";


@InputType()
export class CreateUserInput {

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;
}