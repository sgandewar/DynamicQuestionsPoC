System.register(['@angular/core', 'rxjs/Subject', '@angular/common', './parts.module', './components/dynamic.component'], function(exports_1, context_1) {
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
    var core_1, Subject_1, common_1, parts_module_1, dynamic_component_1;
    var typeMap, DynamicLoaderService;
    function createComponentModule(component) {
        var RuntimeComponentModule = (function () {
            function RuntimeComponentModule() {
            }
            RuntimeComponentModule = __decorate([
                core_1.NgModule({
                    imports: [common_1.CommonModule, parts_module_1.PartsModule],
                    declarations: [component],
                }), 
                __metadata('design:paramtypes', [])
            ], RuntimeComponentModule);
            return RuntimeComponentModule;
        }());
        return RuntimeComponentModule;
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (parts_module_1_1) {
                parts_module_1 = parts_module_1_1;
            },
            function (dynamic_component_1_1) {
                dynamic_component_1 = dynamic_component_1_1;
            }],
        execute: function() {
            typeMap = {
                'checkbox': dynamic_component_1.CheckboxComponent,
                'checkboxlist': dynamic_component_1.CheckboxListComponent,
                'datepicker': dynamic_component_1.DatePickerComponent,
                'textbox': dynamic_component_1.TextBoxComponent,
                'inputbutton': dynamic_component_1.InputButtonComponent,
                'welcomecomponent': dynamic_component_1.WelcomeComponent,
                'addresscomponent': dynamic_component_1.AddressComponent
            };
            DynamicLoaderService = (function () {
                function DynamicLoaderService(compiler) {
                    this.compiler = compiler;
                    this.resolveCompHelper$ = new Subject_1.Subject();
                    this.cache = new Map();
                }
                DynamicLoaderService.prototype.createComponentFactory = function (type) {
                    var _this = this;
                    var factory = this.cache.get(type);
                    // if factory has been already loading
                    if (factory === 1) {
                        return new Promise(function (resolve) {
                            // waiting compilation of factory
                            var subscriber = _this.resolveCompHelper$.subscribe(function (data) {
                                if (type !== data.type)
                                    return;
                                subscriber.unsubscribe();
                                resolve(data.factory);
                            });
                        });
                    }
                    // factory exists in cache
                    if (factory) {
                        return new Promise(function (resolve) { return resolve(factory); });
                    }
                    var comp = typeMap[type];
                    // factory startes loading
                    this.cache.set(type, 1);
                    return new Promise(function (resolve) {
                        _this.compiler.compileModuleAndAllComponentsAsync(createComponentModule(comp))
                            .then(function (moduleWithFactories) {
                            factory = moduleWithFactories.componentFactories.find(function (x) { return x.componentType === comp; });
                            _this.cache.set(type, factory);
                            _this.resolveCompHelper$.next({ type: type, factory: factory });
                            resolve(factory);
                        });
                    });
                };
                DynamicLoaderService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [core_1.Compiler])
                ], DynamicLoaderService);
                return DynamicLoaderService;
            }());
            exports_1("DynamicLoaderService", DynamicLoaderService);
        }
    }
});
//# sourceMappingURL=dynamic-loader.service.js.map