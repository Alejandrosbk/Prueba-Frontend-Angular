import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor( private http: HttpClient ) { 
    
  }

  // VAMOS A CONSUMIR LOS DATOS DE LA API MEDIANTE LA URL CON EL JSON
  public get(url:string) {
    return this.http.get(url) // GET 
  }
}
