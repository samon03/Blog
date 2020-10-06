import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticalService } from '../services/artical.service';
import { SharedService } from '../services/shared.service';
import { Artical } from '../shared/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article: Artical = null;

  constructor(private route: ActivatedRoute,
              private articleService: ArticalService,
              private router: Router,
              private titleService: Title,
              private sharedService: SharedService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const key = params.key;
      this.articleService.getArticle(key).subscribe(article => {

        if (article === undefined) {
          this.router.navigateByUrl('404');
          return;
        }

        this.article = article;
        this.titleService.setTitle(`${this.article.title} - ${this.sharedService.blogTitle}`);

      });
    });


  }

}
