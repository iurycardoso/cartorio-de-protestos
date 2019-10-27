import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ServicosComponent } from './servicos/servicos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartoriosComponent } from './cartorios/cartorios.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cartorios', component: CartoriosComponent },
  { path: 'servicos', component: ServicosComponent },
  { path: 'calculadora', component: CalculadoraComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
