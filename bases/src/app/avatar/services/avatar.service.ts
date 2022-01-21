import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/avatar.interface';

@Injectable()
export class Avatar{

    private _personajes: Personaje [] = [
        {
          nombre: 'Aang',
          poder: 15000,
        }, 
        {
          nombre: 'Katara',
          poder: 7000,
        }
      ];

      get personajes(): Personaje[] {
          return [...this._personajes];
      }
    constructor() {}
   
    agregarPersonaje(personaje: Personaje){
      this._personajes.push(personaje);
    }
     
}