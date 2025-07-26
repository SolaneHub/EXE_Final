import { Component } from '@angular/core';
import { Service } from '../../service/servicehttp';
import { Cliente } from '../../interfaces/cliente';

@Component({
  selector: 'app-clienti',
  standalone: false,
  templateUrl: './clienti.html',
  styleUrl: './clienti.css',
})
export class Clienti {
  clienti: Cliente[] = [];
  cliente: Cliente = {
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
  };
  orderAsc: boolean = true;

  constructor(private service: Service) {}

  ngOnInit(): void {
    this.service
      .getAll<Cliente>('http://localhost:8080/clienti')
      .subscribe((response) => {
        console.log(response);
        this.clienti = response;
      });
  }

  addCliente() {
    this.service
      .add<Cliente>('http://localhost:8080/clienti', this.cliente)
      .subscribe((newCliente) => {
        this.clienti.push(newCliente);
      });
  }

  deleteCliente(id: number) {
    this.service
      .delete<Cliente>(`http://localhost:8080/clienti/${id}`)
      .subscribe((response) => {
        console.log(response);
        this.clienti = this.clienti.filter((clienti) => clienti.id !== id);
      });
  }
}
