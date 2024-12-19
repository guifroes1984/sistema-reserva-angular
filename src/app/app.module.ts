import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './basico/componentes/login/login.component';
import { SingupComponent } from './basico/componentes/singup/singup.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { pt_BR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoNgZorroAntModule } from './DemoNgZorroAntModule';
import { InscreverClienteComponent } from './basico/componentes/inscrever-cliente/inscrever-cliente.component';
import { InscreverEmpresaComponent } from './basico/componentes/inscrever-empresa/inscrever-empresa.component';

registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SingupComponent,
    InscreverClienteComponent,
    InscreverEmpresaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoNgZorroAntModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: pt_BR }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
