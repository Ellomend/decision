<template>
  <div class="q-my-lg" style="max-width: 300px">
    <p >Дата рождения: {{value}}</p>
    <q-field :model-value="value" :rules="[notEmptyString, birthDateValidation]">
      <q-date
        :model-value="value"
        @update:model-value="updateValue"
        minimal
        mask="DD.MM.YYYY"
        :options="optionsFn"
      />
    </q-field>
  </div>
</template>
<script>
import { rulesMixin } from 'components/rulesMixin'

export default {
  name: 'DateInput',
  mixins: [rulesMixin],
  props: ['value'],
  methods: {
    updateValue (v) {
      this.$emit('input', v)
    },
    optionsFn (date) {
      return date >= '1900/01/01'
    }
  }
}
</script>
