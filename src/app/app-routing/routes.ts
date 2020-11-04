import { Routes } from '@angular/router';

import { ArticleComponent } from '../article/article.component';
import { HomeComponent } from '../home/home.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { AddComponent } from '../add/add.component';

export const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'add', component: AddComponent },
  { path: '404', component: NotFoundComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: ':key', component: ArticleComponent },
  { path: '**', component: NotFoundComponent }

];
