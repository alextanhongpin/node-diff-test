import diff from "deep-diff";
const { observableDiff, applyDiff, applyChange } = diff;

const lhs = ["foo", "bar"];
const rhs = { foo: "bar" };

console.log("difference in type");
console.table(diff(lhs, rhs));
console.table(diff(true, 1));
console.table(diff("foo", "bar"));
console.table(diff(42, "42"));

// The order in array matters.
console.table(diff([1, 2, 3], [3, 2, 1]));

// The order in object doesn't matter.
// This will return undefined, because they match semantically.
console.table(
  diff({ foo: "bar", hello: "world" }, { hello: "world", foo: "bar" })
);

console.table(diff(null, undefined));
console.table(diff(undefined, null));

const source = {
  weather: "sunny",
  temperature: 42,
};
const target = {
  weather: "rainy",
  temperature: 20,
};
const copy = {};

const changes = diff(source, target);

// applyChange(target, source, change)
// source is unused and may be removed.
observableDiff(source, target, function (delta) {
  console.log({ delta });
  if (delta.path[delta.path.length - 1] !== "name") {
    applyChange(copy, null, delta);
  }
});
//console.table(applyChange(target, source, changes[0]));
console.log("applyChange:", { source, target, copy });

// applyDiff(target, source, filter)
console.table(applyDiff(target, source));
console.log("applyDiff:", source, target);
