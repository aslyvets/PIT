import {Component} from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {
  currentVideo = 'assets/rolls.mp4';
  lastCheck = 0.0;

  constructor() {
  }

  timeChecker(video: HTMLVideoElement) {
    let secondToStop = 2;
    if (video.currentTime >= secondToStop && this.lastCheck < secondToStop) {
      video.pause();
    }
    this.lastCheck = video.currentTime;
  }
}
