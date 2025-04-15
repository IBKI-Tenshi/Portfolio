import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ProjectDivComponent } from "../project-div/project-div.component";
import { NgFor } from '@angular/common';
import { FadeAnimationEffectService } from '../shared/services/fade_animation.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectDivComponent, NgFor],
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
      used_Skills: [
        {
          skill_image: 'link zum image',
          skill_name: 'HTML'
        },
        {
          skill_image: 'link zum image',
          skill_name: 'CSS'
        }
      ],
      highlighted: true
    },
    {
      title: 'El Pollo Loco',
      description: 'El Pollo Loco description Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos illo voluptatum consequuntur quia eveniet delectusmagnam cum culpa debitis error. Necessitatibus dolorum numquam fugiat quod officia iure? Ab, est nihil.',
      info_details: 'tiefere infos zum projekt',
      image: '/assets/images/project_images/el_pollo_loco_image.png',
      project_link: 'link zum projekt',
      github_link: 'link zu gitgub',
      duration: 'benötigte wochen',
      used_Skills: [
        {
          skill_image: 'link zum image',
          skill_name: 'HTML'
        },
        {
          skill_image: 'link zum image',
          skill_name: 'CSS'
        }
      ],
      highlighted: false
    },
    {
      title: 'pokedex',
      description: 'pokedex description Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos illo voluptatum consequuntur quia eveniet delectusmagnam cum culpa debitis error. Necessitatibus dolorum numquam fugiat quod officia iure? Ab, est nihil.',
      info_details: 'tiefere infos zum projekt',
      image: '/assets/images/project_images/pokedex_image.png',
      project_link: 'link zum projekt',
      github_link: 'link zu gitgub',
      duration: 'benötigte wochen',
      used_Skills: [
        {
          skill_image: 'link zum image',
          skill_name: 'HTML'
        },
        {
          skill_image: 'link zum image',
          skill_name: 'CSS'
        }
      ],
      highlighted: false
    },

  ]

  @ViewChild('fade_animation_img') fade_animation_img!: ElementRef<HTMLImageElement>;

  constructor(private fadeAnimationEffect: FadeAnimationEffectService) {}

  ngAfterViewInit(): void {
    const el = this.fade_animation_img.nativeElement;
    this.fadeAnimationEffect.startFadeAnimationLoop(el);
  }



}
