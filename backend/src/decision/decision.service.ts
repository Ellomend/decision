import { Injectable } from '@nestjs/common';
import { QueryInput } from './dto/QueryInput';
import { computeWeight, makeWeightedDecision } from "./decison/rules/compute";

@Injectable()
export class DecisionService {
  verdict(input: QueryInput) {
    return this.makeDecision(this.calculateWeight(input));
  }

  calculateWeight(input: QueryInput): number {
    return computeWeight(input);
  }

  makeDecision(weight: number): boolean {
    return makeWeightedDecision(weight)
  }
}
