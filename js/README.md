# String Calculator Kata

My implementation of the popular String Calculator Kata (original description: http://osherove.com/tdd-kata-1) in JavaScript up to step 6, which means it does the following:
* sums an unlimited amount of comma separated numbers provided as a string
* allows for custom separators to be defined at the beginning of the string using the format `//[delimiter]\n[your numbers]`
* throws an exception if negative numbers are detected
* filters out numbers larger than 1000

## You will need

* Node, installed from https://nodejs.org
* Yarn (https://yarnpkg.com) and run `yarn install`

## Running from CLI

1. Start the node REPL

```
node
```

2. Require the add function

```js
const add = require('./')
```

3. Use the `add` function

```js
add('1,2,3')
```

## Testing

Just run `yarn test`.

The tests are organized in steps that correspond to steps 1-6 of the kata and can unsurprisingly be found in the `test` directory.
