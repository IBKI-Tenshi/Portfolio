import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ProjectDivComponent } from "../project-div/project-div.component";
import { NgFor, NgIf } from '@angular/common';
import { FadeAnimationEffectService } from '../shared/services/fade_animation.service';
import { ProjectDetailsComponent } from '../project-details/project-details.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectDivComponent, ProjectDetailsComponent, NgFor, NgIf],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit {

  projects = [
    {
      title: 'Join',
      description: 'join description Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos illo voluptatum consequuntur quia eveniet delectusmagnam cum culpa debitis error. Necessitatibus dolorum numquam fugiat quod officia iure? Ab, est nihil.',
      info_details: 'tiefere infos zum projekt',
      image: '/assets/images/project_images/join_image.png',
      project_link: 'link zum projekt',
      github_link: 'link zu gitgub',
      duration: 'benötigte wochen',
      used_skills: [
        {
          skill_image: 'assets/images/skills/HTML_icon.png',
          skill_name: 'HTML'
        },
        {
          skill_image: 'assets/images/skills/CSS_icon.png',
          skill_name: 'CSS'
        },
        {
          skill_image: 'assets/images/skills/JS_icon.png',
          skill_name: 'JS'
        }
      ],
      highlighted: true
    },
    {
      title: 'El Pollo Loco',
      description: 'El Pollo Loco description Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos illo voluptatum consequuntur quia eveniet delectusmagnam cum culpa debitis error. Necessitatibus dolorum numquam fugiat quod officia iure? Ab, est nihil.',
      info_details: 'tiefere infos zum projekt',
      image: '/assets/images/project_images/el_pollo_loco_image.png',
      project_link: 'https://borna-kitak.developerakademie.net/el_pollo_loco/',
      github_link: 'https://github.com/IBKI-Tenshi/El_pollo_loco',
      duration: 'benötigte wochen',
      used_skills: [
        {
          skill_image: 'assets/images/skills/HTML_icon.png',
          skill_name: 'HTML'
        },
        {
          skill_image: 'assets/images/skills/CSS_icon.png',
          skill_name: 'CSS'
        },
        {
          skill_image: 'assets/images/skills/JS_icon.png',
          skill_name: 'JS'
        }
      ],
      highlighted: false
    },
    {
      title: 'pokedex',
      description: 'pokedex description Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos illo voluptatum consequuntur quia eveniet delectusmagnam cum culpa debitis error. Necessitatibus dolorum numquam fugiat quod officia iure? Ab, est nihil.',
      info_details: 'tiefere infos zum projekt',
      image: '/assets/images/project_images/pokedex_image.png',
      project_link: 'https://borna-kitak.developerakademie.net/pokedex/',
      github_link: 'https://github.com/IBKI-Tenshi/Pokedex',
      duration: 'benötigte wochen',
      used_skills: [
        {
          skill_image: 'assets/images/skills/HTML_icon.png',
          skill_name: 'HTML'
        },
        {
          skill_image: 'assets/images/skills/CSS_icon.png',
          skill_name: 'CSS'
        },
        {
          skill_image: 'assets/images/skills/JS_icon.png',
          skill_name: 'JS'
        }
      ],
      highlighted: false
    },

  ]

  selectedProject: any = null;
  isDetailsOpen: boolean = false;
  // isDetailsOpen: boolean = true;
  selectedIndex: number = 0;

  @ViewChild('fade_animation_img') fade_animation_img!: ElementRef<HTMLImageElement>;

  constructor(private fadeAnimationEffect: FadeAnimationEffectService) {}

  ngAfterViewInit(): void {
    const el = this.fade_animation_img.nativeElement;
    this.fadeAnimationEffect.startFadeAnimationLoop(el);
  }

  openDetails(project: any, index: number) {
    this.selectedProject = project;
    this.selectedIndex = index;
    this.isDetailsOpen = true;
  }

  closeDetails() {
    this.isDetailsOpen = false;
  }

  changeProject(index: number) {
    this.selectedIndex = index;
    this.selectedProject = this.projects[index];
  }

}
