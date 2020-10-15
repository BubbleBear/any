import any from '../src';

console.log(any.a.b.c.d + '')

const a = {
    s: {
        d: {
            f: 'e'
        }
    }
};

const x = Object.assign(a, any);

console.log(x)
