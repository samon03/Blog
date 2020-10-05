import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artical } from '../shared/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article: Artical = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.article = new Artical();
      this.article.key = params.key;
    });

  }

}
