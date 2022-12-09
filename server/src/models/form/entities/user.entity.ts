import { Field, InputType, ObjectType } from '@nestjs/graphql'

@ObjectType('User')
@InputType('UserInput')
export class User {
  @Field()
  fistName: string
  @Field()
  lastName: string
}
