export class QuestionBase<T>{
  controlType: string;
  label: string;

constructor(options: {
      label?: string,
      controlType?: string
    } = {}) { 
    this.label = options.label || '';
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/