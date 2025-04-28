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
      name: 'Marco Lenschau',
      title: 'Frontend Developer',
      comment: '„Eine wertvolle Bereicherung für jedes Team – auch in schwierigen Situationen behält er stets einen klaren Kopf und liefert durchdachte Lösungsansätze.“',
      profileLink: 'link',
      backgroundimage: '/assets/images/thoughts_background_1.png'
    },
    {
      name: 'bbb',
      title: 'Frontend Developer',
      comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet facere esse dignissimos accusamus quidem iusto vitae ex blanditiis labore debitis dolor, impedit fugit libero autem vero voluptatem doloribus doloremnumquam!',
      profileLink: 'link',
      backgroundimage: '/assets/images/thoughts_background_2.png'
    },
    {
      name: 'ccc',
      title: 'Frontend Developer',
      comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet facere esse dignissimos accusamus quidem iusto vitae ex blanditiis labore debitis dolor, impedit fugit libero autem vero voluptatem doloribus doloremnumquam!',
      profileLink: 'link',
      backgroundimage: '/assets/images/thoughts_background_1.png'
    },
  ]

  @ViewChild('fade_animation_img') fade_animation_img!: ElementRef<HTMLImageElement>;

  constructor(private fadeAnimationEffect: FadeAnimationEffectService) { }

  ngAfterViewInit(): void {
    const el = this.fade_animation_img.nativeElement;
    this.fadeAnimationEffect.startFadeAnimationLoop(el);
  }

}
