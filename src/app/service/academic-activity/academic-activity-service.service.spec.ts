import { TestBed } from '@angular/core/testing';

import { AcademicActivityServiceService } from './academic-activity-service.service';

describe('AcademicActivityServiceService', () => {
  let service: AcademicActivityServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcademicActivityServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
