import { Component} from '@angular/core';
import { Personaje } from '../interfaces/avatar.interface';
import { Avatar } from '../services/avatar.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personajes: Personaje [] = [
    {
      nombre: 'Aang',
      poder: 15000,
    }, 
    {
      nombre: 'Katara',
      poder: 7000,
    }
  ];
  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  agregarNuevoPersonaje(argumento:Personaje){
    this.personajes.push(argumento);
  }

  constructor(private Avatar: Avatar){

  }
  //agregar(event: any) {
    //event.preventDefault();
    //console.log('Hey!!!');
  //}

}
