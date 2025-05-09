
import {
  Component, ElementRef, ViewChild, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { NgFor, NgIf, NgStyle } from '@angular/common';
import { FadeAnimationEffectService } from '../shared/services/fade_animation.service';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [NgFor, NgStyle, NgIf],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent implements AfterViewInit {

  @ViewChild('fade_animation_img') fade_animation_img!: ElementRef<HTMLImageElement>;
  @ViewChildren('peelLayerRef') peelLayerRefs!: QueryList<ElementRef<HTMLElement>>;

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

  peelLayers = [
    "/assets/images/pull_to_peel/pull_to_peel_1.png",
    "/assets/images/pull_to_peel/pull_to_peel_2.png",
    "/assets/images/pull_to_peel/pull_to_peel_3.png",
    "/assets/images/pull_to_peel/pull_to_peel_4.png"
  ];

  // visibleLayers = [true, true, true, true]; // alle sichtbar am Anfang
  peeled = false;
  peel_animation_time: number = 10;

  constructor(private fadeAnimationEffect: FadeAnimationEffectService) { }

  ngAfterViewInit(): void {
    const el = this.fade_animation_img.nativeElement;
    this.fadeAnimationEffect.startFadeAnimationLoop(el);
  }

  togglePeel(): void {
    const layers = this.peelLayerRefs.toArray();

    if (!this.peeled) {

      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          const el = layers[i]?.nativeElement;
          if (el) {
            el.classList.add('d_none')
          }
        }, i * this.peel_animation_time);
      }
      this.peeled = true;
    } else {
      for (let i = 3; i >= 0; i--) {
        setTimeout(() => {
          const el = layers[i]?.nativeElement;
          if (el) {
            el.classList.remove('d_none');
          }
        }, (3 - i) * this.peel_animation_time);
      }
      this.peeled = false;
    }
  }
}
