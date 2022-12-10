import { Test, TestingModule } from '@nestjs/testing'
import { ObjectNotFoundException } from 'common/exceptions/object-not-found.exception'
import { mock } from 'jest-mock-extended'
import { FormRepository } from '../form.repository'
import { FormService } from '../form.service'

describe('FormService', () => {
  const repo = mock<FormRepository>()
  let service: FormService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [{ provide: FormRepository, useValue: repo }],
    }).compile()

    service = module.get<FormService>(FormService)
  })
})
