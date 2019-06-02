import { TestBed } from '@angular/core/testing';

import { MiddleManService } from './middle-man.service';

describe('MiddleManService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MiddleManService = TestBed.get(MiddleManService);
    expect(service).toBeTruthy();
  });
});
