# pure-testing-lecture

The purpose of this repo is to demonstrate how refactorig your code (as much as possible) into ["pure" functions][pure-function] can make testing much, much easier.

## Philosophical Interlude

Once you learn the basics of coding, you'll start to feel confident. You'll be able to implement solutions to problems with some effort, and you may even take a first pass at ["refactoring"][code-refactoring] your code to make it easier to read, and perhaps to eliminate duplication.

What many people don't realize is that, when Brendan Eich first created JavaScript, he wanted to create [Scheme in the browser][scheme-in-the-browser]. However, corporate forces got in the way of his ideal vision, requiring him to make it look _syntactially_ like Java. Nonetheless, he was a functional programmer in his soul, and JavaScript has a lot of roots in FP (e.g., functions as first-class objects, closures).

Some functional programming _concepts_ are valuable even in the absence of a functional programming language. In particular, the concept of ["pure" functions][pure-function] (a function without [side-effects][side-effect]) can make your code not only more _readable_, but much more easily **_tested_**. And that's really the point of this repository: to show a "naive" implementation first, and then to show how one might [refactor][code-refactoring] it into one that is much more easily tested via the use of pure functions.

Enjoy!

## The _Right_ Way to Get Started

1. Clone the `naive-implementation` branch of this repo: `git clone -b naive-implementation git@github.com:LearnersGuild/pure-testing-lecture.git`
2. Inspect the code. The CLI "harness" is in `src/index.js` and most of the actual implementation resides in `src/write-top-crypto-coins.js`.
3. Refactor this code, eliminating any [side-effects][side-effect], by using ["pure" functions][pure-function].

### Stuck?

If you get stuck, you can look at the `pure-refactor` branch, which will show a commit-by-commit refactoring to make things easy to test.

<!-- references -->

[pure-function]: https://en.wikipedia.org/wiki/Pure_function
[side-effect]: https://en.wikipedia.org/wiki/Side_effect_(computer_science)
[code-refactoring]: https://en.wikipedia.org/wiki/Code_refactoring
[functional-programming]: https://en.wikipedia.org/wiki/Functional_programming
[scheme-in-the-browser]: https://brendaneich.com/2008/04/popularity/