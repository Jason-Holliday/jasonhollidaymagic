import { Component, OnInit } from '@angular/core';
import { TestimonialsService } from '../testimonials.service';
import { VideoTestimonialsService } from '../video-testimonials.service';


interface Testimonial {
  text: string;
  author: string;
  image: string;
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = [];
  videoTestimonials: VideoTestimonial[] = [];
  stars = [1, 2, 3, 4, 5];

  constructor(
    private testimonialsService: TestimonialsService,
    private videoTestimonialsService: VideoTestimonialsService 
  ) {}

  ngOnInit(): void {
    this.testimonials = this.testimonialsService.getTestimonials();

    // Thumbnail als poster setzen
    this.videoTestimonials = this.videoTestimonialsService.getVideoTestimonials().map(video => ({
      video: video.video
    }));
  }
}
