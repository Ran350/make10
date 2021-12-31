import { calculateRpn } from "./calculateRpn";
import { allCombinations } from "./combination";
import { rpn2infix } from "./rpn2infix";

/**
 * @description make10 を解き，答えの組み合わせを全て返す
 * @param inputs make10 puzzle の入力
 * @param isSafe 処理時間のかからない入力 (2 <= digit <= 5) のみ許容するか
 * @example ["1","2","3","4"] -> ["((1+2)+3)+4", ...]
 */
export function make10(inputs: string[], isSafe = true): string[] {
  if (isSafe && (inputs.length <= 1 || 6 <= inputs.length)) {
    throw new Error("The length of the argument array must be '2 <= len <= 5'");
  }

  const rpns = allCombinations(inputs);

  // 結果が 10 になる RPN 式のみ
  const rpn10 = rpns.filter((rpn) => {
    const result = calculateRpn(rpn);
    if (result === undefined) return false;
    const TOLERANCE = 10 ** -8;
    return Math.abs(result - 10) < TOLERANCE;
  });

  // RPN -> 中置記法 変換
  const infixes = rpn10.map((rpn) => rpn2infix(rpn));
  const result = Array.from(new Set(infixes));

  return result;
}
