import { Component, Input} from '@angular/core';
import { Personaje } from '../interfaces/avatar.interface';
import { Avatar } from '../services/avatar.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent  {
  //@Input() personajes: Personaje [] =[] ;
  get personajes(){
    return this.Avatar.personajes;
  }
  constructor(private Avatar: Avatar){}

}
