import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PersonaComponent } from './persona/persona.component';
import {HttpClientModule} from '@angular/common/http';
import { DocentesComponent } from './persona/docentes/docentes.component';

const routes: Routes = [
  {path: '', redirectTo : '/', pathMatch: 'full'},
  { path: 'personas', component: PersonaComponent },
  { path: 'docentes', component: DocentesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonaComponent,
    DocentesComponent,
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
