import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompradoresRoutingModule } from './compradores-routing.module';
import { CompradoresComponent } from './compradores/compradores.component';
import { CadastrarCompradoresComponent } from './cadastrar-compradores/cadastrar-compradores.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';


@NgModule({
  declarations: [
    CompradoresComponent,
    CadastrarCompradoresComponent
  ],
  imports: [
    CommonModule,
    CompradoresRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class CompradoresModule { }
