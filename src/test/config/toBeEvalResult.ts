const passMessage = <T>(received: string, expected: T) => `received ${received} to be ${expected}`;
const failMessage = <T>(received: string, expected: T) => `received ${received} not to be ${expected}`;

export function toBeEvalResult<T>(received: string, expected: T): jest.CustomMatcherResult {
  const pass: boolean = eval(received) === expected;

  // prettier-ignore
  const message: () => string = pass
    ? () => passMessage(received, expected)
    : () => failMessage(received, expected);

  return { pass, message };
}
