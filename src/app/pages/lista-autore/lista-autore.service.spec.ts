import { TestBed } from '@angular/core/testing';

import { ListaAutoreService } from './lista-autore.service';

describe('ListaAutoreService', () => {
  let service: ListaAutoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaAutoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
