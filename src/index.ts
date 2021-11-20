import { allCombinations } from "./combination";
import { calculateRpn, rpn2infix } from "./rpn";

/**
 * @description make10 を解き，答えの組み合わせを全て返す
 * @param ["1","2","3","4"]
 * @returns ["((1+2)+3)+4", ...]
 */
export const calculate: (fourDigitsNum: string[]) => string[] = (fourDigitsNum) => {
  if (fourDigitsNum.length <= 1 || 6 <= fourDigitsNum.length) {
    throw new Error("The length of the argument array must be '2 <= len <= 5'");
  }

  const rpns: string[] = allCombinations(fourDigitsNum);

  // 結果が 10 になる RPN 式のみ
  const rpn10 = rpns.filter((rpn) => {
    const result = calculateRpn(rpn);
    if (result === undefined) return false;
    const TOLERANCE = 10 ** -6;
    return Math.abs(result - 10) < TOLERANCE;
  });

  // RPN -> 中置記法 変換
  const infixes = rpn10.map((rpn) => rpn2infix(rpn));

  return infixes;
};
