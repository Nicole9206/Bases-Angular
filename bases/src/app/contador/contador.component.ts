import {Component} from '@angular/core';

@Component ({
    selector: 'app-contador',
    template: `
    
        <h1>{{ title }}</h1>


        <button (click)=" acumular(+1) "> +1 </button>

        <span> {{numero}} </span>

        <button (click)=" acumular(-1) "> -1</button>
        <!-- * * * * * * * ejercicio * * * * * * * * -->
        <h3> La base es: <strong> {{base}} </strong></h3>

        <button (click) = " contar (+5)"> 
        +5
        </button>
        <span> 
        {{base}} 
        </span>
        <button (click) = " contar (-5)"> 
        -5
        </button> `
})

export class ContadorComponent {
    title: string = 'Contador App';
    numero: number = 1;
    base : number = 5;
    acumular( valor: number) {
      this.numero += valor;
    }
    contar( numero: number ){
      this.base += numero;
  
    }
    

}