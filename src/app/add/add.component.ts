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

  constructor(public articleService: ArticalService) { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm)
  {
    this.articleService.postArticle(form.value).subscribe(val => {
        console.log(val);
    });
  }

}
