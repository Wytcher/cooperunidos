import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsumosRoutingModule } from './insumos-routing.module';
import { InsumosComponent } from './insumos/insumos.component';
import { CadastrarInsumosComponent } from './cadastrar-insumos/cadastrar-insumos.component';
import { AtualizarInsumosComponent } from './atualizar-insumos/atualizar-insumos.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    InsumosComponent,
    CadastrarInsumosComponent,
    AtualizarInsumosComponent
  ],
  imports: [
    CommonModule,
    InsumosRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ]
})
export class InsumosModule { }
