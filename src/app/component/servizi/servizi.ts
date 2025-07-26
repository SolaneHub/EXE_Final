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
  servizio: Servizio={
    nome: '',
    prezzo: 0,
    descrizione: '',
    tipoServizio: {
      nome: ''
    }
  };

  constructor(private service: Service) {}

  ngOnInit(): void {
    this.service
      .getAll<Servizio>('http://localhost:8080/servizio')
      .subscribe((response) => {
        console.log(response);
        this.servizi = response;
      });
  }

  addServizio(){
    this.service.add<Servizio>('http://localhost:8080/servizio', this.servizio)
    .subscribe((newServizio) =>{
      this.servizi.push(newServizio);
    })
  }

  deleteServizio(id: number) {
    this.service
      .delete<Servizio>(`http://localhost:8080/servizio/${id}`)
      .subscribe((response) => {
        console.log(response);
        this.servizi = this.servizi.filter((servizi) => servizi.id !== id);
      });
  }
}
