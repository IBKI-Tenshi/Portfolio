import { Component } from '@angular/core';
import { ProjectDivComponent } from "../project-div/project-div.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectDivComponent, NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects = [
    {
      title: 'Join',
      description: 'join description',
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
      ]
    },
    // {
    //   title: 'El Pollo Loco',
    //   description: 'El Pollo Loco description',
    //   info_details: 'tiefere infos zum projekt',
    //   image: 'link zum image',
    //   project_link: 'link zum projekt',
    //   github_link: 'link zu gitgub',
    //   duration: 'benötigte wochen',
    //   used_Skills: [
    //     {
    //       skill_image: 'link zum image',
    //       skill_name: 'HTML'
    //     },
    //     {
    //       skill_image: 'link zum image',
    //       skill_name: 'CSS'
    //     }
    //   ]
    // },
    // {
    //   title: 'pokedex',
    //   description: 'pokedex description',
    //   info_details: 'tiefere infos zum projekt',
    //   image: 'link zum image',
    //   project_link: 'link zum projekt',
    //   github_link: 'link zu gitgub',
    //   duration: 'benötigte wochen',
    //   used_Skills: [
    //     {
    //       skill_image: 'link zum image',
    //       skill_name: 'HTML'
    //     },
    //     {
    //       skill_image: 'link zum image',
    //       skill_name: 'CSS'
    //     }
    //   ]
    // },

  ]
}
