import { calculate } from "./calculate";
import { toBeEvalResult } from "../test/config/toBeEvalResult";

beforeAll(() => {
  expect.extend({ toBeEvalResult });
});

describe("2 桁 の make10 の答え", () => {
  test("5,5 -> [5+5] -> 10", () => {
    for (const ans of calculate(["5", "5"])) {
      expect(ans).toBeEvalResult(10);
    }
  });
  test("答えが存在しないとき", () => expect(calculate(["0", "0"])).toEqual([]));
});

describe("4 桁 の make10 の答え", () => {
  test("1,1,9,9 -> [1+(1+(1/9)), ...] -> 10", () => {
    for (const ans of calculate(["1", "1", "9", "9"])) {
      expect(ans).toBeEvalResult(10);
    }
  });
  test("答えが存在しないとき", () => expect(calculate(["0", "0", "0", "0"])).toEqual([]));
});

describe("5 桁 の make10 の答え", () => {
  test("1,8,8,8,8 -> [(((1+8)*8)+8)/8, ...] -> 10", () => {
    for (const ans of calculate(["1", "8", "8", "8", "8"])) {
      expect(ans).toBeEvalResult(10);
    }
  });
  test("答えが存在しないとき", () => expect(calculate(["0", "0", "0", "0", "0"])).toEqual([]));
});
