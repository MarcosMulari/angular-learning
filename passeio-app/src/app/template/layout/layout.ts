import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: false, // a partir do angular 19, todos os componenets são standalone: true por padrão
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {

}
