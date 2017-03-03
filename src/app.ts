//our root app component
import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import { DynamicModule } from './dynamic.module';
import { ControlFactoryDirective } from './control-factory.directive'

import {MetaDataService} from './metadataservices';

import { HttpModule } from '@angular/http';



@Component({
  selector: 'my-app',
  template: `<form>
   <div *ngIf="isDataAvailable"> 
      <h1>Welcome John. We can help you!</h1>
      <div ctrl-factory *ngFor="let child of this.page.childrens" [model]="child"></div>
    </div>
     <button type="submit" class="btn btn-default">Submit</button>
    </form>
  `,
  providers: [MetaDataService]
})
export class AppComponent {

   /**
     * Creates an instance of Service to fetch metadata from JSON File.
     * 
     * @param {MetaDataService} metadataService
     *      * 
     * @memberOf LoginComponent
     */
      page: any[];
      isDataAvailable:boolean;
      isPurchaseClicked:boolean;

     constructor(  private metadataService: MetaDataService)
     {
      this.metadataService = metadataService;
     }
    ngOnInit() {
       this.metadataService.getMetadata()
        .subscribe((data) => {
                this.page = data;
                this.isDataAvailable = true;
                this.isPurchaseClicked = true;
            });
   }

  /*page = {
    childrens: [
      {
          data: 'model1',
          type: 'welcomecomponent',
          questionText:'Are you looking to buy a home or refinance an existing loan?',
          imageName:'handshake.png',
          button1Text:'Purchase', 
          button2Text:'Refinance'
      },
       {
          data: 'model2',
          type: 'welcomecomponent',
          imageName:'iconhome.png',
          questionText:'Have you identified the property that you are intersted in?',
          button1Text:'No',
          button2Text:'Yes'
      },
      {
          data: 'model3',
          type: 'welcomecomponent',
          imageName:'iconhome.png',
          questionText:'Have you identified the property that you are intersted in?',
          button1Text:'No',
          button2Text:'Yes'
      },
        /*{
          data: 'model4',
          type: 'checkboxlist'
      },
      {
          data: 'model5',
          type: 'checkboxlist'
      },
       {
          data: 'model6',
          type: 'checkboxlist'
      },
        {
          data: 'model7',
          type: 'textbox'
      }
    ]
  }*/
}

@NgModule({
  imports:      [ BrowserModule, DynamicModule.forRoot(), HttpModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }