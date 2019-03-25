app.factory('mainService',['$location','BASEURL',function($location,BASEURL){
    var myobject = {}; 
    myobject.serviceTest = function(){
        return "AngularJS + Firebase";
    };
    return myobject;  
}]);