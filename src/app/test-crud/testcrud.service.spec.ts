import { TestBed } from '@angular/core/testing';

import { TestcrudService } from './testcrud.service';

describe('TestcrudService', () => {
  let service: TestcrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestcrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
