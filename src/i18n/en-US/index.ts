export default {
  siteName: 'Lending Simulator',
  navbar: {
    fixedLending: {
      title: 'Fixed',
      caption: 'Fixed Lending',
    },
  },
  lending: {
    fixed: {
      heatmapView: {
        title: 'Heatmap',
        interestRates: {
          title: 'Compare Installments',
        },
        totalAmount: {
          title: 'Compare Total Expenses',
        },
      },
      tableView: {
        title: 'Tabular',
        headers: {
          interestRate: 'IR',
          years: 'Years',
          installmentAmount: 'Installment',
          totalAmount: 'Total',
        },
      },
    },
  },
  input: {
    amount: {
      label: 'Amount',
    },
    interestRates: {
      label: 'Interest Rates (IR)',
    },
    years: {
      label: 'Duration (Years)',
    },
  },
};
