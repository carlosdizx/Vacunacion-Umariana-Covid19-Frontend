import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {PERSONAS} from './personas.json';
import {Persona} from './persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor() {
    this.darPersonas();
  }

  darPersonas(): Persona[]{
    return PERSONAS;
  }
}
