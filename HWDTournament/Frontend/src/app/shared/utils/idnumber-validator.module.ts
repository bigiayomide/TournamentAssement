import { NgModule } from '@angular/core';
import {IDNumberValidator} from './idnumber-validator.directive';

@NgModule({ 
  declarations: [   
    IDNumberValidator, 
  ],  
  exports: [
    IDNumberValidator,
]
})
export class IDNumberValidatorModule { }

