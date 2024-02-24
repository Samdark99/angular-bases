import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";

@NgModule({
  declarations: [
    CounterComponent //Lo que se usará dentro del scope del folder
  ],
  exports: [
    CounterComponent //Lo que se usará al mundo exterior
  ]
})
export class CounterModule { }
