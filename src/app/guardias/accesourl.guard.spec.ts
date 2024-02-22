import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { accesourlGuard } from './accesourl.guard';

describe('accesourlGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => accesourlGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
