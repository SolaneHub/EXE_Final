import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/cliente';
import { Servizio } from '../interfaces/servizio';
import { Ordine } from '../interfaces/ordine';
import { Fattura } from '../interfaces/fattura';

@Injectable({
  providedIn: 'root',
})
export class Service {
  constructor(private http: HttpClient) {}

  getAll<T>(url: string): Observable<T[]> {
    return this.http.get<T[]>(url);
  }
}
