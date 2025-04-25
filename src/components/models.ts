export interface FixedLoad {
  amount: number;
  yearlyInstallments: number;
  interestRate: number;
  years: number;
}

export interface FixedLoadValues extends FixedLoad {
  installmentAmount: number;
}
