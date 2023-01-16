import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HijoArreComponent } from './hijo-arre/hijo-arre.component';



@NgModule({
  declarations: [
    RegisterComponent,
    HijoArreComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    RegisterComponent,
    HijoArreComponent
  ]
})
export class ComponentsModule { }
