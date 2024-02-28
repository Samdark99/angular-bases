import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk','Thor'];
  public deletedHero?: string; //Valor que existe o no

  removeLastHero(): void{
    //Elimina el último elemento del array y regresa el nuevo arreglo, su contraparte es el shift
    this.deletedHero = this.heroNames.pop(); //Así el valor indica que se borró un heroe y será renderizado globalmente
    //console.log({deletedHero});
  }
}
