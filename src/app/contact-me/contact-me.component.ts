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

export class ContactMeComponent implements AfterViewInit, OnInit {

  @ViewChild('fade_animation_img') fade_animation_img!: ElementRef<HTMLImageElement>;
  @ViewChild('confirmationBox') confirmationBox!: ElementRef<HTMLDivElement>;

  contactForm!: FormGroup;

  constructor(
    private fadeAnimationEffect: FadeAnimationEffectService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.pattern('^(?!.*\\s{2,})[A-Za-zÄÖÜäöüß\\s-]{2,20}$')
        ]
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')
        ]
      ],
      message: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(1000),
          Validators.pattern('[\\s\\S]*\\S[\\s\\S]*') // mindestens ein sichtbares Zeichen
        ]
      ],
      privacy: [false, Validators.requiredTrue] // Checkbox hinzugefügt
    });
  }

  ngAfterViewInit(): void {
    const fade_icon = this.fade_animation_img.nativeElement;
    this.fadeAnimationEffect.startFadeAnimationLoop(fade_icon);
  }

  

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get message() {
    return this.contactForm.get('message');
  }

  get privacy() {
    return this.contactForm.get('privacy');
  }

  autoResize(textarea: HTMLTextAreaElement) {
    textarea.style.height = 'auto';
    textarea.style.height = `${Math.min(textarea.scrollHeight, 320)}px`;
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form data:', this.contactForm.value);
      // code um nachricht zu versenden
      this.resetForm();
      this.showConfirmedMessage();
    } else { // zeigt alle fehlenden infos. nur angewendet wenn button nicht disabled
      this.markFormAsTouched();
    }
  }

  markFormAsTouched(){
    this.contactForm.markAllAsTouched();
  }

  resetForm() {
    this.contactForm.reset({
      name: '',
      email: '',
      message: '',
      privacy: false
    });
  }

  showConfirmedMessage() {
    let confirmationBox = this.confirmationBox.nativeElement;
    confirmationBox.classList.remove('d_none');
    setTimeout(() => {
      confirmationBox.classList.add('d_none');
    }, 4000)
  }
}

