var snakeApp = angular.module('snakeApp', [])
    .controller('SnakeMainController', ['$scope', function ($scope) {

        $scope.score = 0;

        var boardSize = 20;

        var directions = {
            top: 38,
            right: 39,
            bottom: 40,
            left: 37
        };

        var snake = {
            direction: 'right',
            size: 2,
            position: {
                x: 0,
                y: 0
            }
        };

        var colorsConfig = {
            snakeColor : '#63a52a',
            snakeHeadColor: '#90D355',
            snakeCrashColor: '#E21658',
            boardColor : '#a2a2a2'
        };

        $scope.runGame = function(){

        };

        $scope.drawObjects = function (rowIndex, colIndex) {

            /*Drawing snake*/
            if(rowIndex == snake.position.x && colIndex == snake.position.y){

                return colorsConfig.snakeColor;

            }
        };

        var setupBoard = function () {

            $scope.board = [];

            for (var i = 0; i < boardSize; i++){
                $scope.board[i] = [];

                for (var j = 0; j < boardSize; j++){
                    $scope.board[i][j] = false;
                }
            }
        };

        setupBoard();

    }]);
