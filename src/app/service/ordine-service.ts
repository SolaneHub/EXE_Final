import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from './http-service';
import { Observable } from 'rxjs';
import { Ordine } from '../interfaces/ordine';

@Injectable({
  providedIn: 'root',
})
export class OrdineService {
  private url = 'http://localhost:8080/ordini';

  constructor(private service: Service) {}

  getAll(): Observable<Ordine[]> {
    return this.service.getAll<Ordine>(this.url);
  }

  add(ordine: Ordine): Observable<Ordine> {
    return this.service.add<Ordine>(this.url, ordine);
  }

  update(id: number, ordine: Ordine): Observable<Ordine> {
    return this.service.updateById<Ordine>(this.url, id, ordine);
  }

  delete(id: number): Observable<Ordine> {
    return this.service.delete<Ordine>(`${this.url}/${id}`);
  }
}
