import { NgIf } from '@angular/common';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-project-div',
  standalone: true,
  imports: [NgIf],
  templateUrl: './project-div.component.html',
  styleUrl: './project-div.component.scss'
})
export class ProjectDivComponent {

  @Input() project: any;
}
