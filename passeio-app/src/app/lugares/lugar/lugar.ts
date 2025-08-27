import { LugaresService } from './../lugares-service';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoriaService } from '../../categorias/categoria-service';

import { CategoriaObject } from '../../categorias/categoria-object';

@Component({
  selector: 'app-lugar',
  standalone: false,
  templateUrl: './lugar.html',
  styleUrl: './lugar.scss'
})
export class Lugar {
  camposForm: FormGroup
  categorias: CategoriaObject[] = [];

  constructor(private categoriaService: CategoriaService,
    private lugarService: LugaresService
  ){

    this.camposForm = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      categoria: new FormControl('', [Validators.required]),
      localizacao: new FormControl('', [Validators.required]),
      urlFoto: new FormControl('', [Validators.required, Validators.pattern(/https?:\/\/.+\.(jpg|jpeg|png|gif)$/i)]),
      avaliacao: new FormControl('', [
        Validators.required,
        Validators.min(0),
        Validators.max(5)
    ])});
  }

  ngOnInit(): void {
    this.categoriaService.getAll().subscribe({
      next: res => this.categorias = res,
      error: err => console.error('Erro ao carregar categorias', err)
    });
  }

  IsCampoInvalido(nomeCampo : string) : boolean
  {
    return (this.camposForm.get(nomeCampo)?.invalid && this.camposForm.get(nomeCampo)?.touched) || false
  }

  salvar() {
    if (this.camposForm.valid) {
      this.lugarService.create(this.camposForm.value)
        .subscribe({
          next: lugar => {
            console.log("Salva com sucesso!", lugar);
            this.camposForm.reset();
          },
          error: erro => console.error("Ocorreu um erro", erro)
        });
    }
    else {
      this.camposForm.markAllAsTouched();

      const camposInvalidos = Object.keys(this.camposForm.controls)
        .filter(campo => this.camposForm.get(campo)?.invalid);

      console.warn("Campos inválidos:", camposInvalidos);
    }
  }
}
