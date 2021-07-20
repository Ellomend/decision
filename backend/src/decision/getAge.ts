import * as moment from "moment";

export const getAge = (birthDateString: string): number => {
  const today = new Date();
  const birthDate = moment(birthDateString, 'DD.MM.YYYY').toDate();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
