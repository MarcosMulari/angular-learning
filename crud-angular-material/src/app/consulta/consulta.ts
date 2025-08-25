import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { ClienteService } from '../clienteservice';
import { Cliente } from '../cadastro/cliente';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-consulta',
  imports: [MatInputModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule],
  templateUrl: './consulta.html',
  styleUrl: './consulta.scss'
})
export class Consulta implements OnInit {

  nomeBusca : string= ''
  listaClientes : Cliente[] = [];
  displayedColumns: string[] = ['id', 'nome', 'email', 'cpf', 'acoes'];

  snack: MatSnackBar = inject(MatSnackBar)

  constructor(private service: ClienteService,
    private router: Router
  ){

  }
  ngOnInit(){
    this.listaClientes = this.service.pesquisarCliente('');
  }

  pesquisar(){
    this.listaClientes = this.service.pesquisarCliente(this.nomeBusca)
  }

  preparaEditar(id: string){
    this.router.navigate(['/cadastro'], {queryParams : {"id" : id}}
    )
  }
  preparaDeletar(cliente: Cliente)
  {
    cliente.deletando = true;
  }
  deletar(cliente : Cliente){
    this.service.deletar(cliente);
    this.listaClientes = this.service.pesquisarCliente('');
    this.SuccessMessage("Usuário deletado com sucesso")
  }

  SuccessMessage(mensagem:string){
    this.snack.open(mensagem, "Ok")
  }
}
