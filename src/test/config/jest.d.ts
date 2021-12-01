declare namespace jest {
  interface Matchers<R> {
    toBeEvalResult<T>(expected: T): R;
  }

  interface Expect {
    toBeEvalResult<T>(expected: T): any;
  }
}
