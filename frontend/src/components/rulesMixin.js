import moment from 'moment'

export const rulesMixin = {
  methods: {
    notEmptyString (val) {
      return !!val.length || 'Обязательное поле'
    },
    birthDateValidation (birthdayString) {
      // Допустимый возраст клиента от 14 до 65 лет
      const age = this.calculateAge(birthdayString)
      return (age >= 14 && age <= 65) || 'Допустимый возраст от 14 до 65 лет'
    },
    // stackOverflow
    calculateAge (birthdayString) {
      const today = new Date()
      const birthDate = moment(birthdayString, 'DD.MM.YYYY').toDate()
      let age = today.getFullYear() - birthDate.getFullYear()
      const m = today.getMonth() - birthDate.getMonth()
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--
      }
      return age
    }
  }
}
