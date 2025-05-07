import { Component, ViewChild, ElementRef, inject } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule, NgIf, RouterModule],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss'
})
export class ContactformComponent {

  constructor(private router: Router) {} 
  
  @ViewChild('confirmationBox') confirmationBox!: ElementRef<HTMLDivElement>;

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
    privacy: false
  };

  mailTest = false;
  // mailTest = true;

  post = {
    endPoint: 'https://www.borna-kitak.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'application/json', // Ändern auf application/json
        responseType: 'text',
      },
    },
  };

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
}
