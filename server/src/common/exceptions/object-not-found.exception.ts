import { NotFoundException } from '@nestjs/common'

export class ObjectNotFoundException extends NotFoundException {
  constructor(objectType: string, objectId: string) {
    super(`${objectType} with id '${objectId}' not found`)
  }
}
