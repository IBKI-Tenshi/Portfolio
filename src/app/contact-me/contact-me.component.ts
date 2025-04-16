import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FooterComponent } from "../shared/footer/footer.component";
import { FadeAnimationEffectService } from '../shared/services/fade_animation.service';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent implements AfterViewInit {


  @ViewChild('fade_animation_img') fade_animation_img!: ElementRef<HTMLImageElement>;

  constructor(private fadeAnimationEffect: FadeAnimationEffectService) {}

  ngAfterViewInit(): void {
    const el = this.fade_animation_img.nativeElement;
    this.fadeAnimationEffect.startFadeAnimationLoop(el);
  }

  
}
