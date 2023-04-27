import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendasRoutingModule } from './vendas-routing.module';
import { VendasComponent } from './vendas/vendas.component';
import { CadastrarVendasComponent } from './cadastrar-vendas/cadastrar-vendas.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VendasComponent,
    CadastrarVendasComponent
  ],
  imports: [
    CommonModule,
    VendasRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class VendasModule { }
