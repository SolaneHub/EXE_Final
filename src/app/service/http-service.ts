import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Service {
  constructor(private http: HttpClient) {}

  getAll<T>(url: string): Observable<T[]> {
    return this.http.get<T[]>(url);
  }

  add<T>(url: string, body: T): Observable<T> {
    return this.http.post<T>(url, body);
  }

  updateById<T>(url: string, id: number, body: T): Observable<T> {
    return this.http.put<T>(`${url}/${id}`, body);
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url);
  }
}
