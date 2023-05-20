import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompradoresComponent } from './compradores/compradores.component';
import { CadastrarCompradoresComponent } from './cadastrar-compradores/cadastrar-compradores.component';
import { AtualizarCompradoresComponent } from './atualizar-compradores/atualizar-compradores.component';

const routes: Routes = [
  {
    path: "",
    component: CompradoresComponent,
  },
  {
    path: "cadastrar",
    component: CadastrarCompradoresComponent
  },
  {
    path: "atualizar/:id",
    component: AtualizarCompradoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompradoresRoutingModule { }
