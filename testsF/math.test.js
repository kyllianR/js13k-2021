import { describe, it, expect } from 'vitest';
import { randFloatSpread } from './src/math.js';
import { mapLinear } from './src/math.js';
import { lerp } from './src/math.js';
import { randFloat } from './src/math.js';
import { clamp } from './src/math.js';

describe('randFloatSpread', () => {
  it('randFloatSpread(1) doit être <= 1', () => {
    expect(randFloatSpread(1)).toBeLessThanOrEqual(1);
  });

  it('randFloatSpread(1) doit être >= -1', () => {
    expect(randFloatSpread(1)).toBeGreaterThanOrEqual(-1);
  });
});

// perso
describe('randFloatSpread', () => {
  it('randFloatSpread(1) doit être <= 0.5', () => {
    expect(randFloatSpread(1)).toBeLessThanOrEqual(0.5);
  });

  it('randFloatSpread(1) doit être >= -0.5', () => {
    expect(randFloatSpread(1)).toBeGreaterThanOrEqual(-0.5);
  });
});

// perso
describe('randFloatSpread', () => {
  it('randFloatSpread(21300) doit être <= 10650', () => {
    expect(randFloatSpread(21300)).toBeLessThanOrEqual(10650);
  });

  it('randFloatSpread(21300) doit être >= -10650', () => {
    expect(randFloatSpread(21300)).toBeGreaterThanOrEqual(-10650);
  });
});

// perso
describe('randFloat', () => {
  it('randFloat(-3, 18) doit être <= 18', () => {
    expect(randFloat(-3, 18)).toBeLessThanOrEqual(18);
  });

  it('randFloat(-3, 18) doit être >= -3', () => {
    expect(randFloat(-3, 18)).toBeGreaterThanOrEqual(-3);
  });
});

// perso *2
describe('clamp', () => {
  it('clamp(4, 2, 3) doit retourner 3', () => {
    expect(clamp(4, 2, 3)).toBe(3);
  });

  it('clamp(9, 2, 11) doit retourner 9', () => {
    expect(clamp(9, 2, 11)).toBe(9);
  });
});

describe('mapLinear', () => {
  it('mapLinear(1, 2, 3, 4, 5) doit retourner 3', () => {
    expect(mapLinear(1, 2, 3, 4, 5)).toBe(3);
  });

  it('mapLinear(1, 20, 3, 40, 5) doit retourner 0.882352941176471', () => {
    expect(mapLinear(1, 20, 3, 40, 5)).toBeCloseTo(0.882352941176471);
  });
});

describe('lerp', () => {
  it('lerp(1, 3, 20) doit retourner 41', () => {
    expect(lerp(1, 3, 20)).toBe(41);
  });

  it('lerp(1.3, -7, 2) doit retourner -15.3', () => {
    expect(lerp(1.3, -7, 2)).toBeCloseTo(-15.3);
  });
});
