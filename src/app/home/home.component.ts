import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ArticalService } from '../services/artical.service';
import { SharedService } from '../services/shared.service';
import { Artical } from '../shared/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articles: Artical[] = [];

  constructor(private articleService: ArticalService,
              private titleService: Title,
              private sharedService: SharedService) { }

  ngOnInit(): void {

    this.titleService.setTitle(`${this.sharedService.blogTitle}`);
    this.getArticles();

  }

  getArticles(): void{
    this.articleService.getArticles().subscribe(
      articles => {
         this.articles = articles;
      });
  }

  delete(id: any)
  {
     console.log(id);
     this.articleService.deleteArtical(id).subscribe(() => {
      this.getArticles();
     });
  }

}
