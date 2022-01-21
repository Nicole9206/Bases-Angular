import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/avatar.interface';
import { Avatar } from '../services/avatar.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';



@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent  {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor( private Avatar: Avatar) {}
  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    console.log(this.nuevo)
    //this.onNuevoPersonaje.emit(this.nuevo);
    this.Avatar.agregarPersonaje( this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0,
    }
  }
 
}