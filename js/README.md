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
