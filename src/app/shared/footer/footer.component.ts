import { Component } from '@angular/core';
import { RotatingIconDirective } from '../directive/rotating_icon_directive';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RotatingIconDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
