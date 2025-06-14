import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoTestimonialsService {

  constructor() { }


  getVideoTestimonials() {
    return [
      { video: 'IMG_0608.MP4', thumbnail: '/thumbnail_0608.png' },
      { video: 'IMG_0609.MP4', thumbnail: '/thumbnail_0609.png' },
      { video: 'IMG_0611.MP4', thumbnail: '/thumbnail_0611.png' },
      { video: 'IMG_0612.MP4', thumbnail: '/thumbnail_0612.png' }
    ];
  }

}
