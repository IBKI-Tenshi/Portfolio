import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-project-div',
  standalone: true,
  imports: [],
  templateUrl: './project-div.component.html',
  styleUrl: './project-div.component.scss'
})
export class ProjectDivComponent {

  @Input() project: any; // Projekt-Input von der übergeordneten Komponente

  //code drunter wenn es nur über den button geöffnet werden soll - anpassung auch in html und project-div-html
  // @Output() openDetailsEvent: EventEmitter<void> = new EventEmitter(); // EventEmitter für den Button-Klick

  // constructor() { }

  // openDetails() {
  //   this.openDetailsEvent.emit(); // Emitiert das Event, um das Overlay zu öffnen
  // }
}
