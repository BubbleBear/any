import assert from 'assert';
import getAny from '../src';

const any = getAny();

assert.equal(any.a.b.c.d, 'a.b.c.d');
