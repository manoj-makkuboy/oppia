// Copyright 2012 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Every editor directive should implement an alwaysEditable option. There
// may be additional customization options for the editor that should be passed
// in via initArgs.

oppia.directive('nonnegativeIntEditor', [
  '$compile', 'OBJECT_EDITOR_URL_PREFIX',
  function($compile, OBJECT_EDITOR_URL_PREFIX) {
    return {
      link: function(scope, element) {
        scope.getTemplateUrl = function() {
          return OBJECT_EDITOR_URL_PREFIX + 'NonnegativeInt';
        };
        $compile(element.contents())(scope);
      },
      restrict: 'E',
      scope: true,
      template: '<span ng-include="getTemplateUrl()"></span>',
      controller: ['$scope', function($scope) {
        $scope.SCHEMA = {
          type: 'int',
          validators: [{
            id: 'is_at_least',
            min_value: 0
          }]
        };

        if (!$scope.$parent.value) {
          $scope.$parent.value = 0;
        }
      }]
    };
  }]);
