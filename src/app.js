var app = angular.module('mainApp',['ngRoute','ngAnimate','ngTouch','oc.lazyLoad','firebase']);
app.constant('BASEURL','https://api.mlab.com/api/1/databases');
app.constant('APIKEY','29fe3a93-4344-423d-9f5b-a913ef6edb95')

app.filter('orderBy', function() {
    return function(items, field, reverse) {
      var filtered = [];
      angular.forEach(items, function(item) {
        filtered.push(item);
      });
      filtered.sort(function (a, b) {
        return (a[field] > b[field] ? 1 : -1);
      });
      if(reverse) filtered.reverse();
      return filtered;
    };
  })