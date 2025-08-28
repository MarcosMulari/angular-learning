import { Component, OnInit } from '@angular/core';
import { Lugar } from '../../lugares/lugar/lugar';
import { LugarObject } from '../../lugares/lugar-object';
import { LugaresService } from '../../lugares/lugares-service';
import { CategoriaService } from '../../categorias/categoria-service';
import { CategoriaObject } from '../../categorias/categoria-object';

@Component({
  selector: 'app-galeria-component',
  standalone: false,
  templateUrl: './galeria-component.html',
  styleUrl: './galeria-component.scss'
})
export class GaleriaComponent {
  todosOsLugares: LugarObject[] = []
  lugares : LugarObject[] =[]
  categoriasFiltro : CategoriaObject[] = []
  nomeFiltro: string = ''
  categoriaFiltro: string = ''

constructor(private lugarService:LugaresService,
private categoriaService: CategoriaService
){

}

  ngOnInit(): void {
    this.categoriaService.getAll().subscribe(categorias => this.categoriasFiltro = categorias);

    this.lugarService.getAll().subscribe(lugaresResposta => {
      this.lugares = lugaresResposta;
      this.todosOsLugares = lugaresResposta;
    });
  }


  filtrarLugares(){ this.lugarService.filter(this.nomeFiltro, this.categoriaFiltro).subscribe(lugaresFiltrados => this.lugares = lugaresFiltrados) }

  getTotalEstrelas(lugar: LugarObject) : string{
    const estrelas = (lugar.avaliacao || 0)
    const estrelasVazias = 5 - (lugar.avaliacao || 0)
    return '&#9733'.repeat(estrelas) + '&#9734'.repeat(estrelasVazias)

  }

}
