
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { HeaderComponent } from "../shared/header/header.component";
import { FadeAnimationEffectService } from '../shared/services/fade_animation.service';
import { PROJECTS } from '../projects/projects_data';

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