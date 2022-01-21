import { Component} from '@angular/core';
import { Personaje } from '../interfaces/avatar.interface';
import { Avatar } from '../services/avatar.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

 
  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  constructor(){}
  

}
