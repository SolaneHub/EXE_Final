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
  ordini: Ordine[] = [];

  constructor(private service: Service) {}

  ngOnInit() {
    this.service
      .getAll<Ordine>('http://localhost:8080/ordini')
      .subscribe((response) => {
        console.log(response);
        this.ordini = response;
      });
  }
}
