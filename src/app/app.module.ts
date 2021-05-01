import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PersonaComponent } from './persona/persona.component';

const routes: Routes = [
  {path: '', redirectTo : '/', pathMatch: 'full'},
  { path: 'personas', component: PersonaComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonaComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
