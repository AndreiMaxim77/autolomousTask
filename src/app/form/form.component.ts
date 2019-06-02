import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { MiddleManService } from '../services/middle-man.service';
import { EventEntry } from '../EventEntry';
import { DateObj } from '../DateObj';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  addEventForm;
  dateObj = new DateObj ();

  entry: EventEntry = {
    type: '',
    name: '',
    date: '',
  }


  onSubmit(){
    console.log("Pressed Submit!")
  }

  constructor(
    private formbuilder: FormBuilder,
    private manService: MiddleManService,
  ) {
    this.addEventForm = this.formbuilder.group({
      type: '',
      name: '',
    })
   }

  ngOnInit() {

  }

  addToCalendar(value){ // Add EventEntry to database! 
    this.entry.type = value.type;
    this.entry.name = value.name;
    this.entry.date = this.dateObj.autolomousFormat();
    this.manService.addEntry(this.entry);
  }

}
