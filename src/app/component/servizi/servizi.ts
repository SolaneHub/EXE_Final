import { Component } from '@angular/core';
import { Service } from '../../service/service';
import { Servizio } from '../../interfaces/servizo';

@Component({
  selector: 'app-servizi',
  standalone: false,
  templateUrl: './servizi.html',
  styleUrl: './servizi.css',
})
export class Servizi {
  servizio: Servizio[] = [];

  constructor(private service: Service) {}

  ngOnInit(): void {
    this.service
      .stampaServizi('http://localhost:8080/servizio')
      .subscribe((response) => {
        console.log(response);
        this.servizio = response;
      });
  }
}
