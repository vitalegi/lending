<template>
  <q-page class="full-width full-height">
    <div class="q-pa-xs row justify-start items-start">
      <div class="col-12 q-pa-xs">
        <div class="q-gutter-md">
          <q-input
            :label="$t('input.amount.label')"
            v-model.number="amount"
            type="number"
            outlined
            stack-label
          />
          <InterestRatesInput :initValues="interestRates" @update="updateInterestRates" flat />
          <YearsInput :initValues="years" @update="updateYears" flat />
        </div>
      </div>
      <div class="col-12">
        <q-option-group
          v-model="panel"
          inline
          :options="[
            { label: $t('lending.fixed.heatmapView.title'), value: 'heatmap' },
            { label: $t('lending.fixed.tableView.title'), value: 'table' },
          ]"
        />

        <q-tab-panels v-model="panel" animated class="shadow-2 rounded-borders">
          <q-tab-panel name="table">
            <div class="text-h6">{{ $t('lending.fixed.tableView.title') }}</div>
            <FixedLoadTable :entries="values"></FixedLoadTable>
          </q-tab-panel>

          <q-tab-panel name="heatmap">
            <div class="text-h6">{{ $t('lending.fixed.heatmapView.interestRates.title') }}</div>
            <FixedLoadHeatmap
              name="Installments"
              :x-axis="interestRates"
              :y-axis="years"
              :values="values"
              mode="installment"
            />
            <div class="text-h6">{{ $t('lending.fixed.heatmapView.totalAmount.title') }}</div>
            <FixedLoadHeatmap
              name="Total"
              :x-axis="interestRates"
              :y-axis="years"
              :values="values"
              mode="total"
            />
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
    <SponsorSpace class="col-12" />
  </q-page>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import FixedLoadUtil from 'src/util/fixed-load-util';
import FixedLoadTable from 'src/components/FixedLoadTable.vue';
import SponsorSpace from 'src/components/SponsorSpace.vue';
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
