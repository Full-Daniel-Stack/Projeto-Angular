import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { materias } from '../cursos';

@Component({
  selector: 'app-curso-detail',
  templateUrl: './curso-detail.component.html',
  styleUrls: ['./curso-detail.component.css']
})
export class CursoDetailComponent implements OnInit {
item;
  constructor(private rota: ActivatedRoute) { }

  ngOnInit() {
  this.rota.paramMap.subscribe(params =>{
    this.item = materias[params.get("index")]
  })
  }

}