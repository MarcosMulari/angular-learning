import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CategoriaObject } from './categoria-object';
import { Categoria } from './categoria/categoria';

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private apiUrl = environment.apiUrl + '/categorias'

  constructor(private http: HttpClient){}

  create(categoria: Categoria): Observable<CategoriaObject>{
      return this.http.post<CategoriaObject>(this.apiUrl, categoria)
    }

  getAll(): Observable<CategoriaObject[]>{
      return this.http.get<CategoriaObject[]>('http://localhost:3000/categorias',)
    }

  getById(id: string) : Observable<CategoriaObject> {
    return this.http.get<CategoriaObject>(this.apiUrl + `/${id}`)
  }

  delete(id:string){
    return this.http.delete(this.apiUrl + `/${id}`)
  }

  update(id: number, categoria: Categoria): Observable<CategoriaObject> {
  return this.http.put<CategoriaObject>(
    this.apiUrl + `/${id}`,
    categoria
    );
  }



}
