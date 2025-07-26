export interface Servizio {
  id?: number;
  nome: string;
  prezzo: number;
  descrizione: string;
  tipoServizio: {
    id?: number;
    nome: string;
  };
}
