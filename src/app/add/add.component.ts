import { Artical } from '../shared/article';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ArticalService } from '../services/artical.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  providers: [ArticalService]
})
export class AddComponent implements OnInit {

  article: Artical[];

  constructor(public articalService: ArticalService) { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm)
  {
      this.articalService.postArticle(form.value).subscribe(artical => {
        console.log(artical);
        // this.article = article;
        this.resetForm(form);
    });
  }

  resetForm(form?: NgForm)
  {
    if (form) {
      form.reset();
      this.articalService.selectedArticle = {
        id: null,
        title: '',
        date: new Date(),
        imageUrl: '',
        description: ''
      };
    }
  }
}
