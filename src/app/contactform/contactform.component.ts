import { Component, ViewChild, ElementRef, inject } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { LanguageService } from '../shared/services/language.service';
@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule, NgIf, RouterModule],
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss']
})
export class ContactformComponent {
  constructor(
    private router: Router,
    private languageService: LanguageService
  ) {}

  @ViewChild('confirmationBox') confirmationBox!: ElementRef<HTMLDivElement>;

  http = inject(HttpClient);
  
  currentLang = 'en';

  contactData = {
    name: "",
    email: "",
    message: "",
    privacy: false
  };

  mailTest = false;

  post = {
    endPoint: 'https://www.borna-kitak.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'application/json',
        responseType: 'text',
      },
    },
  };

  translations:any = {
    en: {
      nameLabel: "What's your name?",
      namePlaceholder: "Your name goes here",
      emailLabel: "What's your email?",
      emailPlaceholder: "youremail@email.com",
      messageLabel: "How can I help you?",
      messagePlaceholder: "Hello Borna, I am interested in...",
      checkboxText: "I agree to the ",
      toAccept: 'privacyPolicy',
      sendButton: "Send",
      nameError: "Please enter a valid name (letters, '-' and spaces only).",
      emailError: "Please enter a valid email address.",
      messageError: "Please enter a valid message.",
      minLengthError: "Please write at least 10 characters.",
      patternError: "Message can't be only spaces.",
      charCount: "characters",
      maxLengthError: "Your message is too long. Max 1000 characters."
    },
    de: {
      nameLabel: "Wie heißt du?",
      namePlaceholder: "Dein Name hier",
      emailLabel: "Wie lautet deine E-Mail?",
      emailPlaceholder: "deineemail@email.com",
      messageLabel: "Wie kann ich dir helfen?",
      messagePlaceholder: "Hallo Borna, ich interessiere mich für...",
      checkboxText: "Ich akzeptiere die ",
      toAccept: 'Datenschutzrichtlinie',
      sendButton: "Absenden",
      nameError: "Bitte gib einen gültigen Namen ein (nur Buchstaben, '-' und Leerzeichen).",
      emailError: "Bitte gib eine gültige E-Mail-Adresse ein.",
      messageError: "Bitte gib eine gültige Nachricht ein.",
      minLengthError: "Bitte schreibe mindestens 10 Zeichen.",
      patternError: "Nachricht darf nicht nur aus Leerzeichen bestehen.",
      charCount: "Zeichen",
      maxLengthError: "Deine Nachricht ist zu lang. Maximal 1000 Zeichen."
    }
  };

  ngOnInit() {
    this.languageService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
    });
  }

  getText(key: string): string {
    return this.translations[this.currentLang]?.[key] || key;
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
        .subscribe({
          next: (response) => {
            console.log('Antwort erhalten:', response);
            this.showConfirmedMessage();
            ngForm.resetForm();
          },
          error: (error) => {
            console.error('Fehler beim Senden:', error);
          },
          complete: () => {
            console.info('POST-Anfrage abgeschlossen (complete)');
          },
        });
    } else if (ngForm.submitted && ngForm.valid && this.mailTest) {
      console.log('MailTest aktiviert – Formular wird simuliert zurückgesetzt');
      this.showConfirmedMessage();
      ngForm.resetForm();
    }
  }

  autoResize(textarea: HTMLTextAreaElement) {
    textarea.style.height = 'auto';
    textarea.style.height = `${Math.min(textarea.scrollHeight, 320)}px`;
  }

  showConfirmedMessage() {
    let confirmationBox = this.confirmationBox.nativeElement;
    confirmationBox.classList.remove('d_none');
    setTimeout(() => {
      confirmationBox.classList.add('d_none');
    }, 4000);
  }

markFormAsTouched(contactForm: NgForm) {
  Object.keys(contactForm.controls).forEach(field => {
    const control = contactForm.controls[field];
    control.markAsTouched();
  });
}
}


