import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeroesModule } from './Heroes/heroes.module';
import { ContadorModule } from './contador/contador/contador.module';
import { AvatarModule } from './avatar/avatar.module';




@NgModule({
  declarations: [
    AppComponent, 
     //control + punto --> se puede elegir opción de importación 
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule, 
    AvatarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
