var snakeApp = angular.module('snakeApp', [])
    .controller('SnakeMainController', ['$scope', '$interval', function ($scope, $interval) {

        $scope.score = 0;

        var boardSize = 20;

        var snakeSpeed = 700; /*in ms*/

        var directions = {
            top: 38,
            right: 39,
            bottom: 40,
            left: 37
        };

        var snake = {
            self: this,
            direction: 'right',
            size: 2,
            position: {
                x: 0,
                y: 0
            },
            head: {
                x: 1,
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
            $interval( moveSnake, snakeSpeed)
        };

        $scope.drawObjects = function (rowIndex, colIndex) {

            /*Drawing snake*/
            if(rowIndex == snake.position.y && colIndex == snake.position.x){
                return colorsConfig.snakeColor;

            }else if(rowIndex == snake.head.y && colIndex == snake.head.x){
                return colorsConfig.snakeHeadColor;
            }
        };

        var moveSnake = function () {
            if(snake.direction == 'right'){
                snake.position.x = snake.position.x + 1;
                snake.head.x = snake.head.x + 1;
            }
            console.log(snake.head.x);
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
