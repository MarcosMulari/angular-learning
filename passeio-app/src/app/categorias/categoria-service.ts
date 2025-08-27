import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CategoriaObject } from './categoria-object';
import { Categoria } from './categoria/categoria';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient){}

  create(categoria: Categoria): Observable<CategoriaObject>{
      return this.http.post<CategoriaObject>('http://localhost:3000/categorias', categoria)
    }

  getAll(): Observable<CategoriaObject[]>{
      return this.http.get<CategoriaObject[]>('http://localhost:3000/categorias',)
    }

  getById(id: string) : Observable<CategoriaObject> {
    return this.http.get<CategoriaObject>(`http://localhost:3000/categorias/${id}`)
  }

  delete(id:string){
    return this.http.delete(`http://localhost:3000/categorias/${id}`)
  }

  update(id: number, categoria: Categoria): Observable<CategoriaObject> {
  return this.http.put<CategoriaObject>(
    `http://localhost:3000/categorias/${id}`,
    categoria
    );
  }



}
