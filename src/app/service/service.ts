import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/cliente';
import { Servizio } from '../interfaces/servizo';

@Injectable({
  providedIn: 'root',
})
export class Service {
  constructor(private http: HttpClient) {}

  stampaClienti(url: string) : Observable<Cliente[]>{
    return this.http.get<Cliente[]>(url);
  }

  stampaServizi(url: string) : Observable<Servizio[]>{
    return this.http.get<Servizio[]>(url);
  }

  insertCliente(url: string, body: {}) {
    this.http.post(url, body);
  }
}
