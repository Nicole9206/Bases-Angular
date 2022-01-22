import { Component} from '@angular/core';
import { Personaje } from '../interfaces/avatar.interface';




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

 
  nuevo: Personaje = {
    nombre: 'Toph',
    poder: 1000
  }

  constructor(){}
  

}
