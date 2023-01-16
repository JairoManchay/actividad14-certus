import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo-arre',
  templateUrl: './hijo-arre.component.html',
  styles: [
  ]
})
export class HijoArreComponent {

  // array completo
  @Input() datos:any=[];

  // nuevo registro
  @Input() datosPadreArre:any =[];

  // validacion de formulario
  @Input() validacion: any;
}
