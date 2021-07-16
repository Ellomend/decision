import { Injectable } from '@nestjs/common';
import { QueryInput } from './dto/QueryInput';

@Injectable()
export class DecisionService {
  verdict(input: QueryInput) {
    return this.makeDecision(this.calculateWeight(input));
  }

  calculateWeight(input: QueryInput) {
    return 10;
  }

  makeDecision(weight: number) {
    return !!(weight / 2);
  }
}
