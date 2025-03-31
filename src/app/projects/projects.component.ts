import { Component } from '@angular/core';
import { ProjectDivComponent } from "../project-div/project-div.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectDivComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
