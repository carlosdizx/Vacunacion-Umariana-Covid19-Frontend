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
    this.darDocentes();
  }

  darDocentes(): void{
    this.service.darDocentes().subscribe(personas => (this.personas = personas));
  }
}
