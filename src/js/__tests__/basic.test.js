// src/js/__tests__/basic.test.js
import { getHealthStatus } from '../basic';

describe('getHealthStatus', () => {
  it('возвращает "healthy" для health > 50', () => {
    expect(getHealthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
  });

  it('возвращает "wounded" для health между 15 и 50', () => {
    expect(getHealthStatus({ name: 'Маг', health: 30 })).toBe('wounded');
  });

  it('возвращает "critical" для health < 15', () => {
    expect(getHealthStatus({ name: 'Маг', health: 10 })).toBe('critical');
  });
});
