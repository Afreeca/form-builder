import { Test, TestingModule } from '@nestjs/testing'
import { mock } from 'jest-mock-extended'
import { FormRepository } from '../form.repository'
import { FormService } from '../form.service'

describe('FormService', () => {
  let service: FormService
  const mockFormRepository = mock<FormRepository>()

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [FormService, FormRepository],
    })
      .overrideProvider(FormRepository)
      .useValue(mockFormRepository)
      .compile()

    service = module.get<FormService>(FormService)
  })

  test('should be defined', () => {
    expect(service).toBeDefined()
  })
})
