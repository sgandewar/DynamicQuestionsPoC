// make all parts as one DYNAMIC_DIRECTIVES 
import { forwardRef }   from '@angular/core';
import { ImageComponent } from './components/dynamic.component'
import { InputButtonComponent } from './components/dynamic.component'
import { TextBoxComponent } from './components/dynamic.component'


export const DYNAMIC_DIRECTIVES = [
  forwardRef(() => ImageComponent),
  forwardRef(() => InputButtonComponent),
  forwardRef(() => TextBoxComponent)

];

// module itself
import { NgModule }      from '@angular/core';
import { CommonModule }  from "@angular/common";
import { FormsModule }   from "@angular/forms";

@NgModule({
  imports:      [ 
      CommonModule,
      FormsModule
  ],
  declarations: [
      DYNAMIC_DIRECTIVES
  ],
  exports: [
      DYNAMIC_DIRECTIVES,
      CommonModule,
      FormsModule
  ]
})
export class PartsModule {

    static forRoot()
    {
        return {
            ngModule: PartsModule,
            providers: [ ], // not used here, but if singleton needed
        };
    }
}