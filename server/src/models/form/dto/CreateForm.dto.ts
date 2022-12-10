import { GraphQLJSON } from 'graphql-type-json'
import { Field, InputType } from '@nestjs/graphql'
import { User } from '../entities/user.entity'
import { FormContent } from '../entities/form.entity'

@InputType()
export class CreateFormDto {
  @Field(() => User)
  customer: User

  @Field(() => User)
  autor: User

  @Field()
  name: string

  @Field(() => GraphQLJSON)
  content: FormContent
}
