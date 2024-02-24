//1. Importaciones de Javascript y Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//2. Librería de 3ros o Modules
import { CounterModule } from './counter/counter.module';
//3. Nuestro código
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [ //CUALQUIER module va en los imports
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
