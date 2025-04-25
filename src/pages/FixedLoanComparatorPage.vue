<template>
  <q-page class="row items-start justify-evenly">
    <q-card class="full-width">
      <q-card-section>
        <q-input label="Amount" v-model.number="amount" type="number" />
        <InterestRatesInput :initValues="interestRates" @update="updateInterestRates" flat />
        <YearsInput :initValues="years" @update="updateYears" flat />
      </q-card-section>
    </q-card>
    <FixedLoadTable :entries="values"></FixedLoadTable>
  </q-page>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import FixedLoadUtil from 'src/util/fixed-load-util';
import FixedLoadTable from 'src/components/FixedLoadTable.vue';
import InterestRatesInput from 'src/components/InterestRatesInput.vue';
import YearsInput from 'src/components/YearsInput.vue';

const amount = ref<number>(200000);
const yearlyInstallments = ref<number>(12);
const interestRates = ref<string[]>(['0.02', '0.04', '0.06']);
const years = ref<number[]>([15, 20, 25]);

const values = computed(() =>
  FixedLoadUtil.generateInputs(
    amount.value,
    yearlyInstallments.value,
    interestRates.value.map(parseFloat),
    years.value,
  ),
);

function updateInterestRates(newValues: string[]): void {
  interestRates.value = newValues;
}
function updateYears(newValues: number[]): void {
  years.value = newValues;
}
</script>
