import { GraphQLJSON } from 'graphql-type-json'
import { Field, ObjectType } from '@nestjs/graphql'
import { User } from './user.entity'

@ObjectType()
export class Styles {
  @Field()
  name: string
  @Field()
  value: string
}

@ObjectType()
export class FormContent {
  @Field()
  id: string

  @Field()
  component: string

  @Field(() => Styles)
  styles?: Styles

  @Field({ nullable: true })
  className?: string

  @Field(() => [FormContent], { nullable: true })
  Children?: FormContent[]
}

@ObjectType()
export class Form {
  @Field()
  id: string
  @Field(() => User)
  customer: User
  @Field(() => User)
  autor: User
  @Field(() => GraphQLJSON)
  content: FormContent
}
