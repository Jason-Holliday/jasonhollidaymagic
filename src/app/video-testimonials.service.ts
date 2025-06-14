import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoTestimonialsService {

  constructor() { }


  getVideoTestimonials() {
    return [
      { video: '/assets/videos/IMG_0608.MP4', poster: '/assets/thumbnails/IMG_0608.jpg' },
      { video: '/assets/videos/IMG_0609.MP4', poster: '/assets/thumbnails/IMG_0609.jpg' },
      { video: '/assets/videos/IMG_0611.MP4', poster: '/assets/thumbnails/IMG_0611.jpg' },
      { video: '/assets/videos/IMG_0612.MP4', poster: '/assets/thumbnails/IMG_0612.jpg' }
    ];
  }

}
