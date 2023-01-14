import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { MarcaAddComponent } from './marca/marca-add/marca-add.component';
import { MarcaEditComponent } from './marca/marca-edit/marca-edit.component';
import { VeiculoAddComponent } from './Veiculo/veiculo-add/veiculo-add.component';
import { VeiculoEditComponent } from './Veiculo/veiculo-edit/veiculo-edit.component';


const routes: Routes = [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'home',
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'nova-marca',
      component: MarcaAddComponent
    },
    {
      path: 'edit-marca/:id',
      component: MarcaEditComponent
    },
    {
      path: 'novo-veiculo',
      component: VeiculoAddComponent
    },
    {
      path: 'edit-veiculo/:id',
      component: VeiculoEditComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
