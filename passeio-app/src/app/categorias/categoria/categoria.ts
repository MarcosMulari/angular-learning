import { CategoriaService } from './../categoria-service';
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

  constructor(private categoriaService: CategoriaService) {
      this.camposForm = new FormGroup({
        nome: new FormControl('', [Validators.required, Validators.maxLength(16)]),
        descricao: new FormControl('', [Validators.required])}
    );
  }

  salvar() {
    this.camposForm.markAllAsTouched();

    if (this.camposForm.valid) {
      this.categoriaService.create(this.camposForm.value)
        .subscribe({
          next: categoria => {
            console.log("Salva com sucesso!", categoria);
            this.camposForm.reset();
          },
          error: erro => console.error('Ocorreu um erro', erro)
        });
    }
    else {
      const camposInvalidos = Object.keys(this.camposForm.controls)
        .filter(campo => this.camposForm.get(campo)?.invalid);

      console.warn("Campos inválidos:", camposInvalidos);
    }
  }


  IsCampoInvalido(nomeCampo : string) : boolean
  {
    return (this.camposForm.get(nomeCampo)?.invalid && this.camposForm.get(nomeCampo)?.touched) || false
  }
}
