import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  //Array de cvategorias
  categorias: any = [
    { "codigo": 0, "texto": "Todos" },
    { "codigo": 1, "texto": "Politica" },
    { "codigo": 2, "texto": "Educación" },
    { "codigo": 3, "texto": "Seguridad" },
  ];

  temporal: any;//
//Array de Noticias
  noticias: any = [{
    "categoria": {
      "codigo": 1,
      "texto": "Politica"
    },
    "titulo": "Prueba de Titulo",
    "text": "Lorem ipsum dolor sit amet consectetur,adipisicing elit. Ut, sit deleniti Consectetur neque perferendis eum odio possimus harum perspiciatis architecto",
    "imagen": "http://www.trabajadores.cu/wp-content/uploads/2015/04/entrevistaperfecta-informatica31.jpg"
  },
  {
    "categoria": {
      "codigo": 2,
      "texto": "Politica"
    },
    "titulo": "Prueba de Titulo",
    "text": "Lorem ipsum dolor sit amet consectetur,adipisicing elit. Ut, sit deleniti Consectetur neque perferendis eum odio possimus harum perspiciatis architecto",
    "imagen": "http://www.trabajadores.cu/wp-content/uploads/2015/04/entrevistaperfecta-informatica31.jpg"
  }, {
    "categoria": {
      "codigo": 1,
      "texto": "Politica"
    },
    "titulo": "Prueba de Titulo",
    "text": "Lorem ipsum dolor sit amet consectetur,adipisicing elit. Ut, sit deleniti Consectetur neque perferendis eum odio possimus harum perspiciatis architecto",
    "imagen": "http://www.trabajadores.cu/wp-content/uploads/2015/04/entrevistaperfecta-informatica31.jpg"
  }, {
    "categoria": {
      "codigo": 1,
      "texto": "Politica"
    },
    "titulo": "Prueba de Titulo",
    "text": "Lorem ipsum dolor sit amet consectetur,adipisicing elit. Ut, sit deleniti Consectetur neque perferendis eum odio possimus harum perspiciatis architecto",
    "imagen": "http://www.trabajadores.cu/wp-content/uploads/2015/04/entrevistaperfecta-informatica31.jpg"
  }, {
    "categoria": {
      "codigo": 2,
      "texto": "Politica"
    },
    "titulo": "Prueba de Titulo",
    "text": "Lorem ipsum dolor sit amet consectetur,adipisicing elit. Ut, sit deleniti Consectetur neque perferendis eum odio possimus harum perspiciatis architecto",
    "imagen": "http://www.trabajadores.cu/wp-content/uploads/2015/04/entrevistaperfecta-informatica31.jpg"
  }];
  constructor() {
    //Temporal es igual a  las noticias
    this.temporal = this.noticias;
  }

  ngOnInit() {
  }

  eventocontrol(evento) {
    if (evento.target.value == 0) {
      this.noticias = this.temporal;
    } else {
      this.noticias = this.noticias.filter((item) => {
        return item.categoria.codigo == evento.target.value;
        //Filtra y compara categoria codigo es igual a evento del valor 
      });
    }
  }

}
