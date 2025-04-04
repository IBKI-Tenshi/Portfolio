import { Component } from '@angular/core';
import { ThoughtsComponent } from "../thoughts/thoughts.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-comments-about-me',
  standalone: true,
  imports: [ThoughtsComponent, NgFor],
  templateUrl: './comments-about-me.component.html',
  styleUrl: './comments-about-me.component.scss'
})
export class CommentsAboutMeComponent {

  thoughts = [
    {
      name: 'aaa',
      title: 'Frontend Developer',
      comment: 'kommentar einfügen',
      profileLink: 'link',
      backgroundimage: '/assets/images/thoughts_background_1.png'
    },
    {
      name: 'bbb',
      title: 'Frontend Developer',
      comment: 'kommentar einfügen',
      profileLink: 'link',
      backgroundimage: '/assets/images/thoughts_background_2.png'
    },
    {
      name: 'ccc',
      title: 'Frontend Developer',
      comment: 'kommentar einfügen',
      profileLink: 'link',
      backgroundimage: '/assets/images/thoughts_background_1.png'
    },
  ]

}
