import { ApiProperty } from '@nestjs/swagger';

export class QueryInput {
  @ApiProperty()
  name: string;
}
