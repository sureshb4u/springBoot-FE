import { TestBed, inject } from '@angular/core/testing';

import { NewTaskService } from './new-task.service';

describe('NewTaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewTaskService]
    });
  });

  it('should be created', inject([NewTaskService], (service: NewTaskService) => {
    expect(service).toBeTruthy();
  }));
});
