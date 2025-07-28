import { Component } from '@angular/core';
import { Ordine } from '../../interfaces/ordine';
import { Cliente } from '../../interfaces/cliente';
import { OrdineService } from '../../service/ordine-service';
import { ClienteService } from '../../service/cliente-service';

@Component({
  selector: 'app-ordini',
  standalone: false,
  templateUrl: './ordini.html',
  styleUrl: './ordini.css',
})
export class Ordini {
  ordini: Ordine[] = [];
  clienti: Cliente[] = [];

  ordine: Ordine = {
    data: '',
    servizio: {
      nome: '',
      descrizione: '',
    },
    cliente: {
      ragioneSociale: '',
    },
  };

  constructor(
    private ordineService: OrdineService,
    private clienteService: ClienteService
  ) {}

  ngOnInit() {
    this.ordineService
      .getAll()
      .subscribe((ordini: Ordine[]) => (this.ordini = ordini));
    this.clienteService
      .getAll()
      .subscribe((clienti: Cliente[]) => (this.clienti = clienti));
  }

  addOrdine() {
    this.ordineService.add(this.ordine).subscribe((newOrdine: Ordine) => {
      this.ordini.push(newOrdine);
    });
  }

  deleteOrdine(id: number) {
    this.ordineService.delete(id).subscribe(() => {
      this.ordini = this.ordini.filter((ordine) => ordine.id !== id);
    });
  }
}
