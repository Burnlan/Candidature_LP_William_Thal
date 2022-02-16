import { TestBed } from '@angular/core/testing';

import { BiscuitsService } from './biscuits.service';

describe('BiscuitsService', () => {
  let service: BiscuitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiscuitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
