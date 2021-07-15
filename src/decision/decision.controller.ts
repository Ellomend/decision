import { Body, Controller, Post } from '@nestjs/common';
import { DecisionService } from './decision.service';
import { QueryInput } from './dto/QueryInput';

@Controller('decision')
export class DecisionController {
  constructor(private decisionService: DecisionService) {}

  @Post()
  query(@Body() input: QueryInput): boolean {
    return this.decisionService.verdict(input);
  }
}
