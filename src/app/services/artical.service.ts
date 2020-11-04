import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Artical } from '../shared/article';
import { ARTICLES } from '../shared/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticalService {

  readonly baseURL = 'https://my-json-server.typicode.com/samon03/blog-api/articles';

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Artical[]>{

    return this.http.get<Artical[]>(this.baseURL);
    // const article: Artical[] = ARTICLES;
    // return of(article);
  }


  getArticle(key: string): Observable<Artical> {
    // return this.http.get<Artical>(this.baseURL);
    const article: Artical[] = ARTICLES.filter(a => a.key === key);
    return of(article[0]);
  }

}
