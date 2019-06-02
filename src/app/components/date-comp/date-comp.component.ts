import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

 @Output() date = new EventEmitter<DateObj> ();
 dateObj = new DateObj();
  
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
     this.dateObj.day = value.day;
     this.dateObj.month = value.month;
     this.dateObj.year = value.year;
     this.date.emit(this.dateObj);
    // console.log(this.date.autolomousFormat());
  }

}
