import {    Injectable, 
  
}  from '@angular/core'; 

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Http,} from '@angular/http';

@Injectable()
export class MetaDataService { 
  constructor(private http:Http) {
  }

  getMetadata() {
    return this.http.request('./src/metadata/metadata.json')
                 .map(res => res.json());
  }
}