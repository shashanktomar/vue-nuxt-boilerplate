# Frequently Asked Questions

## Why flow? Why not TypeScript?

`flow` is a static type checker for `javascript`.
`typescript` on the other hand is a typed superset of `javascript` 
that compiles to plain `javascript`.

Do you see the difference? 
While `typescript` is a brand new language, `flow` is just a tool.
We don't need to change anything in our setup, 
we don't need to rewrite any existing code. 
Just reconfigure your `.eslintrc` and start using types!

By choosing `flow` instead of `typescript` 
we choose `javascript` over a new language.
So, we can write pure `js` and types where we actually need them.
Combining this technique with unit and e2e tests makes:

- our build stable
- our development process pretty fast

We understand that:

1. `typescript` is more mature, it has more language features and typedefs
2. `typescript` is more popular in `Vue`'s world
3. `flow` has serious drawbacks and limitations

Further reading: [`typescript-vs-flowtype`](https://github.com/niieani/typescript-vs-flowtype).

## Why Nuxt?

`Nuxt` offers a thin abstraction layer for `ssr` and building your project.
We have struggled with `ssr` for long enough, and we don't want to go back.

Also, `Nuxt`'s predefined build configuration suits us very well.
Wide choice of plugins also allows solving problems faster.

## Why do you use vscode and not vim/sublime/emacs/webstorm?

First of all, you don't have to use `vscode`. Use the editor you love.
Secondly, `vscode` is free (as in freedom), actively supported, 
has a lot of `js` plugins.

That's why we recommend it.
 