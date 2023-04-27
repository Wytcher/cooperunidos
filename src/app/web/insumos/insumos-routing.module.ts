import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsumosComponent } from './insumos/insumos.component';
import { CadastrarInsumosComponent } from './cadastrar-insumos/cadastrar-insumos.component';

const routes: Routes = [
  {
    path: '',
    component: InsumosComponent
  },
  {
    path: 'cadastrar',
    component: CadastrarInsumosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsumosRoutingModule { }
