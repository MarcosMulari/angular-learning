import { Injectable } from '@angular/core';
import { Cliente } from './cadastro/cliente';

@Injectable({
  providedIn: 'root'
})

// isso aqui que chama as APIs, estudar mais arquitetura de front-end

export class ClienteService {

  static REPO_CLIENTES = "_CLIENTES"

  constructor() {}

  cadastrar(cliente: Cliente){
    const storage = this.obterStorage();
    storage.push(cliente);

    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));
  }

  obterStorage() : Cliente[]{
    const dbClientes = localStorage.getItem(ClienteService.REPO_CLIENTES)
    if (dbClientes)
      {
        const clientes: Cliente[] = JSON.parse(dbClientes)
        return clientes
      }
    const clientes: Cliente[] = [];
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(clientes));
    return clientes
  }
}
