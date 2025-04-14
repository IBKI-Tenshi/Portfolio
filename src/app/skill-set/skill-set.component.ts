import { NgFor } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FadeAnimationEffectService } from '../shared/services/fade_animation.service';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [NgFor],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent implements AfterViewInit {

  skills = [
    { name: 'HTML', img: 'assets/images/skills/HTML_icon.png' },
    { name: 'CSS', img: 'assets/images/skills/CSS_icon.png' },
    { name: 'JavaScript', img: 'assets/images/skills/JS_icon.png' },
    { name: 'TypeScript', img: 'assets/images/skills/TS_icon.png' },
    { name: 'Angular', img: 'assets/images/skills/Angular_icon.png' },
    { name: 'Firebase', img: 'assets/images/skills/Firebase_icon.png' },
    { name: 'Git', img: 'assets/images/skills/Git_icon.png' },
    { name: 'Rest-Api', img: 'assets/images/skills/Rest-Api_icon.png' },
    { name: 'Scrum', img: 'assets/images/skills/Scrum_icon.png' },
    { name: 'Material Design', img: 'assets/images/skills/Material_Design_icon.png' },
  ];
  

  @ViewChild('fade_animation_img') fade_animation_img!: ElementRef<HTMLImageElement>;

  constructor(private fadeAnimationEffect: FadeAnimationEffectService) {}

  ngAfterViewInit(): void {
    const el = this.fade_animation_img.nativeElement;
    this.fadeAnimationEffect.startFadeAnimationLoop(el);
  }

}
