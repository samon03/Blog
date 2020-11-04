import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  feedbackForm: FormGroup;

  @ViewChild('ffrom') feedbackFormDirective;

  constructor() { }

  ngOnInit(): void {
  }

}
