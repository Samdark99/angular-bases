//1. Importaciones de Javascript y Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//2. Librería de 3ros o Modules
import { AppRoutingModule } from './app-routing.module';
//3. Nuestro código
import { CounterModule } from './counter/counter.module';
import { DbzModule } from './dbz/dbz.module';
import { HeroesModule } from './heroes/heroes.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [ //CUALQUIER Module va en los imports
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
