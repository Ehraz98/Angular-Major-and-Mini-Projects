import { TestBed } from '@angular/core/testing';

import { EhrazLibService } from './ehraz-lib.service';

describe('EhrazLibService', () => {
  let service: EhrazLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EhrazLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
