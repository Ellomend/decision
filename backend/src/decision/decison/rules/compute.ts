import { QueryInput } from "../../dto/QueryInput";
import {
  Clause,
  greaterThan,
  lessThan,
  olderThan,
  youngerThan
} from "./types";
import {
  behindOnCredit,
  haveSubstantialPayments,
  isFemale,
  isMale,
  isSingle,
  unemployed
} from "./rules";

export const computeWeight = (input: QueryInput) => {
  const clauses: Array<Clause> = [
    new Underage(),
    new SingleMale(),
    new MaleSingleWithKids(),
    new FemaleSingle(),
    new FemaleSingleWithKids(),
    new SeniorCreditBehind(),
    new BehindWithLargePayments(),
    new LowIncome(),
    new MiddleAgeHaveChild(),
    new MiddleAgeHaveManyChildren()
  ];
  return clauses.reduce((acc, curr) => {
    return acc + curr.check(input);
  }, 0);
};

export const makeWeightedDecision = (weight: number) : boolean => {
  return !(weight >= 5)
}

export class Underage extends Clause {
  weight = 5;
  rules = [
    youngerThan(18)
  ];
}

export class SingleMale extends Clause {
  weight = 2;
  rules = [
    olderThan(30),
    isMale,
    lessThan(25000, "income"),
    isSingle,
    lessThan(1, "childrenCount")
  ];
}

export class MaleSingleWithKids extends Clause {
  weight = 3;
  rules = [
    olderThan(30),
    isMale,
    lessThan(30000, "income"),
    isSingle,
    greaterThan(0, "childrenCount")
  ];
}

export class FemaleSingle extends Clause {
  weight: 2;
  rules = [
    olderThan(26),
    isFemale,
    lessThan(22000, "income"),
    isSingle,
    lessThan(1, "childrenCount")
  ];
}

export class FemaleSingleWithKids extends Clause {
  weight = 3;
  rules = [
    olderThan(26),
    isFemale,
    lessThan(28000, "income"),
    isSingle,
    greaterThan(2, "childrenCount")
  ];
}

export class SeniorCreditBehind extends Clause {
  weight = 3;
  rules = [
    olderThan(65),
    behindOnCredit,
    unemployed
  ];
}

export class BehindWithLargePayments extends Clause {
  weight = 3;
  rules = [
    behindOnCredit,
    haveSubstantialPayments
  ];
}

export class LowIncome extends Clause {
  weight = 2;
  rules = [
    lessThan(15000, "income"),
    olderThan(18)
  ];
}

export class MiddleAgeHaveChild extends Clause {
  weight = 1;
  rules = [
    olderThan(18),
    youngerThan(35),
    greaterThan(0, "childrenCount"),
    lessThan(2, "childrenCount")
  ];
}

export class MiddleAgeHaveManyChildren extends Clause {
  weight = 2;
  rules = [
    olderThan(18),
    youngerThan(35),
    greaterThan(1, "childrenCount")
  ];
}
