import { Component, Input } from '@angular/core';
import { RotatingIconDirective } from '../directive/rotating_icon_directive';
import { FormGroup } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RotatingIconDirective, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'

})
export class FooterComponent {

  constructor(private router: Router) { }

  @Input() form!: FormGroup; // um auf die daten der elternkomponente zugreifen zu können

  markFormAsTouched() {
    this.form.markAllAsTouched();
  }
}
