import {
  Component, 
  ComponentFactory, 
  NgModule, 
  Injectable, 
  ModuleWithComponentFactories,
  Compiler,
  forwardRef
} from '@angular/core';

import { Subject }    from 'rxjs/Subject';
import { CommonModule } from '@angular/common'
import {PartsModule} from './parts.module'
import { 
  ImageComponent,
  CheckboxComponent, 
  CheckboxListComponent, 
  DatePickerComponent,
  TextBoxComponent,
  InputButtonComponent,
  WelcomeComponent,
  AddressComponent
} from './components/dynamic.component';

const typeMap = {
  'checkbox': CheckboxComponent,
  'checkboxlist': CheckboxListComponent,
  'datepicker': DatePickerComponent,
  'textbox': TextBoxComponent,
  'inputbutton': InputButtonComponent,
  'welcomecomponent': WelcomeComponent,
  'addresscomponent': AddressComponent
}

function createComponentModule (component: any) {
  @NgModule({
    imports: [CommonModule, PartsModule],
    declarations: [component],
  })
  class RuntimeComponentModule { }

  return RuntimeComponentModule;
}

@Injectable()
export class DynamicLoaderService {
  constructor(protected compiler: Compiler) {}
  
  private resolveCompHelper$ = new Subject<any>();
  private cache = new Map<string, ComponentFactory<any> | number>();
  
  public createComponentFactory(type: string) : Promise<ComponentFactory<any>> {
    let factory = this.cache.get(type);

    // if factory has been already loading
    if(factory === 1) {
      return new Promise((resolve) => {
        // waiting compilation of factory
        const subscriber = this.resolveCompHelper$.subscribe((data) => {
          if(type !== data.type) return;
          subscriber.unsubscribe();
          resolve(data.factory);
        });   
      });
    } 
    // factory exists in cache
    if (factory) {
      return new Promise((resolve) => resolve(factory));
    }

    const comp = typeMap[type];
    // factory startes loading
    this.cache.set(type, 1);
    return new Promise((resolve) => {
      this.compiler.compileModuleAndAllComponentsAsync(createComponentModule(comp))
        .then((moduleWithFactories: ModuleWithComponentFactories<any>) =>  {
            factory = moduleWithFactories.componentFactories.find(x => x.componentType === comp);
            this.cache.set(type, factory);
            this.resolveCompHelper$.next({ type, factory});

            resolve(factory);
        });
    });
  }
}