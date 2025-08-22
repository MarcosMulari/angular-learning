import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout'
import {MatCardModule} from '@angular/material/card'


@Component({
  selector: 'app-cadastro',
  imports: [FlexLayoutModule, MatCardModule ],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.scss'
})
export class Cadastro {

}
