import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ThoughtsComponent } from "../thoughts/thoughts.component";
import { NgFor } from '@angular/common';
import { FadeAnimationEffectService } from '../shared/services/fade_animation.service';

@Component({
  selector: 'app-comments-about-me',
  standalone: true,
  imports: [ThoughtsComponent, NgFor],
  templateUrl: './comments-about-me.component.html',
  styleUrl: './comments-about-me.component.scss'
})
export class CommentsAboutMeComponent implements AfterViewInit {

  thoughts = [
    {
      name: 'aaa',
      title: 'Frontend Developer',
      comment: 'kommentar einfügen',
      profileLink: 'link',
      backgroundimage: '/assets/images/thoughts_background_1.png'
    },
    {
      name: 'bbb',
      title: 'Frontend Developer',
      comment: 'kommentar einfügen',
      profileLink: 'link',
      backgroundimage: '/assets/images/thoughts_background_2.png'
    },
    {
      name: 'ccc',
      title: 'Frontend Developer',
      comment: 'kommentar einfügen',
      profileLink: 'link',
      backgroundimage: '/assets/images/thoughts_background_1.png'
    },
  ]

    @ViewChild('fade_animation_img') fade_animation_img!: ElementRef<HTMLImageElement>;
  
    constructor(private fadeAnimationEffect: FadeAnimationEffectService) {}
  
    ngAfterViewInit(): void {
      const el = this.fade_animation_img.nativeElement;
      this.fadeAnimationEffect.startFadeAnimationLoop(el);
    }

}
