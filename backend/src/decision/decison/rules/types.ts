import { QueryInput } from "../../dto/QueryInput";
import { getAge } from "../../getAge";

export interface IRuleFunc {
  (input: QueryInput): boolean;
}

interface IClause {
  weight: number;
  rules: Array<IRuleFunc>;
  check: {
    (input: QueryInput): number;
  };
}

export class Clause implements IClause {
  public weight = 0;
  public rules = [];

  public check(input: QueryInput) {
    return this.rules.every((f) => f(input)) ? this.weight : 0;
  }
}

export interface IAgeRuleFactory {
  (limit: number): IRuleFunc;
}
export interface ILimitFactory {
  (limit: number, prop: string): IRuleFunc;
}

export const youngerThan: IAgeRuleFactory = (limit: number): IRuleFunc => {
  return (input: QueryInput) => {
    return getAge(input.birthDate) < limit;
  };
};

export const olderThan: IAgeRuleFactory = (limit: number): IRuleFunc => {
  return (input: QueryInput) => {
    return getAge(input.birthDate) > limit;
  };
};

export const greaterThan: ILimitFactory = (limit: number, prop: string) => {
  return (input: QueryInput) => input[prop] > limit;
};

export const lessThan: ILimitFactory = (limit: number, prop: string) => {
  return (input: QueryInput) => input[prop] < limit;
};
