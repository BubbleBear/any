import { inspect } from 'util';
import any from '../src';

describe('any', () => {
    it('should, in nodejs runtime, print "Object [Any] {}" on solely printed', () => {
        expect(inspect(any)).toBe('Object [Any] {}');
    })

    it('should print access trace on "toString" called', () => {
        expect(any.a.b.c.d.toString()).toBe('a.b.c.d');
        expect(any.a.b.c.d + '').toBe('a.b.c.d');
        expect(`${any.a.b.c.d}`).toBe('a.b.c.d');
    })

    it('should has no side effect when assigned to other objects', () => {
        const target = Object.freeze({});
        Object.assign(target, any);
    })

    it('is not extensible', () => {
        expect(Object.isExtensible(any)).toBe(false);
    })
})
