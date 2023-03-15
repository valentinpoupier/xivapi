import { TestBed } from '@angular/core/testing';

import { FreecompanyService } from './freecompany.service';

describe('FreecompanyService', () => {
  let service: FreecompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreecompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
