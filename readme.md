<div align="center">
    <img src="assets/img/axolotl.gif">
    <h1>t a b  online</h1>
</div>

### What is  t a b?

[`t a b`](https://github.com/newtykins/tab) is a minimal esoteric programming language for the 23rd century. It is pretty much the exact same thing as [Small](https://esolangs.org/wiki/Small), but even more arbitrary and harder to read!

### So what is  t a b  online?
`t a b` online is an online compiler and interpreter for `t a b`! It uses the JavaScript [compiler](https://github.com/newtykins/tab/blob/main/compilers/javascript.js) and [interpreter](https://github.com/newtykins/tab/blob/main/interpreters/javascript.js) to function.

### How does  t a b  work?

It has 2 commands:

- " " (space) increments the accumulator.
- "   " (tab) outputs the accumulator as an ASCII char.

When the accumulator reaches 255, it resets back to 0, and a command is skipped.

<sub>See the code's license <a href="license.md">here.</sub>
