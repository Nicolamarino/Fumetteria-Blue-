import { TestBed } from '@angular/core/testing';

import { AggiornaCategorieService } from './aggiorna-categorie.service';

describe('AggiornaCategorieService', () => {
  let service: AggiornaCategorieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AggiornaCategorieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
