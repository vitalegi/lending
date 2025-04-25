export default class ArrayUtil {
  public static distinct<E>(list: E[]): E[] {
    return [...new Set(list)];
  }
}
