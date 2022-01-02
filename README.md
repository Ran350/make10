<div align="center">

# make10

[![GitHub version](https://badge.fury.io/gh/ran350%2Fmake10.svg)](https://badge.fury.io/gh/ran350%2Fmake10)
![Code Check](https://github.com/Ran350/make10/workflows/CI/badge.svg)

</div>

the npm library that solving `Make 10 Puzzle`
> `Make 10 Puzzle` is the game that making 10 through using only 4 numbers and +－×÷.

## Demo
You can play it in [this web app](https://ran350.github.io/make10-app/).

## Install
```sh
yarn add @ran350/make10
or
npm install @ran350/make10
```

Run the following command, if it gives the error such as `error https://npm.pkg.github.com/download/@ran350/make10/(VERSION)/(HASH): Integrity checked failed for "@ran350/make10" (none of the specified algorithms are supported)`.
```sh
yarn add @ran350/make10 --update-checksums
```

## Example
```js
import { make10 } from "@ran350/make10";

console.log(make10(["1", "2", "3", "4"]));
// -> [ "((1+2)+3)+4", "((1+2)+4)+3", "(3+4)+(1+2)",
//      ... 51 more items
//    ]

console.log(make10(["1", "1", "9", "9"]));
// -> ["((1/9)+1)*9"]

console.log(make10(["2", "5"]));
// -> ["2*5"]

console.log(make10(["1", "2", "4"]));
// -> ["(1+4)*2"]

console.log(make10(["5", "9", "9", "9", "9"]));
// -> ["((9/9)+(9/9))*5"]
```

## Algorithm
See [here](https://github.com/Ran350/make10/wiki/Algorithm).
