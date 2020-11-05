import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Artical } from '../shared/article';
import { ARTICLES } from '../shared/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticalService {

  readonly baseURL = 'http://localhost:3000/articles';

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Artical[]>{

    return this.http.get<Artical[]>(this.baseURL);
    // const article: Artical[] = ARTICLES;
    // return of(article);
  }


  getArticle(id: Number): Observable<Artical> {
    console.log("id from service"+ id);
    return this.http.get<Artical>(this.baseURL + `/${id}`);

    // const article: Artical[] = ARTICLES.filter(a => a.key === key);
    // return of(article[0]);
  }

}
