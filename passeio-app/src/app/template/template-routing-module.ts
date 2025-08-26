import { Categoria } from './../categorias/categoria/categoria';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { CategoriasModule } from '../categorias/categorias-module';

const routes: Routes = [{
path:'paginas',
component: Layout,
children:[
  {
    path:'categorias',
    loadChildren: () => import('../categorias/categorias-module').then(m => m.CategoriasModule)
  }
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
