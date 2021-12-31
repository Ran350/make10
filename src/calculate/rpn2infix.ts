/**
 * @description RPN を中置記法に変換
 * @param "1 2 + 3 + 4 +"
 * @returns "((1+2)+3)+4"
 */
export function rpn2infix(rpn: string): string {
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
}
