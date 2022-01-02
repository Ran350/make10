/**
 * @description RPN を計算
 * @returns 計算結果 or 不適切な入力なら undefined
 */
export function calculateRpn(rpn: string): number | undefined {
  const stack: number[] = [];

  const operators = ["+", "-", "*", "/"];
  const separator = " ";

  for (const str of rpn.split(separator)) {
    if (operators.includes(str)) {
      const b = stack.pop();
      const a = stack.pop();
      if (a === undefined || b === undefined) return;

      const result = calc(a, str, b);
      if (result === undefined) return;

      stack.push(result);
    } else {
      stack.push(Number.parseInt(str));
    }
  }

  return stack.pop();
}

function calc(a: number, operator: string, b: number): number | undefined {
  if (operator === "+") return a + b;
  if (operator === "-") return a - b;
  if (operator === "*") return a * b;
  if (operator === "/") {
    if (b === 0) return;
    return a / b;
  }
}
