app.controller('homeCtrl',['$scope','mainService','$firebaseArray','$firebaseObject',function($scope,mainService,$firebaseArray,$firebaseObject){
    
    $scope.data = mainService.serviceTest();

    var ref = firebase.database().ref().child("todo/task");
    // download the data into a local object
    $scope.tasks = $firebaseArray(ref);
    // putting a console.log here won't work, see below

    $scope.addTask = function(task) {
        $scope.tasks.$add({
           'title' : task.title,
           'status' : 'running',
           'time' : Date.now()
        });
        $scope.task.title = '';
    };

    $scope.deleteTask = function(task) {
        
        $scope.tasks.$remove(task);
    };

    $scope.completeTask = function(task){
        var id = task.$id;
        var records = $scope.tasks.$getRecord(id);
        records.status = 'completed';
        $scope.tasks.$save(records);
    };


}]);