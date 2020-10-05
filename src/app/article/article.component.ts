import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticalService } from '../services/artical.service';
import { Artical } from '../shared/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article: Artical = null;

  constructor(private route: ActivatedRoute,
              private articleService: ArticalService) { }

  ngOnInit(): void {

    // this.route.params.subscribe(params => {
    //   this.article = new Artical();
    //   this.article.key = params.key;
    // });


    this.route.params.subscribe(params => {
      const key = params.key;
      this.articleService.getArticle(key).subscribe(article => {
        this.article = article;
        console.log(this.article);

      });
    });


  }

}
