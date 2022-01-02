import { calculateRpn } from "./lib/calculateRpn";
import { allCombinations } from "./lib/combination";
import { rpn2infix } from "./lib/rpn2infix";

/**
 * @description solve make10 and return all answers
 * @param inputs Numeric value of type string
 * @param allowableHugeTimeComplexity false: throw the error when inputs.length is not [2,5].
 * @example ["1","2","3","4"] -> ["((1+2)+3)+4", ...]
 */
export function make10(inputs: string[], allowableHugeTimeComplexity = false): string[] {
  if (!allowableHugeTimeComplexity && (inputs.length <= 1 || 6 <= inputs.length)) {
    throw new Error("The length of the argument array must be '2 <= len <= 5'");
  }

  if (inputs.some((i) => !/\d+/.test(i))) {
    throw new Error("inputs must be numeric value");
  }

  // (1) all combinations
  const rpns = allCombinations(inputs);

  // (2) only RPN expressions whose result is 10
  const rpn10 = rpns.filter((rpn) => {
    const result = calculateRpn(rpn);
    if (result === undefined) return false;
    const TOLERANCE = 10 ** -8;
    return Math.abs(result - 10) < TOLERANCE;
  });

  // (3) RPN -> infix notation
  const infixes = rpn10.map((rpn) => rpn2infix(rpn));
  const result = Array.from(new Set(infixes));

  return result;
}
