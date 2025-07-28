import { Injectable } from '@angular/core';
import { Service } from './http-service';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/cliente';

@Injectable({ providedIn: 'root' })
export class ClienteService {
  private url = 'http://localhost:8080/clienti';

  constructor(private service: Service) {}

  getAll(): Observable<Cliente[]> {
    return this.service.getAll<Cliente>(this.url);
  }
  add(cliente: Cliente): Observable<Cliente> {
    return this.service.add<Cliente>(this.url, cliente);
  }

  update(id: number, cliente: Cliente): Observable<Cliente> {
    return this.service.updateById<Cliente>(this.url, id, cliente);
  }

  delete(id: number): Observable<Cliente> {
    return this.service.delete<Cliente>(`${this.url}/${id}`);
  }
}
