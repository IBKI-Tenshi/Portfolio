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






// export class FadeAnimationEffectService {

//   constructor() {}

//   triggerFadeAnimationEffect(el: HTMLElement) {
//     el.classList.add('fade_animation');
//     setTimeout(() => {
//       el.classList.remove('fade_animation');
//     }, 3000);
//   }

//   startFadeAnimationInterval(el: HTMLElement, interval: number = 3000) {
//     this.triggerFadeAnimationEffect(el);
//     return setInterval(() => {
//       this.triggerFadeAnimationEffect(el);
//     }, interval);
//   }
// }
