
import { Routes } from '@angular/router';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
  { path: '', component: StartScreenComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'project/:id', component: ProjectDetailsComponent },
  { path: 'impressum', component: LegalNoticeComponent },
  { path: 'privacyPolicy', component: PrivacyPolicyComponent },
];
