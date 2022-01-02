import { make10 } from ".";

console.log(make10(["1", "2", "3", "4"]));
// -> [ "((1+2)+3)+4", "((1+2)+4)+3", "(3+4)+(1+2)",
//      ... 51 more items
//    ]

const input = "1199";
console.log(make10(input.split("")));
// -> ["((1/9)+1)*9"]

console.log(make10(["2", "5"]));
// -> ["2*5"]

console.log(make10(["1", "2", "4"]));
// -> ["(1+4)*2"]

console.log(make10(["5", "9", "9", "9", "9"]));
// -> ["((9/9)+(9/9))*5"]
