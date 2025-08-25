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

  atualizar(cliente: Cliente): void {
    const storage = this.obterStorage();

    // procura o índice do cliente existente pelo id
    const index = storage.findIndex(c => c.id === cliente.id);

    if (index !== -1) {
      // substitui o cliente antigo pelo atualizado
      storage[index] = cliente;
      localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));
    } else {
      console.warn(`Cliente com id ${cliente.id} não encontrado para atualização`);
    }
  }

  deletar(cliente: Cliente): void {
    const storage = this.obterStorage();

    // filtra removendo o cliente cujo id é igual ao informado
    const novoStorage = storage.filter(c => c.id !== cliente.id);

    // sobrescreve no localStorage
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(novoStorage));
  }

  //f(x) que passa nome e retorna um array de clientes
  pesquisarCliente(nomeBusca: string) : Cliente[]{

    const clientes = this.obterStorage()
    if(!nomeBusca){
      return clientes
    }

    return clientes.filter(cliente => cliente.nome?.toLowerCase().indexOf(nomeBusca.toLowerCase()) !== -1)
  }

  buscarClientePorId(id: string) : Cliente | undefined {
    const clientes = this.obterStorage()

    return clientes.find(clientes => clientes.id === id)
  }

  //f(x) que retorna todos os clientes
  private obterStorage() : Cliente[]{
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
