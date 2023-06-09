import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompradoresRoutingModule } from './compradores-routing.module';
import { CompradoresComponent } from './compradores/compradores.component';
import { CadastrarCompradoresComponent } from './cadastrar-compradores/cadastrar-compradores.component';
import { AtualizarCompradoresComponent } from './atualizar-compradores/atualizar-compradores.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    CompradoresComponent,
    CadastrarCompradoresComponent,
    AtualizarCompradoresComponent
  ],
  imports: [
    CommonModule,
    CompradoresRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    ToastrModule.forRoot()
  ]
})
export class CompradoresModule { }
