import { TestBed } from '@angular/core/testing';

import { LoreService } from './lore.service';

describe('LoreService', () => {
  let service: LoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
