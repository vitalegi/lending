export default class NumberUtil {
  public static readonly DECIMAL_FORMATTER = new Intl.NumberFormat(undefined, {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });

  public static readonly INTEGER_FORMATTER = new Intl.NumberFormat(undefined, {
    maximumFractionDigits: 0,
  });
}
