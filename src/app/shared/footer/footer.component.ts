import { Component, Input } from '@angular/core';
import { RotatingIconDirective } from '../directive/rotating_icon_directive';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RotatingIconDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  @Input() form!: FormGroup; // um auf die daten der elternkomponente zugreifen zu können

  markFormAsTouched(){
    this.form.markAllAsTouched();
  }
}
