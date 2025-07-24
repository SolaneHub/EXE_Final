import { Component } from '@angular/core';
import { Service } from '../../service/servicehttp';
import { Servizio } from '../../interfaces/servizio';

@Component({
  selector: 'app-servizi',
  standalone: false,
  templateUrl: './servizi.html',
  styleUrl: './servizi.css',
})
export class Servizi {
  servizi: Servizio[] = [];

  constructor(private service: Service) {}

  ngOnInit(): void {
    this.service
      .getAll<Servizio>('http://localhost:8080/servizio')
      .subscribe((response) => {
        console.log(response);
        this.servizi = response;
      });
  }
}
