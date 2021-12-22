import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { HeroeComponent } from './Heroes/heroe/heroe.component';

@NgModule({
  declarations: [
    AppComponent, 
    ContadorComponent, //control + punto --> se puede elegir opción de importación 
    HeroeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
