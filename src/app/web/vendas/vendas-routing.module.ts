import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendasComponent } from './vendas/vendas.component';
import { CadastrarVendasComponent } from './cadastrar-vendas/cadastrar-vendas.component';
import { AtualizarVendasComponent } from './atualizar-vendas/atualizar-vendas.component';

const routes: Routes = [
  {
    path: "",
    component: VendasComponent
  },
  {
    path: "cadastrar",
    component: CadastrarVendasComponent
  },
  {
    path: 'atualizar/:id',
    component: AtualizarVendasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendasRoutingModule { }
