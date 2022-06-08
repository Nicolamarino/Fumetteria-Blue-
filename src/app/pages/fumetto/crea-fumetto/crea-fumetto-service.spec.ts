import { TestBed } from '@angular/core/testing';

import { CreaFumettoService } from './crea-fumetto-service';

describe('CreaFumettoServiceService', () => {
  let service: CreaFumettoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreaFumettoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
