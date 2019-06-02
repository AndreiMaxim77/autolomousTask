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
  now = Date.now();

  entry: EventEntry = {
    type: '',
    name: '',
    date: '',
    timeUploaded: 0,
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

  addDate(d: DateObj){
    this.entry.date = d.autolomousFormat();
  }

  addToCalendar(value){ // Add EventEntry to database! 
    this.entry.type = value.type;
    this.entry.name = value.name;
    this.entry.timeUploaded = Date.now();
    this.manService.addEntry(this.entry);
  }

}
