System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var QuestionBase;
    return {
        setters:[],
        execute: function() {
            QuestionBase = (function () {
                function QuestionBase(options) {
                    if (options === void 0) { options = {}; }
                    this.label = options.label || '';
                }
                return QuestionBase;
            }());
            exports_1("QuestionBase", QuestionBase);
        }
    }
});
/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=question-base.js.map