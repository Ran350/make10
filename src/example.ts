import { calculate } from "./calculate/calculate";

console.log(calculate(["1", "2", "3", "4"]));
// -> [ "((1+2)+3)+4", "((1+2)+4)+3", "(3+4)+(1+2)",
//      ... 51 more items
//    ]

const input = "1199";
console.log(calculate(input.split("")));
// -> ["((1/9)+1)*9"]

console.log(calculate(["2", "5"]));
// -> ["2*5"]

console.log(calculate(["1", "2", "4"]));
// -> ["(1+4)*2"]

console.log(calculate(["5", "9", "9", "9", "9"]));
// -> ["((9/9)+(9/9))*5"]
