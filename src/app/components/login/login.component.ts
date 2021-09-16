import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router ) { 
    this.clear_localstorage(); // Ejecutamos la funcion para limpiar el local storage solo cuando se inicia la app
   }

  ngOnInit(): void {

  }

  // Creamos la Funcion del boton login para redirigir al usuario y capturar datos en localstorage
  save_LocalStorage() {
    let loggedUser:string = "logged"; // Variable que se almacena en localstorage

    localStorage.setItem( "checkUser", loggedUser ); // Guardamos el elemento en localstorage

    console.log("Usuario Confirmado");
    
    this.router.navigateByUrl('productos'); // Redirigimos al usuario a la ruta de productos
    this.get_localstorage(); // Ejecutamos la funcion para obtener los datos
  }

  // Creamos la Funcion para obtener los datos de localstorage
  get_localstorage() {
    let checkUser = localStorage.getItem("checkUser"); // Obtenemos datos de localstorage

    console.log(checkUser);
  }

  // Funcion para limpiar el localstorage
  clear_localstorage(): void {
    localStorage.clear(); // De esta manera limpiamos el local storage solo cuanso se inicia la app 
  } 
}
