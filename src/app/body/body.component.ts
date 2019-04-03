import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  categorias: any = [{ "codigo": 1, "texto": "Politica" },
  { "codigo": 2, "texto": "Educación" }, { "codigo": 3, "texto": "Seguridad"}]
  constructor() { }

  ngOnInit() {
  }

}
