import "colors";
import {
  diffChars,
  diffWords,
  diffWordsWithSpace,
  diffSentences,
  diffLines,
} from "diff";

const source = `hello world
name is`;
const target = `foo bar
name is john`;
prettyDiff(diffChars(source, target), "diffChars");
prettyDiff(diffWords(source, target), "diffWords");
prettyDiff(diffWordsWithSpace(source, target), "diffWordsWithSpace");
prettyDiff(diffSentences(source, target), "diffSentences");
prettyDiff(diffLines(source, target), "diffLines");

function prettyDiff(diff, name = "") {
  console.log(name);
  diff.forEach((part) => {
    // green for additions, red for deletions
    // grey for common parts
    const color = part.added ? "green" : part.removed ? "red" : "grey";
    process.stderr.write(part.value[color]);
  });
  console.log("\n");
}
