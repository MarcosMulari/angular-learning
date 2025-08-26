import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-categoria',
  standalone: false,
  templateUrl: './categoria.html',
  styleUrl: './categoria.scss'
})
export class Categoria {
  camposForm: FormGroup;

  constructor() {
      this.camposForm = new FormGroup({
        nome: new FormControl('', [Validators.required, Validators.maxLength(16)]),
        descricao: new FormControl('', [Validators.required])}
    );
  }

  salvar(){
    console.log("valores digitados", this.camposForm.value)
    console.log("está válido", this.camposForm.valid)
  }
}
