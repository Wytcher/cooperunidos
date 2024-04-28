import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebComponent } from './web.component';
import { AuthGuardTokenService } from '../_service/auth/auth-guard-token.service';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./login/login.module").then(m => m.LoginModule),
  },
  {
    path: "fornecedores",
    canActivate: [AuthGuardTokenService],
    loadChildren: () => import("./fornecedores/fornecedores.module").then(m => m.FornecedoresModule),
    component: WebComponent
  },
  {
    path: "insumos",
    canActivate: [AuthGuardTokenService],
    loadChildren: () => import("./insumos/insumos.module").then(m => m.InsumosModule),
    component: WebComponent
  },
  {
    path: "compradores",
    canActivate: [AuthGuardTokenService],
    loadChildren: () => import("./compradores/compradores.module").then(m => m.CompradoresModule),
    component: WebComponent
  },
  {
    path: "vendas",
    canActivate: [AuthGuardTokenService],
    loadChildren: () => import("./vendas/vendas.module").then(m => m.VendasModule),
    component: WebComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
