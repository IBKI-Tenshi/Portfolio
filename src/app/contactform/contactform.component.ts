
// import { Component, OnInit, ViewChild, ElementRef, inject } from '@angular/core';
// import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormsModule, NgForm } from '@angular/forms';
// import { NgIf } from '@angular/common';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-contactform',
//   standalone: true,
//   imports: [ReactiveFormsModule, NgIf, FormsModule],
//   templateUrl: './contactform.component.html',
//   styleUrl: './contactform.component.scss'
// })
// export class ContactformComponent
// // implements OnInit
// {

//   @ViewChild('confirmationBox') confirmationBox!: ElementRef<HTMLDivElement>;


//   http = inject(HttpClient);

//   constructor(
//     private formBuilder: FormBuilder
//   ) { }

//   // contactForm!: FormGroup;


//   // onSubmit(): void {
//   //   if (this.contactForm.valid) {
//   //     console.log('Form data:', this.contactForm.value);
//   //     // code um nachricht zu versenden
//   //     this.resetForm();
//   //     this.showConfirmedMessage();
//   //   } else { // zeigt alle fehlenden infos. nur angewendet wenn button nicht disabled
//   //     this.markFormAsTouched();
//   //   }
//   // }


//   contactData = {
//     name: "",
//     email: "",
//     message: "",
//   }


//   // wenn true dann wird keine mail versendet
//   // mailTest = true;
//   mailTest = false;

//   post = {
//     // endPoint: 'https://deineDomain.de/sendMail.php',
//     // endPoint: 'https://borna-kitak.de/borna-kitak-portfolio/sendMail.php',
//     endPoint: 'https://borna-kitak.de/sendMail.php',
//     body: (payload: any) => JSON.stringify(payload),
//     options: {
//       headers: {
//         'Content-Type': 'text/plain',
//         responseType: 'text',
//       },
//     },
//   };

//   onSubmit(ngForm: NgForm) {
//     if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
//       this.http.post(this.post.endPoint, this.post.body(this.contactData))
//         .subscribe({
//           next: (response) => {
//             // hier einfügen was noch alles passieren soll
//             console.log('hat nicht funktioniert 1');
//             this.showConfirmedMessage()
//             ngForm.resetForm();
//           },
//           error: (error) => {
//             console.error(error);
//             console.log('hat nicht funktioniert 2');
//           },
//           complete: () => console.info('send post complete'),
//         });
//     } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

//       ngForm.resetForm();
//     }
//   }





//   // ngOnInit(): void {
//   //   this.contactForm = this.formBuilder.group({
//   //     name: [
//   //       '',
//   //       [
//   //         Validators.required,
//   //         Validators.pattern('^(?!.*\\s{2,})[A-Za-zÄÖÜäöüß\\s-]{2,20}$')
//   //       ]
//   //     ],
//   //     email: [
//   //       '',
//   //       [
//   //         Validators.required,
//   //         Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')
//   //       ]
//   //     ],
//   //     message: [
//   //       '',
//   //       [
//   //         Validators.required,
//   //         Validators.minLength(10),
//   //         Validators.maxLength(1000),
//   //         Validators.pattern('[\\s\\S]*\\S[\\s\\S]*') // mindestens ein sichtbares Zeichen
//   //       ]
//   //     ],
//   //     privacy: [false, Validators.requiredTrue] // Checkbox hinzugefügt
//   //   });
//   // }

//   // get name() {
//   //   return this.contactForm.get('name');
//   // }

//   // get email() {
//   //   return this.contactForm.get('email');
//   // }

//   // get message() {
//   //   return this.contactForm.get('message');
//   // }

//   // get privacy() {
//   //   return this.contactForm.get('privacy');
//   // }

//   autoResize(textarea: HTMLTextAreaElement) {
//     textarea.style.height = 'auto';
//     textarea.style.height = `${Math.min(textarea.scrollHeight, 320)}px`;
//   }

//   // markFormAsTouched() {
//   //   this.contactForm.markAllAsTouched();
//   // }

//   // resetForm() {
//   //   this.contactForm.reset({
//   //     name: '',
//   //     email: '',
//   //     message: '',
//   //     privacy: false
//   //   });
//   // }

//   showConfirmedMessage() {
//     let confirmationBox = this.confirmationBox.nativeElement;
//     confirmationBox.classList.remove('d_none');
//     setTimeout(() => {
//       confirmationBox.classList.add('d_none');
//     }, 4000)
//   }


// }



import { Component, ViewChild, ElementRef, inject } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss'
})
export class ContactformComponent {
  @ViewChild('confirmationBox') confirmationBox!: ElementRef<HTMLDivElement>;

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
    privacy: false
  };

  mailTest = false;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  // onSubmit(ngForm: NgForm) {
  //   if (ngForm.submitted && ngForm.valid && !this.mailTest) {
  //     this.http.post(this.post.endPoint, this.post.body(this.contactData))
  //       .subscribe({
  //         next: () => {
  //           this.showConfirmedMessage();
  //           ngForm.resetForm();
  //         },
  //         error: (error) => {
  //           console.error(error);
  //         },
  //         complete: () => console.info('send post complete'),
  //       });
  //   } else if (ngForm.submitted && ngForm.valid && this.mailTest) {
  //     this.showConfirmedMessage();
  //     ngForm.resetForm();
  //   }
  // }



  onSubmit(ngForm: NgForm) {
    console.log('➡️ onSubmit wurde aufgerufen');
  
    if (ngForm.submitted && ngForm.valid && !this.mailTest) {
      console.log('✅ Formular gültig & MailTest deaktiviert – Mail wird gesendet');
  
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            console.log('📨 Antwort erhalten:', response);
            this.showConfirmedMessage();
            ngForm.resetForm();
          },
          error: (error) => {
            console.error('❌ Fehler beim Senden:', error);
          },
          complete: () => {
            console.info('✅ POST-Anfrage abgeschlossen (complete)');
          },
        });
  
    } else if (ngForm.submitted && ngForm.valid && this.mailTest) {
      console.log('🧪 MailTest aktiviert – Formular wird simuliert zurückgesetzt');
      this.showConfirmedMessage();
      ngForm.resetForm();
  
    } else {
      console.warn('⚠️ Formular nicht gültig oder nicht abgeschickt');
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
