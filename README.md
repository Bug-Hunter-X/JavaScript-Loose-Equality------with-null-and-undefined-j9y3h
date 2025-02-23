# JavaScript Loose Equality (==) with null and undefined

This repository demonstrates a common JavaScript error related to the loose equality operator (`==`) when comparing with `null` and `undefined`.

## Bug Description
In JavaScript, the loose equality operator (`==`) does not differentiate between `null` and `undefined`.  This can lead to unexpected behavior when you intend to specifically check for one or the other.

## Bug Reproduction
The `bug.js` file demonstrates the problem. The `foo` function attempts to handle `null` values, but it also unintentionally handles `undefined` values due to loose equality.

## Solution
The `bugSolution.js` file provides the correct solution using the strict equality operator (`===`).  The strict equality operator performs a type check along with a value check, resulting in more reliable comparisons.

## How to run the code
1. Clone the repository.
2. Open the `bug.js` and `bugSolution.js` file with any code editor.
3. Run the code using Node.js or a similar JavaScript environment.