import { Component, OnInit } from '@angular/core';
import { MiddleManService } from "../services/middle-man.service";
import { EventEntry } from '../EventEntry';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  entries: EventEntry[];

  constructor(
    public manService: MiddleManService,
  ) { console.log('No works');}

  ngOnInit() {
    this.manService.getEntries().subscribe(comin => {
      console.log(comin);
      this.entries = comin;
    });
    
  }



}
