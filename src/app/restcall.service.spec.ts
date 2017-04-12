/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RestcallService } from './restcall.service';

describe('RestcallService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestcallService]
    });
  });

  it('should ...', inject([RestcallService], (service: RestcallService) => {
    expect(service).toBeTruthy();
  }));
});
