import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { EventosComponent } from './components/eventos/eventos.component';
import { EventoDetalhesComponent } from './components/eventos/evento-detalhes/evento-detalhes.component';
import { EventoListaComponent } from './components/eventos/evento-lista/evento-lista.component';
import { ContatosComponent } from './components/contatos/contatos.component';
import { UserComponent } from './components/user/user.component';
import { PerfilComponent } from './components/user/perfil/perfil.component';
import { LoginComponent } from './components/user/login/login.component';
import { NavComponent } from './shared/nav/nav.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { TitleComponent } from './shared/title/title.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DateFormatPipe } from './helpers/DateFormat.pipe';

import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { defineLocale, ptBrLocale } from 'ngx-bootstrap/chronos';
import { registerLocaleData } from '@angular/common';
import { EventoService } from './service/evento.service';
import { LoteService } from './service/lote.service';

defineLocale('pt-br', ptBrLocale);


@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    EventoDetalhesComponent,
    EventoListaComponent,
    ContatosComponent,
    UserComponent,
    PerfilComponent,
    RegistrationComponent,
    LoginComponent,
    NavComponent,
    DashboardComponent,
    TitleComponent,
    DateFormatPipe,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    CollapseModule.forRoot(),
    TooltipModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true
    }),
    NgxSpinnerModule.forRoot({
       type: 'pacman'
       })
  ],
  providers: [
    EventoService,
   LoteService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  
})
export class AppModule { 
  constructor() {
    registerLocaleData('localePtBr');
  }

}


