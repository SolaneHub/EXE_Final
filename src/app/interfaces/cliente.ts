export interface Cliente {
  id?: number;
  ragioneSociale?: string;
  tipoCliente?: string;
  partitaIva?: string;
  indirizzo?: {
    via?: string;
    civico?: string;
    cap?: string;
    comune?: {
      nome?: string;
      provincia?: {
        nome?: string;
        sigla?: string;
      };
    };
  };
  email?: string;
  telefono?: string;
  fatturatoAnnuale?: number;
}
