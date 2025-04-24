import type { FixedLoad } from 'src/components/models';

export default class FixedLoadUtil {
  public static installmentAmount(
    amount: number,
    yearlyInstallments: number,
    interestRate: number,
    years: number,
  ): number {
    const r = interestRate / yearlyInstallments;
    const totalInstallments = years * yearlyInstallments;

    const p1 = Math.pow(r + 1, totalInstallments);
    const p2 = p1 - 1;
    return (amount * r * p1) / p2;
  }

  public static generateInputs(
    amount: number,
    yearlyInstallments: number,
    interestRates: number[],
    years: number[],
  ): FixedLoad[] {
    const out = new Array<FixedLoad>();
    for (const interestRate of interestRates) {
      for (const year of years) {
        out.push({
          amount: amount,
          yearlyInstallments: yearlyInstallments,
          interestRate: interestRate,
          years: year,
        });
      }
    }
    return out;
  }
}
