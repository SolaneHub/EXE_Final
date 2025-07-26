import { Component } from '@angular/core';
import { Service } from '../../service/servicehttp';
import { Fattura } from '../../interfaces/fattura';

@Component({
  selector: 'app-fatture',
  standalone: false,
  templateUrl: './fatture.html',
  styleUrl: './fatture.css',
})
export class Fatture {
  fatture: Fattura[] = [];
  orderAsc: boolean = true;

  constructor(private service: Service) {}

  ngOnInit(): void {
    this.service
      .getAll<Fattura>('http://localhost:8080/fatture')
      .subscribe((response) => {
        console.log(response);
        this.fatture = response;
      });
  }

    deleteFattura(id: number) {
      this.service
        .delete<Fattura>(`http://localhost:8080/fatture/${id}`)
        .subscribe((response) => {
          console.log(response);
          this.fatture = this.fatture.filter((fatture) => fatture.id !== id);
        });
    }

  orderAlphabetically(campo: keyof Fattura) {
    this.fatture = [...this.fatture].sort((a, b) =>
      this.orderAsc
        ? a[campo].toString().localeCompare(b[campo].toString())
        : b[campo].toString().localeCompare(a[campo].toString())
    );
    this.orderAsc = !this.orderAsc;
  }
}
