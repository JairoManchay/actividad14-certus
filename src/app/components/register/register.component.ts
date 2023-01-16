import { Component } from '@angular/core';
import { RegistroInterfaceTs } from 'src/app/interface/registro.interface.ts';
import { ListadoCivil } from '../../interface/listado-civil';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {


  // Declaro array para iterar
  registroArre:RegistroInterfaceTs[] = [
    {
      nombre: 'Jairo',
      dni:8095642,
      estado: 0,
    },
    {
      nombre: 'Ceci',
      dni:10085749,
      estado: 2,
    }
  ]

  registro: RegistroInterfaceTs = {
    nombre: '',
    dni:0,
    estado: ListadoCivil.escoge,
  }


  // Arreglo para el estado
  estado_arre:any[]= [];

  ngOnInit(){
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    for(let item in ListadoCivil){
      if(isNaN(Number(item))){
        this.estado_arre.push({texto: item, value: ListadoCivil[item]})
      }
    }
  }

  onSubmit(){
    this.registroArre.push(this.registro);
    console.log(this.registroArre)
  }

  // Metodo para mandarseo al componente hijo
  recibirDatos(arreglo: any){
    this.registroArre.push(arreglo)
  }
}
