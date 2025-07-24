import { Component, OnInit } from '@angular/core';
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

  orderByRagioneSociale() {
    this.clienti = [...this.clienti].sort((a, b) =>
      this.orderAsc
        ? a.ragioneSociale.localeCompare(b.ragioneSociale)
        : b.ragioneSociale.localeCompare(a.ragioneSociale)
    );
    this.orderAsc = !this.orderAsc;
  }
}
