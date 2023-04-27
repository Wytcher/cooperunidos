import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompradoresComponent } from './compradores/compradores.component';
import { CadastrarCompradoresComponent } from './cadastrar-compradores/cadastrar-compradores.component';

const routes: Routes = [
  {
    path: "",
    component: CompradoresComponent,
  },
  {
    path: "cadastrar",
    component: CadastrarCompradoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompradoresRoutingModule { }
