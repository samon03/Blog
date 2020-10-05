import { Component, OnInit } from '@angular/core';
import { ArticalService } from '../services/artical.service';
import { Artical } from '../shared/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articles: Artical[] = [];

  constructor(private articleService: ArticalService) { }

  ngOnInit(): void {
    // get values directly from ARTICLES array
    // this.articles = ARTICLES;

     // get values from Artical service
     this.getArticles();

  }

  getArticles(): void{
    this.articleService.getArticle().subscribe(
      articles => {
         this.articles = articles;
      });
  }

}
