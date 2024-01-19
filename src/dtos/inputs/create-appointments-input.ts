import { Field, InputType } from "type-graphql";

@InputType()
export class CreateAppointmentInput {

  @Field(() => String)
  customeId: String;

  @Field(() => Date)
  startsAt: Date;

  @Field(() => Date)
  endsAt: Date;

}