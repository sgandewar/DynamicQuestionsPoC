import { FormsModule }       from '@angular/forms';
import { Directive, Component, Input } from '@angular/core';
import { QuestionBase } from './question-base';

@Component({
  selector: 'cbx-comp',
  template: `CheckboxComponent {{ model.data }}`
})
export class CheckboxComponent {
  @Input() model: any;
}

@Component({
  selector: 'cbx-list-comp',
  /*`template: `CheckboxListComponent {{ model.data }}`*/
  template:`
   <div class="form-group">
      <label>Gender</label>
      <div class="radio" *ngFor="let gender of genders">
        <label>
          <input type="radio" name="gender">
          {{gender.display}}
        </label>
      </div>
    </div>`
})
export class CheckboxListComponent {
  @Input() model: any;
   public genders = [
    { value: 'F', display: 'Female' },
    { value: 'M', display: 'Male' }
  ];
}

@Component({
  selector: 'datepicker-comp',
  template: `DatePickerComponent {{ model.data }}`
})
export class DatePickerComponent {
  @Input() model: any;
}

@Component({
  selector: 'txtbox-comp',
  /*template: `TextboxQuestion {{ model.data }} {{ model.label }}`*/
  template:`
  <label>{{labelText}}</label> <br/>{{isRequired}} 
      <div *ngIf="isRequired=='true'"> 
        <input required type="text" id={{labelText}}/>
    </div>
    <div *ngIf="isRequired!='true'"> 
      <input  type="text" id={{labelText}}/>
    </div>`
})
export class TextBoxComponent{
  @Input() labelText: string;
  @Input() isRequired: string;
 }

@Component({
  selector: 'input-button',
  template:`
   <div class="btn-group">
      <button type="button" class="btn btn-primary" (click)="clicked($event)" id={{text}}>{{text}}</button>
    </div>`
})
export class InputButtonComponent{/* extends QuestionBase<string> {*/
  @Input() model: any;
  @Input() text: string;
   clicked(event) {
     alert(event.target.id);
  }
  /*constructor() {
     super(model.label);
  }*/
}

@Component({
  selector: 'image-component',
  template:`
   <div>
      <img src="images/{{src}}">
    </div>`
})
export class ImageComponent{/* extends QuestionBase<string> {*/
  @Input() model: any;
  @Input() src: string;
 
  constructor() {
  // this.src ="handshake.png"
  }
}

@Component({
    selector:'welcome-component',
    template: `
                  <div class="child">
                     <image-component [src]='model.imageName'></image-component>
                     <h2>{{model.questionText}}</h2>
                     <div>
                       <input-button [text]='model.button1Text'></input-button>
                       <input-button [text]='model.button2Text'></input-button>
                    </div>
                  </div>`,
})
    
export class WelcomeComponent {
  @Input() model: any;
         constructor() {
         }
}

@Component({
    selector:'address-component',
     template: `
                  <div class="child">
                   <image-component [src]='model.imageName'></image-component>
                     <h2>{{model.questionText}}</h2>
                       <br/>
                       <txtbox-comp [isRequired]='model.txtbox1required' [labelText]='model.labelText'></txtbox-comp>
                       <br/>
                       <br/>
                       <txtbox-comp [isRequired]='model.txtbox2required' [labelText]='model.labelText2'></txtbox-comp>
                  </div>`,
})
    
export class AddressComponent {
  @Input() model: any;
         constructor() {
         }
}






