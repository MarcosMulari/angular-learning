import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [
    RouterLink,
    RouterOutlet,
    MatTableModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './app.html'
})
export class App {}

