import { apply } from 'fast-json-patch';

const obj = {
    foo: 1,
    baz: [{
        qux: 'hello'
    }]
};

apply(obj, [{
    op: 'add',
    path: '/bar',
    value: [1, 2, 3, 4]
}]);

const results = apply(obj, [{
    op: 'add',
    path: '/baz/0/foo',
    value: 'world'
}]);

console.log(results);
