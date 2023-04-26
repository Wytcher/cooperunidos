import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FornecedoresRoutingModule } from './fornecedores-routing.module';
import { FornecedoresComponent } from './fornecedores/fornecedores.component';
import { CadastrarFornecedoresComponent } from './cadastrar-fornecedores/cadastrar-fornecedores.component';


@NgModule({
  declarations: [
    FornecedoresComponent,
    CadastrarFornecedoresComponent
  ],
  imports: [
    CommonModule,
    FornecedoresRoutingModule
  ]
})
export class FornecedoresModule { }
