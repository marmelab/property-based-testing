require('jasmine-check').install();
const jsc = require('jsverify');
const fc = require('fast-check');

import { negate } from './integers';

describe('Negate', () => {
    it('should return the opposite', () => {
        expect(negate(0)).toBe(-0);
        expect(negate(1)).toBe(-1);
        expect(negate(-3)).toBe(3);
    });

    it('should be idempotent', () => {
        expect(negate(negate(7))).toBe(7);
    });
});

describe('Maths - testcheck', () => {
    check.it('negate is idempotent', gen.int, x => {
        expect(negate(negate(x))).toEqual(x);
    });

    /* does not work
    const genObj = { code: gen.int };
    check.it('negate is idempotent', genObj, obj => {
        expect(negate(negate(obj.code))).toEqual(obj.code);
    });
    */
});

describe('Maths - jsverify', () => {
    it('negate is idempotent', () => {
        expect(
            jsc.checkForall(jsc.integer, x => negate(negate(x)) === x),
        ).toBeTruthy();
    });

    const arbUser = jsc.record({
        name: jsc.asciinestring,
        code: jsc.integer,
    });

    it('tests generation of objects', () => {
        expect(
            jsc.checkForall(
                arbUser,
                ({ name, code }) =>
                    negate(negate(code)) === code && name.length > 0,
            ),
        ).toBeTruthy();
    });
});

describe('Maths - fast-check', () => {
    test('negate is idempotent', () => {
        fc.assert(
            fc.property(fc.integer(), x => {
                expect(negate(negate(x))).toEqual(x);
            }),
        );
    });

    it('tests generation of objects', () => {
        fc.assert(
            fc.property(
                fc.record({
                    name: fc.hexaString().filter(s => s.length > 0),
                    code: fc.integer(),
                }),
                ({ name, code }) => {
                    expect(
                        negate(negate(code)) === code && name.length > 0,
                    ).toBeTruthy();
                },
            ),
        );
    });
});
