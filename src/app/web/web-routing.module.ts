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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
