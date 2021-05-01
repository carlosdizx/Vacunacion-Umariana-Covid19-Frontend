import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PersonaComponent } from './persona/persona.component';
import {HttpClientModule} from '@angular/common/http';

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
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
