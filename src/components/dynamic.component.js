System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var CheckboxComponent, CheckboxListComponent, DatePickerComponent, TextBoxComponent, InputButtonComponent, ImageComponent, WelcomeComponent, AddressComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CheckboxComponent = (function () {
                function CheckboxComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], CheckboxComponent.prototype, "model", void 0);
                CheckboxComponent = __decorate([
                    core_1.Component({
                        selector: 'cbx-comp',
                        template: "CheckboxComponent {{ model.data }}"
                    }), 
                    __metadata('design:paramtypes', [])
                ], CheckboxComponent);
                return CheckboxComponent;
            }());
            exports_1("CheckboxComponent", CheckboxComponent);
            CheckboxListComponent = (function () {
                function CheckboxListComponent() {
                    this.genders = [
                        { value: 'F', display: 'Female' },
                        { value: 'M', display: 'Male' }
                    ];
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], CheckboxListComponent.prototype, "model", void 0);
                CheckboxListComponent = __decorate([
                    core_1.Component({
                        selector: 'cbx-list-comp',
                        /*`template: `CheckboxListComponent {{ model.data }}`*/
                        template: "\n   <div class=\"form-group\">\n      <label>Gender</label>\n      <div class=\"radio\" *ngFor=\"let gender of genders\">\n        <label>\n          <input type=\"radio\" name=\"gender\">\n          {{gender.display}}\n        </label>\n      </div>\n    </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], CheckboxListComponent);
                return CheckboxListComponent;
            }());
            exports_1("CheckboxListComponent", CheckboxListComponent);
            DatePickerComponent = (function () {
                function DatePickerComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], DatePickerComponent.prototype, "model", void 0);
                DatePickerComponent = __decorate([
                    core_1.Component({
                        selector: 'datepicker-comp',
                        template: "DatePickerComponent {{ model.data }}"
                    }), 
                    __metadata('design:paramtypes', [])
                ], DatePickerComponent);
                return DatePickerComponent;
            }());
            exports_1("DatePickerComponent", DatePickerComponent);
            TextBoxComponent = (function () {
                function TextBoxComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], TextBoxComponent.prototype, "labelText", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], TextBoxComponent.prototype, "isRequired", void 0);
                TextBoxComponent = __decorate([
                    core_1.Component({
                        selector: 'txtbox-comp',
                        /*template: `TextboxQuestion {{ model.data }} {{ model.label }}`*/
                        template: "\n  <label>{{labelText}}</label> <br/>{{isRequired}} \n      <div *ngIf=\"isRequired=='true'\"> \n        <input required type=\"text\" id={{labelText}}/>\n    </div>\n    <div *ngIf=\"isRequired!='true'\"> \n      <input  type=\"text\" id={{labelText}}/>\n    </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], TextBoxComponent);
                return TextBoxComponent;
            }());
            exports_1("TextBoxComponent", TextBoxComponent);
            InputButtonComponent = (function () {
                function InputButtonComponent() {
                }
                InputButtonComponent.prototype.clicked = function (event) {
                    alert(event.target.id);
                };
                __decorate([
                    /* extends QuestionBase<string> {*/ core_1.Input(), 
                    __metadata('design:type', Object)
                ], InputButtonComponent.prototype, "model", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], InputButtonComponent.prototype, "text", void 0);
                InputButtonComponent = __decorate([
                    core_1.Component({
                        selector: 'input-button',
                        template: "\n   <div class=\"btn-group\">\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"clicked($event)\" id={{text}}>{{text}}</button>\n    </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], InputButtonComponent);
                return InputButtonComponent;
            }());
            exports_1("InputButtonComponent", InputButtonComponent);
            ImageComponent = (function () {
                function ImageComponent() {
                    // this.src ="handshake.png"
                }
                __decorate([
                    /* extends QuestionBase<string> {*/ core_1.Input(), 
                    __metadata('design:type', Object)
                ], ImageComponent.prototype, "model", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ImageComponent.prototype, "src", void 0);
                ImageComponent = __decorate([
                    core_1.Component({
                        selector: 'image-component',
                        template: "\n   <div>\n      <img src=\"images/{{src}}\">\n    </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ImageComponent);
                return ImageComponent;
            }());
            exports_1("ImageComponent", ImageComponent);
            WelcomeComponent = (function () {
                function WelcomeComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], WelcomeComponent.prototype, "model", void 0);
                WelcomeComponent = __decorate([
                    core_1.Component({
                        selector: 'welcome-component',
                        template: "\n                  <div class=\"child\">\n                     <image-component [src]='model.imageName'></image-component>\n                     <h2>{{model.questionText}}</h2>\n                     <div>\n                       <input-button [text]='model.button1Text'></input-button>\n                       <input-button [text]='model.button2Text'></input-button>\n                    </div>\n                  </div>",
                    }), 
                    __metadata('design:paramtypes', [])
                ], WelcomeComponent);
                return WelcomeComponent;
            }());
            exports_1("WelcomeComponent", WelcomeComponent);
            AddressComponent = (function () {
                function AddressComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], AddressComponent.prototype, "model", void 0);
                AddressComponent = __decorate([
                    core_1.Component({
                        selector: 'address-component',
                        template: "\n                  <div class=\"child\">\n                   <image-component [src]='model.imageName'></image-component>\n                     <h2>{{model.questionText}}</h2>\n                       <br/>\n                       <txtbox-comp [isRequired]='model.txtbox1required' [labelText]='model.labelText'></txtbox-comp>\n                       <br/>\n                       <br/>\n                       <txtbox-comp [isRequired]='model.txtbox2required' [labelText]='model.labelText2'></txtbox-comp>\n                  </div>",
                    }), 
                    __metadata('design:paramtypes', [])
                ], AddressComponent);
                return AddressComponent;
            }());
            exports_1("AddressComponent", AddressComponent);
        }
    }
});
//# sourceMappingURL=dynamic.component.js.map