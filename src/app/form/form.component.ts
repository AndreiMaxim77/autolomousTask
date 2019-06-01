import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  addEventForm;

  onSubmit(){
    console.log("Pressed Submit!")
  }

  constructor(
    private formbuilder: FormBuilder,
  ) {
    this.addEventForm = this.formbuilder.group({
      type: '',
      name: '',
    })
   }

  ngOnInit() {
  }

  addToCalendar(value){
    console.log(value.type);
    console.log(value.name);
  }

}
