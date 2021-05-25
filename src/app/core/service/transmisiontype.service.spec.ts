import { TestBed } from '@angular/core/testing';

import { TransmisiontypeService } from './transmisiontype.service';

describe('TransmisiontypeService', () => {
  let service: TransmisiontypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransmisiontypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
