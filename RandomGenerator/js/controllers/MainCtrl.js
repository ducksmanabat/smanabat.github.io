angular.module('MainCtrl', []).controller('MainController', function ($scope) {

    var defaultNames = "agile, lean, team, dynamic, group, process, growth, procedure, learn, ukiyo, dimension, void, wise, monkey, true, agile, quirk, macho, raven, omni, epic, thought, Diligent, Quality, Produce, Fix, Power, Frequency, Access, Fabricate, Develop, inovation, Avocado, squirrel, Motion, Stream, Cube, Mountains, Puzzle, Tree, Blue, Doodle, hive, zoo, reverse, ten, iki, wip, werk, thing, code, quick, go, project, ready, play, inc, Muffin, Dorks, Chocolate, Stickies, Whiteboard, Train, Tracks, Mapp, Planc, Stand-up, think, Wabaki, Majime, manage, story, map "
    var names = [];

    $scope.tagline = 'To the moon and back!';
    $scope.firstWord = getName();
    $scope.secondWord = getName();
    $scope.textModel = defaultNames;

    var clock = $('.clock').FlipClock(10, {
        clockFace: 'Counter',
        countdown: true,
        autoStart: true,
        callbacks: {
            start: function () {

            },
            stop: function () {
                doSomething();
                $scope.$apply();
            }
        }
    });

    $scope.$watch(function () {
        return $scope.textModel;
    }, function (newValue, oldValue) {
        names = newValue.split(',');
        $scope.textModel = newValue;
    }, true);

    $scope.doSomething = function () {
        doSomething();
    };

    $scope.vote = function () {
        //
    };

    function doSomething() {
        names = $scope.textModel.split(',');
        $scope.firstWord = getName();
        $scope.secondWord = getName();
        clock.setTime(10);
        clock.start();
    }

    function getName() {
        return names[Math.floor(Math.random() * names.length)];
    }


    doSomething();
});