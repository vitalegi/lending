<template>
  <q-select
    filled
    v-model="model"
    multiple
    emit-value
    use-chips
    use-input
    new-value-mode="add-unique"
    @new-value="newValue"
    stack-label
    :label="$t('input.years.label')"
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
        {{ scope.opt }}
      </q-chip>
      <q-badge v-if="model.length === 0">*none*</q-badge>
    </template>
  </q-select>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';

export interface Props {
  initValues: string[];
}

const props = defineProps<Props>();
const model = ref<string[]>([]);

const emit = defineEmits(['update']);

onBeforeMount(() => {
  model.value = props.initValues;
});

function newValue(
  newValue: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  doneFn: (item?: any, mode?: 'add' | 'add-unique' | 'toggle') => void,
) {
  try {
    const v = parseInt(newValue, 10);
    if (v > 0) {
      doneFn(`${v}`);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    console.debug('Not a number: ', newValue);
  }
}

function update(): void {
  emit('update', model.value);
}
</script>
