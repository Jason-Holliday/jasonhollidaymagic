import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoTestimonialsService {
  constructor() {}

  getVideoTestimonials() {
    return [
      {
        video: 'IMG_0608.MP4',
      },
      {
        video: 'IMG_0609.MP4',
      },
      {
        video: 'IMG_0611.MP4',
      },
      {
        video: 'IMG_0612.MP4',
      }
    ];
  }
}
