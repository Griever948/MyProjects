import { TestBed, inject } from '@angular/core/testing';

import { FascicoloService } from './fascicolo.service';

describe('FascicoloService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FascicoloService]
    });
  });

  it('should be created', inject([FascicoloService], (service: FascicoloService) => {
    expect(service).toBeTruthy();
  }));
});
