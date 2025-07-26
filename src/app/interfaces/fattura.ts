import { Cliente } from './cliente';

export interface Fattura {
  id?: number;
  data: string;
  importo: number;
  stato: string;
  cliente: Cliente;
}
