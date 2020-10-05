import { Component, OnInit } from '@angular/core';
import { Artical } from '../shared/artical';
import { ARTICLES } from '../shared/articals';

@Component({
  selector: 'app-artical',
  templateUrl: './artical.component.html',
  styleUrls: ['./artical.component.scss']
})
export class ArticalComponent implements OnInit {

  articles: Artical[] = [];

  constructor() { }

  ngOnInit(): void {
    this.articles = ARTICLES;
    console.log(this.articles);
  }

}
