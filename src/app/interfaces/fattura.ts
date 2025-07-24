import { Cliente } from './cliente';

export interface Fattura {
  data: string;
  importo: number;
  stato: string;
  cliente: Cliente;
}
