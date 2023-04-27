import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FornecedoresComponent } from './fornecedores/fornecedores.component';
import { CadastrarFornecedoresComponent } from './cadastrar-fornecedores/cadastrar-fornecedores.component';

const routes: Routes = [
  {
    path: '',
    component: FornecedoresComponent
  },
  {
    path: 'cadastrar',
    component: CadastrarFornecedoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FornecedoresRoutingModule { }
