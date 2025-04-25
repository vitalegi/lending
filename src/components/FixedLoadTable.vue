<template>
  <q-table
    :columns="columns"
    :rows="entries"
    binary-state-sort
    column-sort-order="ad"
    :pagination="{ sortBy: 'installmentAmount', rowsPerPage: 20 }"
    :rows-per-page-options="[5, 10, 25, 50, 0]"
  >
  </q-table>
</template>

<script setup lang="ts">
import FixedLoadUtil from 'src/util/fixed-load-util';
import type { FixedLoad } from './models';
import NumberUtil from 'src/util/number-util';

export interface Props {
  entries: FixedLoad[];
}

withDefaults(defineProps<Props>(), { entries: () => [] });

const columns = [
  {
    name: 'interestRate',
    required: true,
    label: 'Interest Rate',
    field: (row: FixedLoad) => row.interestRate,
    format: (val: number) => NumberUtil.DECIMAL_FORMATTER.format(val * 100),
    sortable: true,
  },
  {
    name: 'years',
    required: true,
    label: 'Years',
    field: (row: FixedLoad) => row.years,
    format: (val: number) => NumberUtil.INTEGER_FORMATTER.format(val),
    sortable: true,
  },
  {
    name: 'installmentAmount',
    required: true,
    label: 'Installment',
    field: (row: FixedLoad) => FixedLoadUtil.installmentAmount(row),
    format: (val: number) => NumberUtil.INTEGER_FORMATTER.format(val),
    sortable: true,
  },
  {
    name: 'totalAmount',
    required: true,
    label: 'Total Amount',
    field: (row: FixedLoad) => FixedLoadUtil.totalAmount(row),
    format: (val: number) => NumberUtil.INTEGER_FORMATTER.format(val),
    sortable: true,
  },
];
</script>
