<template>
  <q-input
    label="Percentage (%)"
    v-model.number="rateValue"
    type="number"
    clearable
    @update:model-value="update"
    @clear="onClear"
  >
  </q-input>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';

const rateValue = ref<number>();

export interface Props {
  initValue: number;
}

const props = defineProps<Props>();

const emit = defineEmits(['update', 'remove']);

onBeforeMount(() => {
  console.info('before mount');
  rateValue.value = props.initValue * 100;
});

function update(newValue: string | number | null): void {
  if (newValue === null) {
    return;
  }
  if (typeof newValue === 'string') {
    pushValue(parseFloat(newValue));
  } else {
    pushValue(newValue);
  }
}

function pushValue(newValue: number): void {
  const v = newValue / 100;
  console.info('new value', v);
  emit('update', v);
}

function onClear(): void {
  emit('remove');
}
</script>
