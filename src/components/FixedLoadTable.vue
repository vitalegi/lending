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

const columns = [
  {
    name: 'amount',
    required: true,
    label: 'Amount',
    field: (row: FixedLoad) => row.amount,
    format: (val: number) =>
      new Intl.NumberFormat(undefined, {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      }).format(val),
    sortable: true,
  },
  {
    name: 'yearlyInstallments',
    required: true,
    label: 'Yearly Installments',
    field: (row: FixedLoad) => row.yearlyInstallments,
    format: (val: number) => `${val}`,
    sortable: true,
  },
  {
    name: 'interestRate',
    required: true,
    label: 'Interest Rate',
    field: (row: FixedLoad) => row.interestRate,
    format: (val: number) =>
      new Intl.NumberFormat(undefined, {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      }).format(val * 100),
    sortable: true,
  },
  {
    name: 'years',
    required: true,
    label: 'Years',
    field: (row: FixedLoad) => row.years,
    format: (val: number) => `${val}`,
    sortable: true,
  },
  {
    name: 'installmentAmount',
    required: true,
    label: 'Installment',
    field: (row: FixedLoad) =>
      FixedLoadUtil.installmentAmount(
        row.amount,
        row.yearlyInstallments,
        row.interestRate,
        row.years,
      ),
    format: (val: number) =>
      new Intl.NumberFormat(undefined, {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      }).format(val),
    sortable: true,
  },
];
</script>
