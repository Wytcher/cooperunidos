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
    path: "cadastrar",
    loadChildren: () => import("./cadastrar/cadastrar.module").then(m => m.CadastrarModule),
    component: WebComponent
  },
  {
    path: "fornecedores",
    loadChildren: () => import("./fornecedores/fornecedores.module").then(m => m.FornecedoresModule),
    component: WebComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
