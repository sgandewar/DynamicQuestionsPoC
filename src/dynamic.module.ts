import {  NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DynamicLoaderService }     from './dynamic-loader.service';
import { ControlFactoryDirective } from './control-factory.directive';


@NgModule({
  imports:      [ CommonModule],
  declarations: [ ControlFactoryDirective ],
  exports:      [ ControlFactoryDirective ]
})
export class DynamicModule {
  static forRoot() {
    return {
      ngModule: DynamicModule,
      providers: [DynamicLoaderService], 
    };
  }
}