import { Component } from '@angular/core';
import { Ordine } from '../../interfaces/ordine';
import { Service } from '../../service/servicehttp';

@Component({
  selector: 'app-ordini',
  standalone: false,
  templateUrl: './ordini.html',
  styleUrl: './ordini.css',
})
export class Ordini {
  url: string = 'http://localhost:8080/ordini';
  ordini: Ordine[] = [];
  ordine: Ordine = {
    data: '',
    servizio: {
      nome: '',
      prezzo: 0,
      descrizione: '',
      tipoServizio: {
        nome: '',
      },
    },
    cliente: {
      ragioneSociale: '',
      tipoCliente: '',
      partitaIva: '',
      indirizzo: {
        via: '',
        civico: '',
        cap: '',
        comune: {
          nome: '',
          provincia: {
            nome: '',
            sigla: '',
          },
        },
      },
      email: '',
      telefono: '',
      fatturatoAnnuale: 0,
    },
  };

  constructor(private service: Service) {}

  ngOnInit() {
    this.service.getAll<Ordine>(this.url).subscribe((response) => {
      console.log(response);
      this.ordini = response;
    });
  }

  addServizio() {
    this.service.add<Ordine>(this.url, this.ordine).subscribe((newOrdine) => {
      this.ordini.push(newOrdine);
    });
  }

  deleteOrdine(id: number) {
    this.service.delete<Ordine>(this.url + `/${id}`).subscribe((response) => {
      console.log(response);
      this.ordini = this.ordini.filter((ordini) => ordini.id !== id);
    });
  }
}
