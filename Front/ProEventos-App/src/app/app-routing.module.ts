import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EventoDetalhesComponent } from './components/eventos/evento-detalhes/evento-detalhes.component';
import { EventoListaComponent } from './components/eventos/evento-lista/evento-lista.component';
import { UserComponent } from './components/user/user.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { LoginComponent } from './components/user/login/login.component';
import { PerfilComponent } from './components/user/perfil/perfil.component';
import { ContatosComponent } from './components/contatos/contatos.component';



const routes: Routes = [
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'perfil', component: PerfilComponent},
      { path: 'registration', component: RegistrationComponent },
    ]
  },

  { path: 'eventos', redirectTo: 'eventos/lista' },
  {
    path: 'eventos', component: EventosComponent,
    children: [
      { path: 'detalhe/:id', component: EventoDetalhesComponent },
      { path: 'detalhe', component: EventoDetalhesComponent },
      { path: 'lista', component: EventoListaComponent },
    ],
  },


  {
    path: 'eventos', component: EventosComponent,
    children: [
      { path: 'detalhe/:id', component: EventoDetalhesComponent },
      { path: 'detalhe', component: EventoDetalhesComponent },
      { path: 'lista', component: EventoListaComponent },
    ],
  },


  { path: 'dashboard', component: DashboardComponent },


  { path: 'contatos', component: ContatosComponent },

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }