import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FornecedoresRoutingModule } from './fornecedores-routing.module';
import { FornecedoresComponent } from './fornecedores/fornecedores.component';
import { CadastrarFornecedoresComponent } from './cadastrar-fornecedores/cadastrar-fornecedores.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    FornecedoresComponent,
    CadastrarFornecedoresComponent
  ],
  imports: [
    CommonModule,
    FornecedoresRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    ToastrModule.forRoot()
  ]
})
export class FornecedoresModule { }
