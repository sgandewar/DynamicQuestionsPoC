System.register(['@angular/core', './components/dynamic.component', "@angular/common", "@angular/forms"], function(exports_1, context_1) {
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
    var core_1, dynamic_component_1, dynamic_component_2, dynamic_component_3, core_2, common_1, forms_1;
    var DYNAMIC_DIRECTIVES, PartsModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (dynamic_component_1_1) {
                dynamic_component_1 = dynamic_component_1_1;
                dynamic_component_2 = dynamic_component_1_1;
                dynamic_component_3 = dynamic_component_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }],
        execute: function() {
            exports_1("DYNAMIC_DIRECTIVES", DYNAMIC_DIRECTIVES = [
                core_1.forwardRef(function () { return dynamic_component_1.ImageComponent; }),
                core_1.forwardRef(function () { return dynamic_component_2.InputButtonComponent; }),
                core_1.forwardRef(function () { return dynamic_component_3.TextBoxComponent; })
            ]);
            PartsModule = (function () {
                function PartsModule() {
                }
                PartsModule.forRoot = function () {
                    return {
                        ngModule: PartsModule,
                        providers: [],
                    };
                };
                PartsModule = __decorate([
                    core_2.NgModule({
                        imports: [
                            common_1.CommonModule,
                            forms_1.FormsModule
                        ],
                        declarations: [
                            DYNAMIC_DIRECTIVES
                        ],
                        exports: [
                            DYNAMIC_DIRECTIVES,
                            common_1.CommonModule,
                            forms_1.FormsModule
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PartsModule);
                return PartsModule;
            }());
            exports_1("PartsModule", PartsModule);
        }
    }
});
//# sourceMappingURL=parts.module.js.map