angular.module('app')
    .directive('uiActions', [
        function() {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    model: '=ngModel',
                    onAdd: '&onAdd',
                    onEdit: '&?',
                    onRemove: '&?',
                    onToggleVisible: '&?',
                },
                templateUrl: '/static/apps/admin/lib/directives/ui-actions.html',
            };
        }
    ]);