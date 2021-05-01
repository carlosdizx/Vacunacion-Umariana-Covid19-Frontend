import { Component, OnInit } from '@angular/core';
import {Persona} from '../persona';
import {PersonaService} from '../persona.service';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
})
export class DocentesComponent implements OnInit {

  personas: Persona[] = [];

  constructor(private service: PersonaService) { }

  ngOnInit(): void {
    this.darPersonas();
  }

  darPersonas(): void{
    this.service.darPersonas().subscribe(personas => (this.personas = personas));
    this.personas.sort((a, b) => {
      if (a.nombres < b.nombres) {
        return -1;
      }
      else if (a.estado.nombre > b.estado.nombre) {
        return 1;
      }
      else {
        return 0;
      }
    });
  }
}
