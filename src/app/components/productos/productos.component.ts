import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  public productos: any = []; // Objeto para capturar nuestros productos

  constructor( private productosService: ProductosService ) { 

   }

  ngOnInit(): void {
    this.loadData(); // Ejecutamos la funcion al momento de ingresar a productos
  }

  // Funcion para cargar la data de la API
  public loadData() {
    this.productosService.get('http://www.mocky.io/v2/5ed0b4443500005b00ff9e02') // URL O RUTA LOCAL DE NUESTRA API
    .subscribe(respuesta => {
      console.log(respuesta);
      this.productos = respuesta;
    })
  }


}
