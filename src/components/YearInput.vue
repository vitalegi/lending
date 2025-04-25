<template>
  <q-input
    label="Years"
    v-model.number="yearValue"
    type="number"
    clearable
    @update:model-value="update"
    @clear="onClear"
  >
  </q-input>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';

const yearValue = ref<number>();

export interface Props {
  initValue: number;
}

const props = defineProps<Props>();

const emit = defineEmits(['update', 'remove']);

onBeforeMount(() => {
  yearValue.value = props.initValue;
});

function update(newValue: string | number | null): void {
  if (newValue === null) {
    return;
  }
  if (typeof newValue === 'string') {
    pushValue(parseInt(newValue, 10));
  } else {
    pushValue(newValue);
  }
}

function pushValue(newValue: number): void {
  emit('update', newValue);
}

function onClear(): void {
  emit('remove');
}
</script>
