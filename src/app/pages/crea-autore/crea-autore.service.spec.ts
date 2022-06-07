import { TestBed } from '@angular/core/testing';

import { CreaAutoreService } from './crea-autore.service';

describe('CreaAutoreService', () => {
  let service: CreaAutoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreaAutoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
