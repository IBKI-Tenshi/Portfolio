import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class FadeAnimationEffectService {

    animationtime:number = 3000;

    constructor() {}
  
    triggerFadeAnimationEffect(el: HTMLElement) {
      el.classList.add('fade_animation');
      setTimeout(() => {
        el.classList.remove('fade_animation');
      }, this.animationtime); // Dauer deiner Animation
    }
  
    startFadeAnimationLoop(el: HTMLElement, interval: number = this.animationtime * 2) {
      const loop = () => {
        this.triggerFadeAnimationEffect(el);
        setTimeout(loop, interval);
      };
      loop();
    }
  }




