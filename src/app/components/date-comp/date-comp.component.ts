import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { DateObj } from 'src/app/DateObj';

@Component({
  selector: 'app-date-comp',
  templateUrl: './date-comp.component.html',
  styleUrls: ['./date-comp.component.css']
})

export class DateCompComponent implements OnInit {
  
  dateForm;

 counter = Array; // helps *ngFor in HTML

 date = new DateObj ();
  
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
     this.date.day = value.day;
     this.date.month = value.month;
     this.date.year = value.year;
     console.log(this.date.day);
  }

}
