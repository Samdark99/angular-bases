import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(private dbzService: DbzService){}

  get characters(): Character[]{
    return [...this.dbzService.characters]; //Sin el operador spread (...) esto modificaria la data original del service, e intentamos evitar el 2 data binding
  }

  onDeleteCharacter(id: string): void{ //Es mejor llamar métodos e invocar dentro los métodos del service
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character): void{
    this.dbzService.addCharacter(character);
  }
}
