const eval2: (a: number, operator: string, b: number) => number | undefined = (a, operator, b) => {
  if (operator === "+") return a + b;
  if (operator === "-") return a - b;
  if (operator === "*") return a * b;
  if (operator === "/") {
    if (b === 0) return;
    return a / b;
  }
};

/**
 * @description RPN を計算
 * @returns 計算結果 or 不適切な入力なら undefined
 */
export const calculateRpn: (rpn: string) => number | undefined = (rpn) => {
  const stack: number[] = [];

  const operators = ["+", "-", "*", "/"];
  const separator = " ";

  for (const str of rpn.split(separator)) {
    if (operators.includes(str)) {
      const b = stack.pop();
      const a = stack.pop();
      if (a === undefined || b === undefined) return;

      const result = eval2(a, str, b);
      if (result === undefined) return;

      stack.push(result);
    } else {
      stack.push(Number.parseInt(str));
    }
  }

  return stack.pop();
};

/**
 * @description RPN を中置記法に変換
 * @param "1 2 + 3 + 4 +"
 * @returns "((1+2)+3)+4"
 */
export const rpn2infix: (rpn: string) => string = (rpn) => {
  const stack: string[] = [];

  const operators = ["+", "-", "*", "/"];
  const separator = " ";

  for (const str of rpn.split(separator)) {
    if (operators.includes(str)) {
      const b = stack.pop();
      const a = stack.pop();
      stack.push("(" + a + str + b + ")");
    } else {
      stack.push(str);
    }
  }

  const result = stack.pop();
  if (result === undefined) return "";
  return result.slice(1, -1);
};
