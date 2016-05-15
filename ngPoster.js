app.directive('ngPoster', function() {
  return {
    restrict: 'A',
    scope: {
      ngPoster: '=',
    },
    link: function(scope, element, attrs) {
      scope.$watch('ngPoster', function(newValue, oldValue) {
        if (!_.isUndefined(newValue)) {
          element.attr('poster', scope.ngPoster);
        }
      });
    },
  };
});
