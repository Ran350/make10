import { calculate } from "../..";
import { toBeEvalResult } from "../config/toBeEvalResult";

beforeEach(() => {
  expect.extend({ toBeEvalResult });
});

// prettier-ignore
describe.each([
  "55", "19", "99",
  "127", "234", "111",
  "1234", "1199", "1378", "1111",
  "12345", "18888", "11111"
])("calculate()", (input) => {
  test(`${input}`, () => {
    for (const ans of calculate(input.split(""))){
      expect(ans).toBeEvalResult(10);
    }
  });
});
