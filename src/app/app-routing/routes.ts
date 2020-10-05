import { Routes } from '@angular/router';

import { AboutComponent } from '../about/about.component';
import { ArticleComponent } from '../article/article.component';
import { HomeComponent } from '../home/home.component';
import { NotFoundComponent } from '../not-found/not-found.component';

export const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'about', component: AboutComponent },
  { path: '404', component: NotFoundComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: ':key', component: ArticleComponent },
  { path: '**', component: NotFoundComponent }

];
