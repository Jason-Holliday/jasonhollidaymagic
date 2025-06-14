import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoTestimonialsService {

  constructor() { }


  getVideoTestimonials() {
    return [
      { video: 'IMG_0608.MP4', poster: 'IMG_0608.jpg' },
      { video: 'IMG_0609.MP4', poster: 'IMG_0609.jpg' },
      { video: 'IMG_0611.MP4', poster: 'IMG_0611.jpg' },
      { video: 'IMG_0612.MP4', poster: 'IMG_0612.jpg' }
    ];
  }

}
