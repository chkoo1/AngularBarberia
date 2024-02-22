import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { accesogerenteGuard } from './accesogerente.guard';

describe('accesogerenteGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => accesogerenteGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
