import { TestBed } from '@angular/core/testing';

import { RegisterfakeApiService } from './registerfake-api.service';

describe('RegisterfakeApiService', () => {
  let service: RegisterfakeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterfakeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
