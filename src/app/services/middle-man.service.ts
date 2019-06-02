import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } 
from "@angular/fire/firestore";
import { EventEntry } from "../EventEntry";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MiddleManService {

  entriesCollection: AngularFirestoreCollection<EventEntry>;
  entries: Observable<EventEntry[]>;

  constructor( public afs: AngularFirestore) { 

    this.entriesCollection = this.afs.collection("PlannerEntries");

    // this.entries = this.afs.collection("PlannerEntries").valueChanges();
    this.entries = this.entriesCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a=> {
        const data = a.payload.doc.data() as EventEntry;
        data.id = a.payload.doc.id;
           return data;
      })
    }));
  }

   getEntries(){
     return this.entries;
   }

   addEntry(entry: EventEntry){
     this.entriesCollection.add(entry);
   }
}
