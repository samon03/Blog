import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Artical } from '../shared/article';
import { ARTICLES } from '../shared/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticalService {

  constructor() { }

  getArticles(): Observable<Artical[]>{
    const article: Artical[] = ARTICLES;
    return of(article);
  }
}
