import { Component, OnInit } from '@angular/core';
import {Persona} from './persona';
import {PersonaService} from './persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
})
export class PersonaComponent implements OnInit {

  personas: Persona[] = [];

  constructor( private service: PersonaService) {
  }

  ngOnInit(): void {
     this.darPersonas();
  }

  darPersonas(): void{
    this.service.darPersonas().subscribe(personas => (this.personas = personas));
  }

}
