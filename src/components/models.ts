export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface FixedLoad {
  amount: number;
  yearlyInstallments: number;
  interestRate: number;
  years: number;
}

export interface FixedLoadValues extends FixedLoad {
  installmentAmount: number;
}
