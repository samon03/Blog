import { Component, OnInit } from '@angular/core';
import { ArticalService } from '../services/artical.service';
import { Artical } from '../shared/artical';
import { ARTICLES } from '../shared/articals';

@Component({
  selector: 'app-artical',
  templateUrl: './artical.component.html',
  styleUrls: ['./artical.component.scss']
})
export class ArticalComponent implements OnInit {

  articles: Artical[] = [];

  constructor(private articalService: ArticalService) { }

  ngOnInit(): void {

    // get values directly from ARTICLES array
    // this.articles = ARTICLES;

     // get values from Artical service
     this.getArticles();

  }

  getArticles(): void{
    this.articalService.getArticle().subscribe(
      articles => {
         this.articles = articles;
      });
  }


}
