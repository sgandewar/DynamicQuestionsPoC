System.register(['@angular/core', './dynamic-loader.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, dynamic_loader_service_1;
    var ControlFactoryDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dynamic_loader_service_1_1) {
                dynamic_loader_service_1 = dynamic_loader_service_1_1;
            }],
        execute: function() {
            ControlFactoryDirective = (function () {
                function ControlFactoryDirective(vcRef, loader) {
                    this.vcRef = vcRef;
                    this.loader = loader;
                    this.init = false;
                }
                ControlFactoryDirective.prototype.create = function (comp) {
                    var _this = this;
                    this.loader.createComponentFactory(comp).then(function (factory) {
                        var compRef = _this.vcRef.createComponent(factory);
                        compRef.instance.model = _this.model;
                        if (_this.componentRef) {
                            _this.componentRef.destroy();
                        }
                        _this.componentRef = compRef;
                        _this.init = true;
                    });
                };
                ControlFactoryDirective.prototype.ngOnChanges = function () {
                    if (!this.model || this.init)
                        return;
                    this.create(this.model.type);
                };
                ControlFactoryDirective.prototype.ngOnDestroy = function () {
                    if (this.componentRef) {
                        this.componentRef.destroy();
                        this.componentRef = null;
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ControlFactoryDirective.prototype, "model", void 0);
                ControlFactoryDirective = __decorate([
                    core_1.Directive({
                        selector: '[ctrl-factory]'
                    }), 
                    __metadata('design:paramtypes', [core_1.ViewContainerRef, dynamic_loader_service_1.DynamicLoaderService])
                ], ControlFactoryDirective);
                return ControlFactoryDirective;
            }());
            exports_1("ControlFactoryDirective", ControlFactoryDirective);
        }
    }
});
//# sourceMappingURL=control-factory.directive.js.map