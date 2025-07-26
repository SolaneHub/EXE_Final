import { Cliente } from './cliente';
import { Servizio } from './servizio';

export interface Ordine {
  id?: number;
  data: string;
  servizio: Servizio;
  cliente: Cliente;
}
