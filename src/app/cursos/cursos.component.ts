import { Component, OnInit } from '@angular/core';
import { materias } from '../cursos';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
lista = materias;
  constructor() { }

  ngOnInit() {
  }

}