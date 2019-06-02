import { Pipe, PipeTransform } from "@angular/core";
import { EventEntry } from "./app/EventEntry";

@Pipe({
  name: "sort"
})

export class EventSortPipe  implements PipeTransform {
  transform(array: any): EventEntry[] {
  
    array.sort((a: any, b: any) => {
      if (a.timeUploaded < b.timeUploaded) {
        return 1;
      } else if (a.timeUploaded > b.timeUploaded) {
        return -1;
      } else {
        return 0;
      }
    });
    return array;
  }
}