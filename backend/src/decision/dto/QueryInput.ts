import { ApiProperty } from '@nestjs/swagger';

export class QueryInput {
  // Фамилия
  @ApiProperty({example: 'Ivanov'})
  lastName: string;

  // Имя
  @ApiProperty({example: 'Ivan'})
  name: string;

  // Отчество
  @ApiProperty({example: 'Ivanovich'})
  patronymic: string;

  // Пол
  // 0 – женщина
  // 1 – мужчина
  // Обязательное поле
  @ApiProperty({example: 1})
  sex: number;

  // Дата рождения
  @ApiProperty({example: '10.01.2000'})
  birthDate: string;

  // Количество несовершеннолетних детей
  @ApiProperty({example: 1})
  childrenCount: number;

  // Семейное положение
  // 0 – холост/не замужем
  // 1 – женат/замужем
  @ApiProperty({example: 1})
  maritalStatus: number;

  // Ежемесячный доход
  @ApiProperty({example: 12000})
  income: number;

  // Тип занятости
  // 0 – не работаю
  // 1 – договор
  // 2 – самозанятый
  // 3 – индивидуальный предприниматель
  // Обязательное поле
  @ApiProperty({example: 1})
  employmentStatus: number;

  // Есть ли недвижимость
  @ApiProperty({example: true})
  propertyStatus: boolean;

  // Есть ли непогашенные кредиты
  @ApiProperty({example: true})
  creditStatus: boolean;

  // Есть ли задолженности по текущим кредитам
  @ApiProperty({example: true})
  debtStatus: boolean;

  // Ежемесячная выплата по текущим кредитам
  @ApiProperty({example: 5000})
  creditPayment: number;
}
