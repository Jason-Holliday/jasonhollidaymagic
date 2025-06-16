import { Injectable } from '@angular/core';
import { environment } from '../enviornment.prod';

@Injectable({
  providedIn: 'root'
})
export class VideoTestimonialsService {
  private readonly cloudName = environment.cloudinaryCloudName;
  private readonly baseUrl = `https://res.cloudinary.com/${this.cloudName}/jasonhollidaymagic/videoTestimonials`;

  constructor() {}

  getVideoTestimonials() {
    return [
      { video: `${this.baseUrl}/IMG_0608.mp4` },
      { video: `${this.baseUrl}/IMG_0609.mp4` },
      { video: `${this.baseUrl}/IMG_0611.mp4` },
      { video: `${this.baseUrl}/IMG_0612.mp4` }
    ];
  }
}
