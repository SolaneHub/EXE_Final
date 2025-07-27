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
  url: string = 'http://localhost:8080/servizio';
  servizi: Servizio[] = [];
  servizio: Servizio = {
    nome: '',
    prezzo: 0,
    descrizione: '',
    tipoServizio: {
      nome: '',
    },
  };

  constructor(private service: Service) {}

  ngOnInit(): void {
    this.service.getAll<Servizio>(this.url).subscribe((response) => {
      console.log(response);
      this.servizi = response;
    });
  }

  addServizio() {
    this.service
      .add<Servizio>(this.url, this.servizio)
      .subscribe((newServizio) => {
        this.servizi.push(newServizio);
      });
  }

  deleteServizio(id: number) {
    this.service.delete<Servizio>(this.url + `/${id}`).subscribe((response) => {
      console.log(response);
      this.servizi = this.servizi.filter((servizi) => servizi.id !== id);
    });
  }
}
