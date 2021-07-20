import { QueryInput } from '../../dto/QueryInput';

export const isMale = (input: QueryInput) => input.sex === 1;

export const isFemale = (input: QueryInput) => input.sex === 0;

export const isMarried = (input: QueryInput) => input.maritalStatus === 1;

export const isSingle = (input: QueryInput) => input.maritalStatus === 0;

export const behindOnCredit = (input: QueryInput) => input.debtStatus;

export const unemployed = (input: QueryInput) => input.employmentStatus === 0;

// Сумма текущих выплат больше 50% от ежемесячного дохода
export const haveSubstantialPayments = (input: QueryInput) => {
  return (input.creditPayment / input.income) * 100 > 50;
};
