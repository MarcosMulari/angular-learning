import { Component, inject } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input'
import { MatSnackBar } from '@angular/material/snack-bar'
import { MatSelectChange, MatSelectModule } from '@angular/material/select'
import { OnInit } from '@angular/core';

import { Cliente } from './cliente'
import { ClienteService } from '../clienteservice'
import { v4 as uuid } from 'uuid';
import { ActivatedRoute, Router } from '@angular/router';

import { NgxMaskDirective, provideNgxMask } from 'ngx-mask'
import { Brasilapi } from '../brasilapi';
import { Estado, Municipio } from '../brasilapi.models';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cadastro',
  imports: [
    FlexLayoutModule,
    FormsModule,
    CommonModule,

    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    NgxMaskDirective
  ],
  providers: provideNgxMask(),
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.scss'
})
export class Cadastro implements OnInit{

  cliente: Cliente = Cliente.newClient();
  atualizando: boolean = false;
  snack: MatSnackBar = inject(MatSnackBar);

  estados: Estado[] = [];
  municipios: Municipio[] =[];

  constructor(
    private service: ClienteService,
    private brasilService: Brasilapi,

    private route:ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit(): void {

    this.route.queryParamMap.subscribe( (query: any) => { // tem que "tipar" o parametro, daria para usar dtos aqui?
      const params = query['params']
      const id = params['id']
      if(id){
        let clienteEncontrado = this.service.buscarClientePorId(id)
        if (clienteEncontrado){
          this.atualizando = true;
          this.cliente = clienteEncontrado;
          if (this.cliente.uf){
            const event = {value: this.cliente.uf}
            this.carregarMunicipios(event as MatSelectChange);
          }

        }
        // nao necessario pq o ja foi instanciado na tela
        else{
        this.cliente = Cliente.newClient()
        }
      }
    })
    this.carregarUFs()
  }

  salvar(): void {
    if (!this.atualizando)
    {
     this.cadastrar();
    }
    else{
      this.atualizar(this.cliente)
      this.router.navigate(['/consulta'])
    }
  }
  cadastrar() : void {
    this.cliente.id = uuid();

    this.service.cadastrar(this.cliente);

    this.SuccessMessage("Usuário cadastrado com sucesso")

    this.cliente = Cliente.newClient();
  }

  atualizar(cliente : Cliente) : void { // aqui deveria chamar uma service que bate no endpoint de atualizar o usuario
    this.service.atualizar(cliente)

    this.SuccessMessage("Usuário atualizado com sucesso")
  }

  carregarUFs()
  {
    // Observable: avisa alteracao; subscriver: recebe -> confirmado, é por ser requisicao assincrona que é observable
    this.brasilService.listarUFs().subscribe({
      next: listaEstados => this.estados = listaEstados,
      error: erro => console.log("Ocorreu um erro", erro)
    })
  }

  carregarMunicipios(event : MatSelectChange){
    const ufSelecionada = event.value;
    this.brasilService.listarMunicipios(ufSelecionada).subscribe({
      next: listaMunicipios => this.municipios = listaMunicipios,
      error: erro => console.log("Ocorreu um erro", erro)
    })
  }

  SuccessMessage(mensagem:string){
    this.snack.open(mensagem, "Ok")
  }

}
