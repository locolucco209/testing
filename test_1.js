var test = require('./testing');

test.assert(6, add(2, 4), "2 + 4 === 6")
test.assert_true((1 + 1 === 2), "you are the man!")
test.assert_false((1 + 1 === 8), "you suck!")

function add(a, b) {
    return a + b;
}