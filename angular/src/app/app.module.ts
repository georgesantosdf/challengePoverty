import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ErrorFormComponent } from './shared/validators/erro-form/error-form.component';
import { IndicadoresComponent } from './pages/indicadores/indicadores.component';
import { IndicadorService } from './pages/indicadores/indicadores.service';

@NgModule({
  declarations: [
    AppComponent,
    ErrorFormComponent,
    IndicadoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    ErrorFormComponent
  ],
  providers: [IndicadorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
