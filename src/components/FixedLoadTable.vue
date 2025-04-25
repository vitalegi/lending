<template>
  <q-table :columns="columns" :rows="entries"> </q-table>
</template>

<script setup lang="ts">
import FixedLoadUtil from 'src/util/fixed-load-util';
import type { FixedLoad } from './models';

export interface Props {
  entries: FixedLoad[];
}

withDefaults(defineProps<Props>(), { entries: () => [] });

const decimalFormatter = new Intl.NumberFormat(undefined, {
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
});

const integerFormatter = new Intl.NumberFormat(undefined, {
  maximumFractionDigits: 0,
});

const columns = [
  {
    name: 'interestRate',
    required: true,
    label: 'Interest Rate',
    field: (row: FixedLoad) => row.interestRate,
    format: (val: number) => decimalFormatter.format(val * 100),
    sortable: true,
  },
  {
    name: 'years',
    required: true,
    label: 'Years',
    field: (row: FixedLoad) => row.years,
    format: (val: number) => integerFormatter.format(val),
    sortable: true,
  },
  {
    name: 'installmentAmount',
    required: true,
    label: 'Installment',
    field: (row: FixedLoad) => FixedLoadUtil.installmentAmount(row),
    format: (val: number) => integerFormatter.format(val),
    sortable: true,
  },
  {
    name: 'totalAmount',
    required: true,
    label: 'Total Amount',
    field: (row: FixedLoad) => FixedLoadUtil.totalAmount(row),
    format: (val: number) => integerFormatter.format(val),
    sortable: true,
  },
];
</script>
