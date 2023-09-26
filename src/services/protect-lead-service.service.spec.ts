import { TestBed } from '@angular/core/testing';

import { ProtectLeadServiceService } from './protect-lead-service.service';

describe('ProtectLeadServiceService', () => {
  let service: ProtectLeadServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProtectLeadServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
