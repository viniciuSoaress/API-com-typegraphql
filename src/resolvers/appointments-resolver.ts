import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql'
import { CreateAppointmentInput } from '../dtos/inputs/create-appointments-input'
import { AppointmntModel } from '../dtos/models/appointment-model'

@Resolver(() => AppointmntModel)
export class AppointmentsResolver {

  @Query(() => [AppointmntModel])
  async appointments() {
    return []
  }

  @Mutation(() => AppointmntModel)
  async createAppointments(@Arg('data', () => CreateAppointmentInput) data: CreateAppointmentInput) {

    const appointment = {
      startsAt: data.startsAt,
      endsAt: data.endsAt
    }

    return appointment
  }

  // @FieldResolver(() => String)
  // async Custumer(@Root() appointmntModel: AppointmntModel) {
  //   return 'ola'
  // }

}