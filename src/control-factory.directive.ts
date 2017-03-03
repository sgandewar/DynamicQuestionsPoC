import { 
  Directive, 
  NgModule, 
  Component, 
  ComponentFactory, 
  OnChanges, 
  Input, 
  ViewContainerRef,
  Compiler,
  ComponentFactoryResolver
 } from '@angular/core';

import { CommonModule } from '@angular/common';

import { DynamicLoaderService } from './dynamic-loader.service';

@Directive({
  selector: '[ctrl-factory]'
})
export class ControlFactoryDirective implements OnChanges {
  @Input() model: any;
 
  componentRef;
  init = false;

  constructor(private vcRef: ViewContainerRef, private loader: DynamicLoaderService) { }

  create(comp) {
    this.loader.createComponentFactory(comp).then(factory => {
       const compRef = this.vcRef.createComponent(factory);

      (<any>compRef).instance.model = this.model;

      if (this.componentRef) {
        this.componentRef.destroy();
      }

      this.componentRef = compRef;
      this.init = true;
    })
  }

  ngOnChanges() {
    if (!this.model || this.init) return;

    this.create(this.model.type);
  }

  public ngOnDestroy(){
    if (this.componentRef) {
        this.componentRef.destroy();
        this.componentRef = null;
    }
  }
}
