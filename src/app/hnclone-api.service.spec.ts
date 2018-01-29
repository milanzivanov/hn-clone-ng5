import { TestBed, inject } from '@angular/core/testing';

import { HncloneApiService } from './hnclone-api.service';

describe('HncloneApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HncloneApiService]
    });
  });

  it('should be created', inject([HncloneApiService], (service: HncloneApiService) => {
    expect(service).toBeTruthy();
  }));
});
