import { describe, it, expect } from 'vitest';
import { randFloatSpread } from './math.js';
import { mapLinear } from './math.js';
import { lerp } from './math.js';

describe('randFloatSpread', () => {

    it('randFloatSpread(1) doit être <= 1', () => {
        expect(randFloatSpread(1)).toBeLessThanOrEqual(1);
    });

    it('randFloatSpread(1) doit être >= -1', () => {
        expect(randFloatSpread(1)).toBeGreaterThanOrEqual(-1);
    });

});

describe('mapLinear', () => {
    it('mapLinear(1, 2, 3, 4, 5) doit retourner 3', () => {
        expect(mapLinear(1, 2, 3, 4, 5,)).toBe(3);
    });

    it('mapLinear(1, 20, 3, 40, 5) doit retourner 0.882352941176471', () => {
        expect(mapLinear(1, 20, 3, 40, 5)).toBe(0.882352941176471);
    });
})

describe('lerp', () => {

    it('lerp(1, 3, 20) doit retourner 41', () => {
        expect(lerp(1, 3, 20)).toBe(41);
    });

    it('lerp(1.3, -7, 2) doit retourner -15.3', () => {
        expect(lerp(1.3, -7, 2)).toBe(-15.3);
    });

});