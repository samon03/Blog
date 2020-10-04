import { Routes } from '@angular/router';

import { ArticalComponent } from '../artical/artical.component';
import { AboutComponent } from '../about/about.component';

export const routes: Routes = [

  { path: '', component: ArticalComponent },
  { path: 'about', component: AboutComponent },
  { path: 'articals', redirectTo: '', pathMatch: 'full' }

];
