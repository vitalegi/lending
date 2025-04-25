<template>
  <q-select
    filled
    v-model="rates"
    multiple
    emit-value
    use-chips
    use-input
    clearable
    new-value-mode="add-unique"
    @new-value="newValue"
    stack-label
    label="Interest Rates %"
    @update:model-value="update"
  >
    <template v-slot:selected-item="scope">
      <q-chip
        dense
        square
        removable
        @remove="scope.removeAtIndex(scope.index)"
        :tabindex="scope.tabindex"
        color="white"
        text-color="primary"
        class="q-my-none q-ml-xs q-mr-none"
      >
        {{ formatPercentage(scope.opt) }}
      </q-chip>
      <q-badge v-if="rates.length === 0">*none*</q-badge>
    </template>
  </q-select>
</template>

<script setup lang="ts">
import NumberUtil from 'src/util/number-util';
import { onBeforeMount, ref } from 'vue';

export interface Props {
  initValues: string[];
}

const props = defineProps<Props>();
const rates = ref<string[]>([]);

const emit = defineEmits(['update']);

function formatPercentage(value: string) {
  try {
    const v = parseFloat(value) * 100;
    return NumberUtil.DECIMAL_FORMATTER.format(v) + '%';
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return 'err';
  }
}

onBeforeMount(() => {
  rates.value = props.initValues;
});

function newValue(
  newValue: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  doneFn: (item?: any, mode?: 'add' | 'add-unique' | 'toggle') => void,
) {
  try {
    newValue = newValue.replaceAll(',', '.');
    const v = parseFloat(newValue) / 100;
    if (v > 0) {
      doneFn(`${v}`);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    console.debug('Not a number: ', newValue);
  }
}

function update(): void {
  emit('update', rates.value);
}
</script>
