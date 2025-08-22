import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input'

import { Cliente } from './cliente'
import { ClienteService } from '../clienteservice'


@Component({
  selector: 'app-cadastro',
  imports: [FlexLayoutModule,
            MatCardModule,
            FormsModule,
            MatFormFieldModule,
            MatInputModule,
            MatIconModule,
            MatButtonModule
  ],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.scss'
})
export class Cadastro {
  cliente: Cliente = Cliente.newClient();
  constructor(private service: ClienteService) {


  }

  cadastrar(): void {
    this.service.cadastrar(this.cliente) // aplica a lógica -> regra de services. Chama API, etc. Mais organização
  }
}
