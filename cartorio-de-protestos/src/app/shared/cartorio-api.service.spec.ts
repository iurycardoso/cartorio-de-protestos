import { TestBed } from '@angular/core/testing';

import { CartorioApiService } from './cartorio-api.service';

describe('CartorioApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartorioApiService = TestBed.get(CartorioApiService);
    expect(service).toBeTruthy();
  });
});
