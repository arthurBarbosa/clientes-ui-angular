import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ClientesService } from './clientes.service';
import { ClientesModule } from './clientes/clientes.module';
import { TemplateModule } from './template/template.module';
import { ServicoModule } from './servico/servico.module';
import { ServicoService } from './servico.service';
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientesModule,
    TemplateModule,
    HttpClientModule,
    ServicoModule
  ],
  providers: [
    ClientesService,
    ServicoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
