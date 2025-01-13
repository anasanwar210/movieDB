import { TestBed } from '@angular/core/testing';

import { STmdbService } from './s-tmdb.service';

describe('STmdbService', () => {
  let service: STmdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(STmdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
