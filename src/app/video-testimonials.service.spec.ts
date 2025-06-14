import { TestBed } from '@angular/core/testing';

import { VideoTestimonialsService } from './video-testimonials.service';

describe('VideoTestimonialsService', () => {
  let service: VideoTestimonialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoTestimonialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
