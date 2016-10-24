# Typed fast-json-patch
[![Build Status](https://travis-ci.org/types/npm-fast-json-patch.svg?branch=master)](https://travis-ci.org/types/npm-fast-json-patch)

Typescript Typings for [fast-json-patch](https://www.npmjs.com/package/fast-json-patch).

## Installation
```sh
typings install --save fast-json-patch
```

## Usage

```ts
import { apply } from 'fast-json-patch';

const obj = {
    foo: 1,
    baz: [{
        qux: 'hello'
    }]
};

const results = apply(obj, [{
    op: 'add',
    path: '/baz/0/foo',
    value: 'world'
}]);

console.log(results);
```

[More examples](./test)


## Contributing
You can run them the tests with `npm run build` and `npm run test`.
