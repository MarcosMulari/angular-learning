import { v4 as uuid } from 'uuid';

export class Cliente {
  id?: string;
  nome?: string;
  telefone?: string;
  dataNascimento?: string;
  email?: string;
  cpf?: string; // adicionado
  deletando: boolean = false;

  static newClient() {
    const cliente = new Cliente();
    return cliente;
  }
}
