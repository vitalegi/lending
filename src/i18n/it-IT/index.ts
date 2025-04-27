export default {
  siteName: 'Simulatore di prestiti',
  navbar: {
    fixedLending: {
      title: 'Tasso fisso',
      caption: 'Prestiti a tasso fisso',
    },
  },
  lending: {
    fixed: {
      heatmapView: {
        title: 'Heatmap',
        interestRates: {
          title: 'Confronto Rate',
        },
        totalAmount: {
          title: 'Confronto Spesa Totale',
        },
      },
      tableView: {
        title: 'Tabulare',
        headers: {
          interestRate: 'Tasso',
          years: 'Anni',
          installmentAmount: 'Rata',
          totalAmount: 'Totale',
        },
      },
    },
  },
  input: {
    amount: {
      label: 'Quantità',
    },
    interestRates: {
      label: "Tassi d'interesse",
    },
    years: {
      label: 'Durata (anni)',
    },
  },
};
