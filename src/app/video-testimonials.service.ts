import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoTestimonialsService {
  constructor() {}

  getVideoTestimonials() {
    return [
      {
        video: 'public/IMG_0608.MP4',
        poster: 'public/IMG_0608.jpg'
      },
      {
        video: 'public/IMG_0609.MP4',
        poster: 'public/IMG_0609.jpg'
      },
      {
        video: 'public/IMG_0611.MP4',
        poster: 'public/IMG_0611.jpg'
      },
      {
        video: 'public/IMG_0612.MP4',
        poster: 'public/IMG_0612.jpg'
      }
    ];
  }
}
