import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() closeOverlayClickedFromHeader = new EventEmitter<void>();

  emitCloseOverlay() {
    this.closeOverlayClickedFromHeader.emit();
  }










  isMenuOpen = false;

toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
}

emitCloseOverlay_navbar() {
  this.isMenuOpen = false;
  // Weitere Logik...
}

}
