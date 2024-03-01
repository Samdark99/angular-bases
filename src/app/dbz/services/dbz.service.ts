import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'; //Hace referencia a Universal Unique IDentifier, una forma robusta de generar IDs, con el "as" le indicas el nuevo nombre de la función o variable

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'}) //Si no se usara el providedIn se tendría que declarar en los providers del module
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: "Krillin",
      power: 1000
    },
    {
      id: uuid(),
      name: "Goku",
      power: 9500
    },
    {
      id: uuid(),
      name: "Vegeta",
      power: 7500
    }
  ]

  addCharacter(character: Character): void{
    const newCharacter: Character = { id: uuid(), ...character }; //Paso toda la data de la referencia y le agrego el uuid()
    this.characters.push(newCharacter); //unshift() = Añade un nuevo elemento al inicio del array
  }

  // onDeleteCharacter(index: number): void{
  //   this.characters.splice(index, 1); //Splice, sirve para remover un elemento desde un index específico del array, si no se especifica la cantidad de elementos a borrar, este borarrá todos los elementos a partir del index
  // }

  deleteCharacterById(id: string): void{
    this.characters = this.characters.filter(character => character.id !== id); //Filtro para regresar todos los valores que no sean el id a eliminar
  }
}
