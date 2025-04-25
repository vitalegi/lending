<template>
  <div ref="chartRef" class="chart"></div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, onUpdated, ref } from 'vue';

import * as echarts from 'echarts';
import type { FixedLoad } from './models';
import ArrayUtil from 'src/util/array-util';
import FixedLoadUtil from 'src/util/fixed-load-util';
import NumberUtil from 'src/util/number-util';

interface Props {
  name: string;
  values: FixedLoad[];
}

const props = defineProps<Props>();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const chartRef = ref<any>(null);

let chart: echarts.ECharts | undefined = undefined;

function load(data: Props) {
  if (!chart) {
    chart = echarts.init(chartRef.value);
  }

  const xAxis = ArrayUtil.distinct(data.values.map((v) => v.years)).sort((a, b) =>
    a < b ? -1 : 1,
  );

  const yAxis = ArrayUtil.distinct(data.values.map((v) => v.interestRate)).sort((a, b) =>
    a < b ? -1 : 1,
  );
  const values = data.values.map((v) => [
    xAxis.indexOf(v.years),
    yAxis.indexOf(v.interestRate),
    FixedLoadUtil.installmentAmount(v),
  ]);

  const max = Math.max(...data.values.map((e) => FixedLoadUtil.installmentAmount(e)));
  const min = Math.min(...data.values.map((e) => FixedLoadUtil.installmentAmount(e)));

  const option = {
    tooltip: {
      position: 'top',
    },
    grid: {
      height: '50%',
      top: '10%',
    },
    xAxis: {
      type: 'category',
      data: xAxis,
      splitArea: {
        show: true,
      },
    },
    yAxis: {
      type: 'category',
      data: yAxis,
      splitArea: {
        show: true,
      },
      axisLabel: {
        formatter: function (value: number) {
          return NumberUtil.DECIMAL_FORMATTER.format(100 * value);
        },
        rotate: 45,
      },
    },
    visualMap: {
      min: min,
      max: max,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: '0%',
    },
    series: [
      {
        name: data.name,
        type: 'heatmap',
        data: values,
        label: {
          show: true,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          formatter: (params: any) => {
            if (params.value && params.value.length > 0) {
              return NumberUtil.INTEGER_FORMATTER.format(params.value[2]);
            }
            return '';
          },
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };
  chart.setOption(option, { replaceMerge: ['series'] });
}

function unload() {
  if (chart) {
    chart.dispose();
    chart = undefined;
  }
}

onMounted(() => {
  load(props);
});

onUpdated(() => {
  load(props);
});

onBeforeUnmount(() => {
  unload();
});
</script>

<style scoped lang="scss">
.chart {
  width: 100%;
  height: 400px;
}
</style>
