import { NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [NgIf, HeaderComponent],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent {
  @Input() project: any; // Eingabe des aktuellen Projekts
  @Input() isOpen: boolean = false; // Zustand, ob das Modal geöffnet ist
  @Input() currentIndex: number = 0; // Der aktuelle Index des Projekts
  @Input() projects: any[] = []; // Eingabe der Projektliste
  
  @Output() changeProject = new EventEmitter<number>(); // EventEmitter zum Ändern des Projekts
  @Output() closeDetails = new EventEmitter<void>(); // EventEmitter zum Schließen des Modals

  closeOverlay() {
    this.closeDetails.emit(); // Schließt das overlay
  }

  previousProject() {
    const previousIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
    this.changeProject.emit(previousIndex); // Gibt den Index des vorherigen Projekts zurück
  }

  nextProject() {
    const nextIndex = (this.currentIndex + 1) % this.projects.length;
    this.changeProject.emit(nextIndex); // Gibt den Index des nächsten Projekts zurück
  }

}
