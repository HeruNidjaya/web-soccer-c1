import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScoringsComponent } from './scorings/scorings.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StandingsComponent } from './standings/standings.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoringsComponent,
    StandingsComponent,
    AdminComponent,
    StandingsComponent,
    ScoringsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
