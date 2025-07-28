import { Component } from '@angular/core';
import { Service } from '../../service/http-service';
import { Cliente } from '../../interfaces/cliente';
import { ClienteService } from '../../service/cliente-service';

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

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.clienteService
      .getAll()
      .subscribe((clienti: Cliente[]) => (this.clienti = clienti));
  }

  addCliente() {
    this.clienteService.add(this.cliente).subscribe((newCliente) => {
      this.clienti.push(newCliente);
    });
  }

  updateCliente() {
    this.clienteService
      .update(this.cliente.id!, this.cliente)
      .subscribe((updateCliente) => {
        this.clienti.push(updateCliente);
      });
  }

  deleteCliente(id: number) {
    this.clienteService.delete(id).subscribe((response) => {
      console.log(response);
      this.clienti = this.clienti.filter((clienti) => clienti.id !== id);
    });
  }
}
