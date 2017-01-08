module Sales {
    export class SearchRoomController {
        constructor($scope) {
            $scope.date = new Date();
            $scope.format = 'yyyy/MM/dd';
        }
    }

    Module.controller('searchRoomController', SearchRoomController);
}