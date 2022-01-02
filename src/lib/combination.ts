/**
 * @description 演算の全ての組み合わせを RPN で返す
 * @param ["1","2","3","4"]
 * @returns ["1 2 + 3 + 4 +", ...]
 */
export function allCombinations(nums: string[]): string[] {
  let combs = reduceDigits(nums);

  for (let i = 0; i < nums.length - 2; i++) {
    combs = combs.map((comb) => reduceDigits(comb)).flat();
  }

  const ans = combs.flat();

  // 重複削除
  return Array.from(new Set(ans));
}

/**
 * @description nC2 の，選ばれる組み合わせを true，それ以外を false として返す
 * @param nC2のn
 * @returns [[true,true,false],[true,false,true],[false,true,true]]
 */
function nC2(num: number): boolean[][] {
  const flags: boolean[][] = [];

  for (let i = 0; i < num - 1; i++) {
    for (let j = i + 1; j < num; j++) {
      const list = new Array(num).fill(false);
      list[i] = list[j] = true;
      flags.push(list);
    }
  }

  return flags;
}

/**
 * @description n 個の数字から 2 つ選んで n-1 個の数字に
 * @param ["1","2","3"]
 * @returns [["1 2 + ","3"],["1 2 - ","3"],...]
 */
function reduceDigits(nums: string[]): string[][] {
  const sep = " ";
  const rpnOperates = [
    (a: string, b: string) => a + sep + b + sep + "+",
    (a: string, b: string) => a + sep + b + sep + "-",
    (a: string, b: string) => b + sep + a + sep + "-",
    (a: string, b: string) => a + sep + b + sep + "*",
    (a: string, b: string) => a + sep + b + sep + "/",
    (a: string, b: string) => b + sep + a + sep + "/",
  ];

  const result: string[][] = [];

  for (const flags of nC2(nums.length)) {
    for (const operate of rpnOperates) {
      const trues = nums.filter((num, i) => flags[i]);
      const falses = nums.filter((num, i) => !flags[i]);

      const rpn = operate(trues[0], trues[1]);

      result.push([rpn, ...falses]);
    }
  }
  return result;
}
