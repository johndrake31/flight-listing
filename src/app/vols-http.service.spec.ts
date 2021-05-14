import { TestBed } from '@angular/core/testing';

import { VolsHttpService } from './vols-http.service';

describe('VolsHttpService', () => {
  let service: VolsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VolsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
