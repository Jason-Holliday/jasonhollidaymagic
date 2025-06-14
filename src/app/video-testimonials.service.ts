import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export interface VideoTestimonial {
  video: string;
  thumbnail: string;
}


export class VideoTestimonialsService {

  constructor() { }


  getVideoTestimonials(): VideoTestimonial[] {
    return [
      { video: 'IMG_0608.MP4', thumbnail: 'IMG_0608.jpg' },
      { video: 'IMG_0609.MP4', thumbnail: 'IMG_0609.jpg' },
      { video: 'IMG_0611.MP4', thumbnail: 'IMG_0611.jpg' },
      { video: 'IMG_0612.MP4', thumbnail: 'IMG_0612.jpg' }
    ];
  }


}
