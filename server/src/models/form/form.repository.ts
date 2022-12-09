import { CreateFormDto } from './dto/CreateForm.dto'
import { Injectable } from '@nestjs/common'
import { Form } from './entities/form.entity'

const formList: Form[] = []

@Injectable()
export class FormRepository {
  create(form: CreateFormDto): Form {
    const newForm: Form = { ...form, id: formList.length.toString() }
    formList.push(newForm)
    return formList[formList.length - 1]
  }

  findAll() {
    return formList
  }

  findOne(userId: string): Form | undefined {
    return formList.find((form) => form.id === userId)
  }

  delete(formId: string): boolean | null {
    const formIndex = formList.findIndex((form) => form.id === formId)
    if (formIndex === -1) {
      return null
    }
    formList.splice(formIndex, 1)
    return true
  }
}
