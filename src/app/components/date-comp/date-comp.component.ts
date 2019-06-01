import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
@Component({
  selector: 'app-date-comp',
  templateUrl: './date-comp.component.html',
  styleUrls: ['./date-comp.component.css']
})
export class DateCompComponent implements OnInit {
  
  dateForm;
 // years = Array(5).fill().map((x,i)=>i);
 counter = Array;
  
  constructor(
    private formbuilder: FormBuilder,
  ) {
    this.dateForm = this.formbuilder.group({
      year: '',
      month: '',
      day: '',
    })
   }

  ngOnInit() {

  }

  confirmDate(value){
    console.log(value.day)
    console.log(value.month)
    console.log(value.year)
  }

}
