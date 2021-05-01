import { Component, OnInit } from '@angular/core';
import {Persona} from './persona';
import {PersonaService} from './persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
})
export class PersonaComponent implements OnInit {

  personas: Persona[] = [];

  constructor( private personaService: PersonaService) {
  }

  ngOnInit(): void {
    this.personas = this.personaService.darPersonas();
  }

}
