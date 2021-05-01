import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Persona} from './persona';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {PERSONAS} from './personas.json';
// import {PERSONAS} from './personas.json';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  // private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  private urlEndpoint = 'http://localhost:8080/persona';

  constructor( ) {
  }

  darPersonas(): Observable<Persona[]>{
    return of(PERSONAS);
  }

  /*
  buscarPersona(documento: number): Observable<Persona> {
    return this.http.get<Persona>(`${this.urlEndpoint}/${documento}`);
  }
   */
}
