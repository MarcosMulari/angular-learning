import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LugarObject } from './lugar-object';

@Injectable({
  providedIn: 'root'
})
export class LugaresService {

  private apiUrl = 'http://localhost:3000/lugares'; // 👈 rota no seu backend/json-server

  constructor(private http: HttpClient) {}

  create(lugar: LugarObject): Observable<LugarObject> {
    return this.http.post<LugarObject>(this.apiUrl, lugar);
  }

  getAll(): Observable<LugarObject[]> {
    return this.http.get<LugarObject[]>(this.apiUrl);
  }

  getById(id: string | number): Observable<LugarObject> {
    return this.http.get<LugarObject>(`${this.apiUrl}/${id}`);
  }

  update(id: string | number, lugar: LugarObject): Observable<LugarObject> {
    return this.http.put<LugarObject>(`${this.apiUrl}/${id}`, lugar);
  }

  delete(id: string | number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
