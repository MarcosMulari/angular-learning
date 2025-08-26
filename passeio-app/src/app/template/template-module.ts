import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing-module';
import { Layout } from './layout/layout';
import { CategoriasRoutingModule } from '../categorias/categorias-routing-module';


@NgModule({
  declarations: [
    Layout
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule
  ]
})
export class TemplateModule { }
