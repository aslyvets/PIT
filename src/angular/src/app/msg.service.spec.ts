import { TestBed } from '@angular/core/testing';

import { MsgService } from './msg.service';

describe('ChatService', () => {
  let service: MsgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MsgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
