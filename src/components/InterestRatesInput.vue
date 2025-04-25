<template>
  <q-card>
    <q-card-section class="row q-pa-xs">
      <div>Interest Rates</div>
      <q-space />
      <q-btn round color="primary" icon="add" @click="add" />
    </q-card-section>
    <q-card-section>
      <InterestRateInput
        v-for="(rate, index) of rates"
        :key="index + '_' + rate"
        :init-value="rate"
        @update="(v) => update(index, v)"
        @remove="() => remove(index)"
      />
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import InterestRateInput from './InterestRateInput.vue';

export interface Props {
  initRates: number[];
}

const props = defineProps<Props>();
const rates = ref<number[]>([]);

const emit = defineEmits(['update']);

onBeforeMount(() => {
  console.info('before mount');
  rates.value = props.initRates;
});

function update(index: number, value: number): void {
  rates.value[index] = value;
  emit('update', rates.value);
}

function remove(index: number): void {
  rates.value.splice(index, 1);
  emit('update', rates.value);
}

function add(): void {
  rates.value.push(0.0125);
  emit('update', rates.value);
}
</script>
