import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FooterComponent } from '../shared/footer/footer.component';
import { FadeAnimationEffectService } from '../shared/services/fade_animation.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FooterComponent, ReactiveFormsModule, NgIf],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements AfterViewInit, OnInit {

  @ViewChild('fade_animation_img') fade_animation_img!: ElementRef<HTMLImageElement>;

  contactForm!: FormGroup;

  constructor(
    private fadeAnimationEffect: FadeAnimationEffectService,
    private formBuilder: FormBuilder
  ) {}

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
    const el = this.fade_animation_img.nativeElement;
    this.fadeAnimationEffect.startFadeAnimationLoop(el);
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
      // Hier kannst du ggf. die Nachricht absenden oder weiterverarbeiten
    } else {
      this.contactForm.markAllAsTouched(); // Trigger für Fehleranzeigen
    }
  }
}



















// <form action="" class="dFlex">

// <!-- inputfield 1 -->
// <div class="input_div dFlex">
//     <label for="name">What's your name?</label>
//     <input type="text" id="name" name="name" placeholder="Your name goes here"
//         [(ngModel)]="formData.name" #nameField="ngModel" required
//         [pattern]="'^(?!.*\\s{2,})[A-Za-zÄÖÜäöüß\\s-]{2,20}$'" />

//     <!-- Fehlermeldung bei ungültiger Eingabe -->
//     <div class="error" *ngIf="nameField.invalid && nameField.touched">
//         Please enter a valid name ( Letters, " - " and spaces only ).
//     </div>
// </div>
// <!-- inputfield 1 ende-->

// <!-- inputfield 2 -->
// <div class="input_div dFlex">
//     <label for="email">What's your email?</label>
//     <input type="email" id="email" name="email" placeholder="youremail@email.com"
//         [(ngModel)]="formData.email" #emailField="ngModel" required
//         [pattern]="'[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'" />


//     <!-- Fehlermeldung bei ungültiger Eingabe -->
//     <div class="error" *ngIf="emailField.invalid && emailField.touched">
//         Please enter a valid email address.
//     </div>
// </div>
// <!-- inputfield 2 ende -->


// <!-- inputfield 3 -->
// <div class="input_div dFlex">
//     <label for="message">How can I help you?</label>
//     <textarea id="message" name="message" placeholder="Hello Borna, I am interested in..."
//         [(ngModel)]="formData.message" #messageField="ngModel" #autoTextarea required minlength="10"
//         maxlength="1000" [pattern]="'.*\\S.*'"
//         (input)="autoResize(autoTextarea)">
//       </textarea>

//     <!-- Fehlermeldungen -->

//     <div class="error" *ngIf="messageField.errors?.['minlength']">
//         Please write at least 10 characters.
//     </div>

//     <div class="error" *ngIf="messageField.errors?.['pattern']">
//         Message can't be only spaces.
//     </div>

//     <div class="char-count" *ngIf="formData.message?.length">
//         {{ formData.message.length }}/1000 characters
//         <span *ngIf="formData.message.length == 1000" class="error">
//             Your message is too long. Max 1000 characters.
//         </span>
//     </div>
// </div>
// <!-- inputfield 3 ende -->

// <div class="checkbox_div dFlex_ac">
//     <input type="checkbox" id="privacy" [(ngModel)]="privacyChecked" name="privacy" />
//     <label for="privacy">
//         I agree to the
//         <a href="/privacy-policy" target="_blank">privacy policy</a>.
//     </label>
// </div>

// <button type="submit" class="the_red_button" [disabled]="!privacyChecked">
//     Send
// </button>

// </form>