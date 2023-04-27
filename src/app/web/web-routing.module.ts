import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebComponent } from './web.component';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./index/index.module").then(m => m.IndexModule),
    component: WebComponent
  },
  {
    path: "fornecedores",
    loadChildren: () => import("./fornecedores/fornecedores.module").then(m => m.FornecedoresModule),
    component: WebComponent
  },
  {
    path: "insumos",
    loadChildren: () => import("./insumos/insumos.module").then(m => m.InsumosModule),
    component: WebComponent
  },
  {
    path: "compradores",
    loadChildren: () => import("./compradores/compradores.module").then(m => m.CompradoresModule),
    component: WebComponent
  },
  {
    path: "vendas",
    loadChildren: () => import("./vendas/vendas.module").then(m => m.VendasModule),
    component: WebComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
