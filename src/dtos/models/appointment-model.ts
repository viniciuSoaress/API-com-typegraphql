import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class AppointmntModel{

   @Field(() => Date)
  startsAt: Date;

   @Field(() => Date)
  endsAt: Date;
}