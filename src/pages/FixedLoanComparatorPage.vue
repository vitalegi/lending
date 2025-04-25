<template>
  <q-page class="full-width full-height">
    <div class="q-pa-md row justify-start items-start">
      <q-card class="col-12">
        <q-card-section>
          <q-input label="Amount" v-model.number="amount" type="number" />
          <InterestRatesInput :initValues="interestRates" @update="updateInterestRates" flat />
          <YearsInput :initValues="years" @update="updateYears" flat />
        </q-card-section>
      </q-card>
      <div class="col-12">
        <q-option-group
          v-model="panel"
          inline
          :options="[
            { label: 'Heatmap', value: 'heatmap' },
            { label: 'Table', value: 'table' },
          ]"
        />

        <q-tab-panels v-model="panel" animated class="shadow-2 rounded-borders">
          <q-tab-panel name="table">
            <div class="text-h6">Table</div>
            <FixedLoadTable :entries="values"></FixedLoadTable>
          </q-tab-panel>

          <q-tab-panel name="heatmap">
            <div class="text-h6">Heatmap</div>
            <FixedLoadHeatmap
              name="Installments"
              :x-axis="interestRates"
              :y-axis="years"
              :values="values"
            />
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import FixedLoadUtil from 'src/util/fixed-load-util';
import FixedLoadTable from 'src/components/FixedLoadTable.vue';
import InterestRatesInput from 'src/components/InterestRatesInput.vue';
import YearsInput from 'src/components/YearsInput.vue';
import FixedLoadHeatmap from 'src/components/FixedLoadHeatmap.vue';

const amount = ref<number>(200000);
const yearlyInstallments = ref<number>(12);
const interestRates = ref<string[]>(['0.01', '0.02', '0.04', '0.06']);
const years = ref<string[]>(['15', '20', '25', '30', '35']);

const panel = ref('heatmap');

const values = computed(() => {
  const ir = interestRates.value ? interestRates.value.map(parseFloat) : [];
  const y = years.value ? years.value.map((v) => parseInt(v, 10)) : [];
  return FixedLoadUtil.generateInputs(amount.value, yearlyInstallments.value, ir, y);
});

function updateInterestRates(newValues: string[]): void {
  interestRates.value = newValues;
}
function updateYears(newValues: string[]): void {
  years.value = newValues;
}
</script>
