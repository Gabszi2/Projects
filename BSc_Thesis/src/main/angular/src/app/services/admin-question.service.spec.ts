import {TestBed} from '@angular/core/testing';

import {AdminQuestionService} from './admin-question.service';

describe('AdminQuestionServiceService', () => {
  let service: AdminQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
