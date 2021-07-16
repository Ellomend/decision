<template>
  <div class="FormContainer q-mt-lg">
    <div class="row">
      <div class="col-8 offset-2 shadow-3">
        <p>foo</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormContainer',
  data () {
    return {
      lastName: '',
      name: 'value',
      patronymic: '',
      sex: 1,
      birthDate: '',
      childrenCount: 0,
      maritalStatus: 0,
      income: 0,
      employmentStatus: 0,
      propertyStatus: false,
      creditStatus: '',
      debtStatus: '',
      creditPayment: ''
    }
  }
}
</script>
