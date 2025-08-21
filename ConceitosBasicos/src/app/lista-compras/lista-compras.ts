import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-compras',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-compras.html',
  styleUrl: './lista-compras.css'
})
export class ListaCompras {
  newItem: string = '';
  items: { name: string; comprado: boolean }[] = [];

  addItem() {
    const itemName = this.newItem.trim();
    if (!itemName) return;

    this.items.push({ name: itemName, comprado: false });
    this.newItem = ''; // limpa campo
  }
  removeItem(index: number) {
    this.items.splice(index, 1);
  }
}
