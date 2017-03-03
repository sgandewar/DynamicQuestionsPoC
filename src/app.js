System.register(['@angular/core', '@angular/platform-browser', './dynamic.module', './metadataservices', '@angular/http'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, dynamic_module_1, metadataservices_1, http_1;
    var AppComponent, AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (dynamic_module_1_1) {
                dynamic_module_1 = dynamic_module_1_1;
            },
            function (metadataservices_1_1) {
                metadataservices_1 = metadataservices_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(metadataService) {
                    this.metadataService = metadataService;
                    this.metadataService = metadataService;
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.metadataService.getMetadata()
                        .subscribe(function (data) {
                        _this.page = data;
                        _this.isDataAvailable = true;
                        _this.isPurchaseClicked = true;
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<form>\n   <div *ngIf=\"isDataAvailable\"> \n      <h1>Welcome John. We can help you!</h1>\n      <div ctrl-factory *ngFor=\"let child of this.page.childrens\" [model]=\"child\"></div>\n    </div>\n     <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n    </form>\n  ",
                        providers: [metadataservices_1.MetaDataService]
                    }), 
                    __metadata('design:paramtypes', [metadataservices_1.MetaDataService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [platform_browser_1.BrowserModule, dynamic_module_1.DynamicModule.forRoot(), http_1.HttpModule],
                        declarations: [AppComponent],
                        bootstrap: [AppComponent],
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.js.map