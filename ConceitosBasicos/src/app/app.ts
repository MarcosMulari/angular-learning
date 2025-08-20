import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {CalculadoraComponent} from './calculadora/calculadora.component'

@Component({
  selector: 'app-root',
  standalone : true,
  imports: [CalculadoraComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ConceitosBasicos');
}
