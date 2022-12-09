import { FormModule } from './models/form/form.module'
import { ApolloModule } from 'providers/apollo.module'
import { Module } from '@nestjs/common'

@Module({
  imports: [ApolloModule, FormModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
