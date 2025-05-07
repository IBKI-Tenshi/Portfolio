// import { NgFor, NgIf } from '@angular/common';
// import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
// import { HeaderComponent } from "../shared/header/header.component";
// import { FadeAnimationEffectService } from '../shared/services/fade_animation.service';

// @Component({
//   selector: 'app-project-details',
//   standalone: true,
//   imports: [NgIf, HeaderComponent, NgFor],
//   templateUrl: './project-details.component.html',
//   styleUrl: './project-details.component.scss'
// })
// export class ProjectDetailsComponent implements AfterViewInit {
//   @Input() project: any; // Eingabe des aktuellen Projekts
//   @Input() isOpen: boolean = false; // Zustand, ob das Modal geöffnet ist
//   @Input() currentIndex: number = 0; // Der aktuelle Index des Projekts
//   @Input() projects: any[] = []; // Eingabe der Projektliste
  
//   @Output() changeProject = new EventEmitter<number>(); // EventEmitter zum Ändern des Projekts
//   @Output() closeDetails = new EventEmitter<void>(); // EventEmitter zum Schließen des Modals


//   @ViewChild('fade_animation_img') fade_animation_img!: ElementRef<HTMLImageElement>;

//   constructor(private fadeAnimationEffect: FadeAnimationEffectService) {}

//   ngAfterViewInit(): void {
//     const el = this.fade_animation_img.nativeElement;
//     this.fadeAnimationEffect.startFadeAnimationLoop(el);
//   }



//   closeOverlay() {
//     this.closeDetails.emit(); // Schließt das overlay
//   }

//   previousProject() {
//     const previousIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
//     this.changeProject.emit(previousIndex); // Gibt den Index des vorherigen Projekts zurück
//   }

//   nextProject() {
//     const nextIndex = (this.currentIndex + 1) % this.projects.length;
//     this.changeProject.emit(nextIndex); // Gibt den Index des nächsten Projekts zurück
//   }

// }



import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { HeaderComponent } from "../shared/header/header.component";
import { FadeAnimationEffectService } from '../shared/services/fade_animation.service';
import { PROJECTS } from '../projects/projects_data';  // Stelle sicher, dass der Pfad korrekt ist

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [NgIf, HeaderComponent, NgFor],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent implements AfterViewInit {
  project: any;
  currentIndex: number = 0;
  projects = PROJECTS;

  @ViewChild('fade_animation_img') fade_animation_img!: ElementRef<HTMLImageElement>;

  constructor(
    private route: ActivatedRoute,
    private fadeAnimationEffect: FadeAnimationEffectService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const index = Number(params.get('id'));
      if (!isNaN(index) && this.projects[index]) {
        this.currentIndex = index;
        this.project = this.projects[index];
      }
    })
  }

  ngAfterViewInit(): void {
    const el = this.fade_animation_img.nativeElement;
    this.fadeAnimationEffect.startFadeAnimationLoop(el);
  }

  closeOverlay() {
    // Hier könnte man optional zurück zur Projektübersicht navigieren:
    window.history.back(); // oder Router.navigate(['projects'])
  }

  previousProject() {
    const previousIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
    this.currentIndex = previousIndex;
    this.project = this.projects[previousIndex];
  }

  nextProject() {
    const nextIndex = (this.currentIndex + 1) % this.projects.length;
    this.currentIndex = nextIndex;
    this.project = this.projects[nextIndex];
  }
}
;