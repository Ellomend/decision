import { ApiProperty } from '@nestjs/swagger';

export class QueryInput {
  // Фамилия
  @ApiProperty()
  lastName: string;

  // Имя
  @ApiProperty()
  name: string;

  // Отчество
  @ApiProperty()
  patronymic: string;

  // Пол
  // 0 – женщина
  // 1 – мужчина
  // Обязательное поле
  @ApiProperty()
  sex: number;

  // Дата рождения
  @ApiProperty()
  birthDate: string;

  // Количество несовершеннолетних детей
  @ApiProperty()
  childrenCount: number;

  // Семейное положение
  @ApiProperty()
  maritalStatus: number;

  // Ежемесячный доход
  @ApiProperty()
  income: number;

  // Тип занятости
  // 0 – не работаю
  // 1 – договор
  // 2 – самозанятый
  // 3 – индивидуальный предприниматель
  // Обязательное поле
  @ApiProperty()
  employmentStatus: number;

  // Есть ли недвижимость
  @ApiProperty()
  propertyStatus: boolean;

  // Есть ли непогашенные кредиты
  @ApiProperty()
  creditStatus: boolean;

  // Есть ли задолженности по текущим кредитам
  @ApiProperty()
  debtStatus: boolean;

  // Ежемесячная выплата по текущим кредитам
  @ApiProperty()
  creditPayment: number;
}
