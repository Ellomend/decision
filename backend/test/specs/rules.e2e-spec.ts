import { Clause, olderThan, youngerThan } from "../../src/decision/decison/rules/types";
import { QueryInput } from "../../src/decision/dto/QueryInput";
import {
  BehindWithLargePayments,
  FemaleSingle,
  FemaleSingleWithKids,
  LowIncome, makeWeightedDecision,
  MaleSingleWithKids,
  MiddleAgeHaveChild,
  MiddleAgeHaveManyChildren,
  SeniorCreditBehind,
  SingleMale,
  Underage
} from "../../src/decision/decison/rules/compute";

const genericApplicant: QueryInput = {
  income: 12000,
  creditPayment: 5000,
  employmentStatus: 1,
  creditStatus: true,
  sex: 1,
  maritalStatus: 1,
  birthDate: '10.01.2000',
  childrenCount: 1,
  debtStatus: true,
  name: 'Ivan',
  lastName: 'Ivanov',
  patronymic: 'Ivanovich',
  propertyStatus: true
}

describe('Logic testing', () => {

  it('Test age rules', () => {
    expect(youngerThan(19)(genericApplicant)).toEqual(false)
    expect(youngerThan(22)(genericApplicant)).toEqual(true)
    expect(olderThan(18)(genericApplicant)).toEqual(true)
    expect(olderThan(21)(genericApplicant)).toEqual(false)
  });

  it('Test underage clause', () => {
    const childApplicant = {
      ...genericApplicant,
      birthDate: '10.01.2010'
    }
    const clause = new Underage()
    const result = clause.check(childApplicant)
    expect(result).toEqual(5)
  });

  it('Test SingleMale clause', () => {
    const applicant = {
      ...genericApplicant,
      birthDate: '10.01.1970',
      maritalStatus: 0,
      childrenCount: 0
    }

    const clauses: Array<Clause> = [
      new Underage(),
      new SingleMale(),
    ];
    const result = clauses.reduce((acc, curr) => {
      return acc + curr.check(applicant);
    }, 0);
    expect(result).toEqual(2)
  });

  it('Test clauses', () => {
    const applicant = {
      ...genericApplicant
    }

    const clauses: Array<Clause> = [
      new Underage(), // 0
      new SingleMale(), // 0
      new MaleSingleWithKids(), // 0
      new FemaleSingle(), // 0
      new FemaleSingleWithKids(), // 0
      new SeniorCreditBehind(), // 0
      new BehindWithLargePayments(), // 0
      new LowIncome(), // 2
      new MiddleAgeHaveChild(), // 1
      new MiddleAgeHaveManyChildren() // 0
    ];
    const result = clauses.reduce((acc, curr) => {
      return acc + curr.check(applicant);
    }, 0);
    expect(result).toEqual(3)
    const decision = makeWeightedDecision(result)
    expect(decision).toEqual(true)
  });

});
