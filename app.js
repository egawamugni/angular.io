var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope) {
    $scope.students = students;
    $scope.pagesizes = [5, 10, 15, 20];
    $scope.pagesize = $scope.pagesizes[0]; //jumlah baris 1 halaman
    $scope.currentpage = 0; //lokasi halaman saat ini
    $scope.pagenumber = Math.ceil($scope.students.length / $scope.pagesize); //total halaman

    $scope.paging = function (type) {
        if (type == 0 && $scope.currentpage > 0) {
            --$scope.currentpage;
        } else if (type == 1 && $scope.currentpage < $scope.pagenumber - 1) {
            ++$scope.currentpage;
        }
    }

    $scope.$watchCollection('results', function () {
        if ($scope.results == undefined) return;
        $scope.currentpage = 0;
        $scope.pagenumber = Math.ceil($scope.results.length / $scope.pagesize);
    });

    $scope.changeAction = function () {
        $scope.currentpage = 0;
        $scope.pagenumber = Math.ceil($scope.results.length / $scope.pagesize);
    }

    $scope.ordering = function (ordvar, by) {
        ordvar = !ordvar;
        $scope.ordstatus = ordvar;
        $scope.ord = by;
        return ordvar;
    }

    // $scope.categories = ['Nama', 'Kelas', 'Nilai'];
    var students = [{
        name: 'Jajang',
        class: '1A',
        score: 40
    }, {
        name: 'aklam',
        class: '1A',
        score: 40
    }, {
        name: 'malih',
        class: '1B',
        score: 40
    }, {
        name: 'codet',
        class: '2A',
        score: 40
    }, {
        name: 'ajeng',
        class: '2A',
        score: 40
    }, {
        name: 'ardhya',
        class: '3A',
        score: 40
    }, {
        name: 'ramadhanti',
        class: '1B',
        score: 40
    }, {
        name: 'Jajang knalpot',
        class: '1B',
        score: 40
    }, {
        name: 'asep',
        class: '2A',
        score: 40
    }, {
        name: 'asep golok',
        class: '3A',
        score: 40
    }]
});