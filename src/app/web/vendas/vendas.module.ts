import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendasRoutingModule } from './vendas-routing.module';
import { VendasComponent } from './vendas/vendas.component';
import { CadastrarVendasComponent } from './cadastrar-vendas/cadastrar-vendas.component';
import { AtualizarVendasComponent } from './atualizar-vendas/atualizar-vendas.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    VendasComponent,
    CadastrarVendasComponent,
    AtualizarVendasComponent
  ],
  imports: [
    CommonModule,
    VendasRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ]
})
export class VendasModule { }
