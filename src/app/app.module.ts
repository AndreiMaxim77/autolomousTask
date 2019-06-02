import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { environment } from "../environments/environment";
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateCompComponent } from './components/date-comp/date-comp.component';
import { FormComponent } from './form/form.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MiddleManService } from './services/middle-man.service';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    DateCompComponent,
    FormComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'autolo'),
    AngularFirestoreModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [MiddleManService],
  bootstrap: [AppComponent]
})
export class AppModule { }
