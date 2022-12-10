import { CreateFormDto } from './dto/CreateForm.dto'
import { Injectable } from '@nestjs/common'
import { FormRepository } from './form.repository'
import { ObjectNotFoundException } from 'common/exceptions/object-not-found.exception'
import { Form } from './entities/form.entity'

const OBJECT_TYPE = 'Form'

@Injectable()
export class FormService {
  constructor(private readonly formRepo: FormRepository) {}

  getAllForms(): Form[] {
    return this.formRepo.findAll()
  }
  getFormById(formId: string) {
    const form = this.formRepo.findOne(formId)
    if (!form) {
      throw new ObjectNotFoundException(OBJECT_TYPE, formId)
    }
    return form
  }

  createForm(user: CreateFormDto): Form {
    return this.formRepo.create(user)
  }

  deleteFormById(formId: string): Form {
    const deletedForm = this.formRepo.delete(formId)

    if (!deletedForm) {
      throw new ObjectNotFoundException(OBJECT_TYPE, formId)
    }
    return deletedForm
  }
}
