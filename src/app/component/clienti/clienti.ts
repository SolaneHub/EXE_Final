import { Component, OnInit } from '@angular/core';
import { Service } from '../../service/service';
import { Cliente } from '../../interfaces/cliente';

@Component({
  selector: 'app-clienti',
  standalone: false,
  templateUrl: './clienti.html',
  styleUrl: './clienti.css',
})
export class Clienti {
  cliente: Cliente[] = []

  constructor(private service: Service) {}

  ngOnInit(): void {
    this.service
      .stampaClienti('http://localhost:8080/clienti')
      .subscribe((response) => {
        console.log(response);
        this.cliente = response;
      });
  }
}
