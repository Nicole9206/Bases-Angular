import { Component} from '@angular/core';

import { Avatar } from '../services/avatar.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent  {

  get personajes(){
    return this.Avatar.personajes;
  }
  constructor(private Avatar: Avatar){}

}
