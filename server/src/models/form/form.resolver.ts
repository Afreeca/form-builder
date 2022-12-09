import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CreateFormDto } from './dto/CreateForm.dto'
import { Form } from './entities/form.entity'
import { FormService } from './form.service'

@Resolver(() => Form)
export class FormResolver {
  constructor(private readonly formService: FormService) {}

  @Query(() => [Form], { name: 'forms' })
  getAll() {
    return this.formService.getAllForms()
  }

  @Query(() => Form, { name: 'form' })
  getOne(@Args('formId') emoployeeId: string) {
    return this.formService.getFormById(emoployeeId)
  }

  @Mutation(() => Form, { name: 'createForm' })
  create(@Args('createFormInput') createFormInput: CreateFormDto) {
    return this.formService.createForm(createFormInput)
  }

  @Mutation(() => Form, { name: 'deleteForm' })
  delete(@Args('formId') emoployeeId: string): boolean {
    const test = this.formService.deleteFormById(emoployeeId)
    return test
  }
}
