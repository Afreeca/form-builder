import { Module } from '@nestjs/common'
import { FormService } from 'models/form/form.service'
import { FormRepository } from './form.repository'
import { FormResolver } from './form.resolver'

@Module({
  imports: [],
  controllers: [],
  providers: [FormRepository, FormService, FormResolver],
})
export class FormModule {}
