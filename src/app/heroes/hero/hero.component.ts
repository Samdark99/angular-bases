import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string{ //Un get basicamente es un método de clase que se usa como propiedad, con esto se evita que se actualize el valor desde el html, osea solo hay un one way data binding
    return this.name.toUpperCase();
  }

  getHeroDescription(): string{
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void{ //Al no haber cambios de estado, este no vuelve a renderizar el HTML
    this.name = 'Spiderman';
  }

  changeAge(): void{
    this.age = 25;
  }

  resetForm(): void{
    this.name = 'ironman';
    this.age = 45;

    // document.querySelectorAll('h1')!.forEach(element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>';
    // }); //Como esto esta fuera del ciclo de detecciones de Angular, ya que son propias de Javascript, no detecta jamás los cambios verdaderos
  }
}
