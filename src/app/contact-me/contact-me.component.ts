import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FooterComponent } from '../shared/footer/footer.component';
import { FadeAnimationEffectService } from '../shared/services/fade_animation.service';
import { NgIf } from '@angular/common';
import { ContactformComponent } from "../contactform/contactform.component";

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FooterComponent, ReactiveFormsModule, NgIf, ContactformComponent],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})

export class ContactMeComponent implements AfterViewInit {

  @ViewChild('fade_animation_img') fade_animation_img!: ElementRef<HTMLImageElement>;
  @ViewChild('confirmationBox') confirmationBox!: ElementRef<HTMLDivElement>;

  contactForm!: FormGroup;

  constructor(
    private fadeAnimationEffect: FadeAnimationEffectService,
  ) { }

  ngAfterViewInit(): void {
    const fade_icon = this.fade_animation_img.nativeElement;
    this.fadeAnimationEffect.startFadeAnimationLoop(fade_icon);
  }


}

