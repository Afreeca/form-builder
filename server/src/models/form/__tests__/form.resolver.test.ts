import { Test, TestingModule } from '@nestjs/testing'
import { mock, mockClear } from 'jest-mock-extended'
import { FormResolver } from '../form.resolver'
import { FormService } from '../form.service'

describe('FormResolver', () => {
  let resolver: FormResolver
  const service = mock<FormService>()

  beforeEach(async () => {
    mockClear(service)
    const module: TestingModule = await Test.createTestingModule({
      controllers: [],
      providers: [FormResolver, { provide: FormService, useValue: service }],
    }).compile()

    resolver = module.get<FormResolver>(FormResolver)
  })

  it('should defined form resolver', () => {
    expect(resolver).toBeDefined()
  })
})
