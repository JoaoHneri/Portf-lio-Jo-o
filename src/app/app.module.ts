import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardProfileComponent } from './components/card-profile/card-profile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardProjectComponent } from './components/card-project/card-project.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardProfileComponent,
    CardProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
