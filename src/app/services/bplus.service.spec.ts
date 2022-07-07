import { TestBed } from '@angular/core/testing';

import { BplusService } from './bplus.service';

describe('BplusService', () => {
  let service: BplusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BplusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
