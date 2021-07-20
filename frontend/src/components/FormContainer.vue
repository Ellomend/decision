<template>
  <div class="FormContainer q-my-lg">
    <div class="row" v-if="formStatus === 0">
      <div class="col-8 offset-2 shadow-3 q-pa-md">
        <q-form
          @submit="check"
          class="q-gutter-md"
        >
          <q-input v-model="name" label="Имя" :rules="[notEmptyString]"/>
          <q-input v-model="lastName" label="Фамилия" :rules="[notEmptyString]"/>
          <q-input v-model="patronymic" label="Отчество" :rules="[notEmptyString]"/>

          <q-radio v-model="sex" :val="1" label="мужчина" />
          <q-radio v-model="sex" :val="0" label="женщина" />

          <DateInput :value="birthDate" @input="input"/>

          <q-input v-model="childrenCount" label="Количество несовершеннолетних детей" type="number" :rules="[notEmptyString]" class="q-mt-md"/>

          <q-radio v-model="maritalStatus" :val="0" label="холост/не замужем" />
          <q-radio v-model="maritalStatus" :val="1" label="женат/замужем" />

          <q-input v-model="income" label="Ежемесячный доход" type="number" :rules="[notEmptyString]"/>

          <p class="q-mt-md">Тип занятости:</p>
          <q-radio v-model="employmentStatus" :val="0" label="не работаю" />
          <q-radio v-model="employmentStatus" :val="1" label="договор" />
          <q-radio v-model="employmentStatus" :val="2" label="самозанятый" />
          <q-radio v-model="employmentStatus" :val="3" label="индивидуальный предприниматель" />

          <p class="q-mt-md">Есть ли недвижимость:</p>
          <q-radio v-model="propertyStatus" :val="false" label="Нет" />
          <q-radio v-model="propertyStatus" :val="true" label="Есть" />

          <p class="q-mt-md">Есть ли непогашенные кредиты:</p>
          <q-radio v-model="creditStatus" :val="false" label="Нет" />
          <q-radio v-model="creditStatus" :val="true" label="Есть" />

          <p class="q-mt-md">Есть ли задолженности по текущим кредитам:</p>
          <q-radio v-model="debtStatus" :val="false" label="Нет" />
          <q-radio v-model="debtStatus" :val="true" label="Есть" />

          <q-input v-model="creditPayment" label="Ежемесячная выплата по текущим кредитам" type="number" :rules="[notEmptyString]"/>

          <div class="q-my-md">
            <q-btn color="primary" label="Проверить" type="submit" />
          </div>
        </q-form>
      </div>
    </div>
    <div class="row" v-if="formStatus === 1">
      <div class="col-8 offset-2 shadow-3 q-pa-md text-center">
        <h3>Одобрение в выдаче кредита</h3>
        <q-btn color="primary" label="Ок" @click="formStatus = 0"/>
      </div>
    </div>
    <div class="row" v-if="formStatus === 2">
      <div class="col-8 offset-2 shadow-3 q-pa-md text-center">
      <h3>Отказ в выдаче кредита</h3>
      <q-btn color="primary" label="Ок" @click="formStatus = 0"/>
    </div>
  </div>
  </div>
</template>

<script>
import { rulesMixin } from 'components/rulesMixin'
import DateInput from 'components/DateInput'

export default {
  name: 'FormContainer',
  components: { DateInput },
  mixins: [rulesMixin],
  data () {
    return {
      formStatus: 0,
      lastName: '',
      name: '',
      patronymic: '',
      sex: 1,
      birthDate: '',
      childrenCount: '0',
      maritalStatus: 0,
      income: '0',
      employmentStatus: 0,
      propertyStatus: false,
      creditStatus: false,
      debtStatus: false,
      creditPayment: '0'
    }
  },
  computed: {
    sexComputed: {
      get () {
        return !!this.sex
      },
      set (val) {
        this.sex = val ? 1 : 0
      }
    }
  },
  methods: {
    async check () {
      const request = {
        lastName: this.lastName,
        name: this.name,
        patronymic: this.patronymic,
        sex: this.sex,
        birthDate: this.birthDate,
        childrenCount: Number(this.childrenCount),
        maritalStatus: this.maritalStatus,
        income: Number(this.income),
        employmentStatus: this.employmentStatus,
        propertyStatus: this.propertyStatus,
        creditStatus: this.creditStatus,
        debtStatus: this.debtStatus,
        creditPayment: Number(this.creditPayment)
      }
      const res = await this.$api.post('/decision', request)
        .catch(() => {
          this.$q.notify('Ошибка запроса в API')
        })
      if (res.data) {
        this.formStatus = 1
      } else {
        this.formStatus = 2
      }
    },
    input (v) {
      this.birthDate = v
    }
  }
}
</script>
