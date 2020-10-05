import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Artical } from '../shared/artical';
import { ARTICLES } from '../shared/articals';

@Injectable({
  providedIn: 'root'
})
export class ArticalService {

  constructor() { }

  getArticle(): Observable<Artical[]>{
    const artical: Artical[] = ARTICLES;
    return of(artical);
  }
}
