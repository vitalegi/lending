<template>
  <q-page class="row items-center justify-evenly">
    <q-input label="Amount" v-model.number="amount" type="number" />
    <FixedLoadTable :entries="values"></FixedLoadTable>
  </q-page>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import FixedLoadUtil from 'src/util/fixed-load-util';
import FixedLoadTable from 'src/components/FixedLoadTable.vue';

const amount = ref<number>(200000);
const yearlyInstallments = ref<number>(12);
const interestRates = ref<number[]>([0.02, 0.04, 0.06]);
const years = ref<number[]>([10, 15, 20, 25, 30, 35]);

const values = computed(() =>
  FixedLoadUtil.generateInputs(
    amount.value,
    yearlyInstallments.value,
    interestRates.value,
    years.value,
  ),
);
</script>
