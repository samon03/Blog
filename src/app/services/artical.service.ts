import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Artical } from '../shared/article';
import { ARTICLES } from '../shared/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticalService {


  selectedArticle: Artical;

  readonly baseURL = 'http://localhost:3000/articles';

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Artical[]>{

    return this.http.get<Artical[]>(this.baseURL);
    // const article: Artical[] = ARTICLES;
    // return of(article);
  }


  getArticle(id: Number): Observable<Artical> {
    return this.http.get<Artical>(this.baseURL + `/${id}`);

    // const article: Artical[] = ARTICLES.filter(a => a.key === key);
    // return of(article[0]);
  }

  postArticle(artical: Artical): Observable<Artical>{
    artical.date = new Date();
    return this.http.post<Artical>(this.baseURL, artical);
  }

  deleteArtical(id: number): Observable<Artical[]>{
    return this.http.delete<Artical[]>(this.baseURL + `/${id}`);
  }
}
