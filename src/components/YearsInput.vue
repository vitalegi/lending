<template>
  <q-card>
    <q-card-section class="row q-pa-xs">
      <div># Years</div>
      <q-space />
      <q-btn round color="primary" icon="add" @click="add" />
    </q-card-section>
    <q-card-section>
      <YearInput
        v-for="(year, index) of years"
        :key="index + '_' + year"
        :init-value="year"
        @update="(v) => update(index, v)"
        @remove="() => remove(index)"
      />
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import YearInput from './YearInput.vue';

export interface Props {
  initValues: number[];
}

const props = defineProps<Props>();
const years = ref<number[]>([]);

const emit = defineEmits(['update']);

onBeforeMount(() => {
  years.value = props.initValues;
});

function update(index: number, value: number): void {
  years.value[index] = value;
  emit('update', years.value);
}

function remove(index: number): void {
  years.value.splice(index, 1);
  emit('update', years.value);
}

function add(): void {
  years.value.push(20);
  emit('update', years.value);
}
</script>
