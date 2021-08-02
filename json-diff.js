import { diffString } from "json-diff";

const lhs = ["foo", "bar"];
const rhs = { foo: "bar" };

console.log("difference in type");
console.table(diffString(lhs, rhs));
console.table(diffString(true, 1));
console.table(diffString("foo", "bar"));
console.table(diffString(42, "42"));

// The order in array matters.
console.table(diffString([1, 2, 3], [3, 2, 1]));

// The order in object doesn't matter.
// This will return undefined, because they match semantically.
console.table(
  diffString({ foo: "bar", hello: "world" }, { hello: "world", foo: "bar" })
);

console.table(diffString(null, undefined));
console.table(diffString(undefined, null));

const source = {
  weather: "sunny",
  temperature: 42,
};
const target = {
  weather: "rainy",
  temperature: 20,
};
console.log(diffString(source, target));
