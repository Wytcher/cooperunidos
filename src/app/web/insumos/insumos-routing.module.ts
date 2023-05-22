import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsumosComponent } from './insumos/insumos.component';
import { CadastrarInsumosComponent } from './cadastrar-insumos/cadastrar-insumos.component';
import { AtualizarInsumosComponent } from './atualizar-insumos/atualizar-insumos.component';

const routes: Routes = [
  {
    path: '',
    component: InsumosComponent
  },
  {
    path: 'cadastrar',
    component: CadastrarInsumosComponent
  },
  {
    path: 'atualizar/:id',
    component: AtualizarInsumosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsumosRoutingModule { }
