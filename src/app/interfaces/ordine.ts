import { Cliente } from './cliente';
import { Servizio } from './servizio';

export interface Ordine {
  data: string;
  servizio: Servizio;
  cliente: Cliente;
}
