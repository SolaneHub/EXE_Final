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

  constructor(private service: Service) {}

  ngOnInit(): void {
    this.service
      .getAll<Fattura>('http://localhost:8080/fatture')
      .subscribe((response) => {
        console.log(response);
        this.fatture = response;
      });
  }
}
