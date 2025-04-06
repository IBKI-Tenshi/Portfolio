import { Component } from '@angular/core';
import { FooterComponent } from "../shared/footer/footer.component";

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {

}
