import { TestBed } from '@angular/core/testing';

import { PersonInChargeService } from './person-in-charge.service';

describe('PersonInChargeService', () => {
  let service: PersonInChargeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonInChargeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
