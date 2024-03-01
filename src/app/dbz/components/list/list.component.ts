import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input() //Esto se vuelve un decorador, donde se indica que el input debe ser llamado characterList y debe ser un arreglo de Character
  public characterList: Character[] = [
    {
      name: "Trunks",
      power: 10
    }
  ];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter(); //Los EventEmitter hay que tratar que no sea undefined
  // public onDelete = new EventEmitter<number>(); //Esta es otra forma de crear el EventEmitter tipado

  onDeleteCharacter(id?: string): void{ //Si no existe, podemos hacerlo opcional
    if(!id) return;

    this.onDelete.emit(id);
  }
}
