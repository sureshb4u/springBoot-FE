import { TestBed, inject } from '@angular/core/testing';

import { Profile.ServiceService } from './profile.service.service';

describe('Profile.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Profile.ServiceService]
    });
  });

  it('should be created', inject([Profile.ServiceService], (service: Profile.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
