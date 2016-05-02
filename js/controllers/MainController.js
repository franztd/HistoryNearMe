var address ="";

app.controller('MainController', ['$scope', '$http', 'places', function($scope, $http, places) {
  
  $scope.geodata = {};
  $scope.queryResults = {};
  $scope.queryError = {};
  $scope.mapCenter = {};
  
  if (address != ""){
    $http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + 
            address + '&key=AIzaSyBZVOSPh0Z4mv9jljJWzZNSug6upuec7Sg')
    .then(function(_results){
       console.log(_results.data);
       $scope.queryResults = _results.data.results;
       $scope.geodata = $scope.queryResults[0].geometry;
       $scope.mapCenter = {
         lat: $scope.geodata.location.lat,
         lng: $scope.geodata.location.lng,
         zoom: 14
       };
	   places.meta($scope.mapCenter.lat, $scope.mapCenter.lng, 5000).success(function(data) {
         $scope.geodata = data;
         $scope.mapMarkers = geodataToMarkers($scope.geodata);
       });
     },
     function error(_error){
        $scope.queryError = _error;
     })
  }
  else if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
      $scope.$apply(function(){
		console.log(position.coords)
        $scope.mapCenter = {
		  lat: position.coords.latitude,
		  lng: position.coords.longitude,
		  zoom: 14
		};
		places.meta($scope.mapCenter.lat, $scope.mapCenter.lng, 5000).success(function(data) {
         $scope.geodata = data;
         $scope.mapMarkers = geodataToMarkers($scope.geodata);
       });
      });
    },
	function(naverror){
		$http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + 
            address + '&key=AIzaSyBZVOSPh0Z4mv9jljJWzZNSug6upuec7Sg')
    .then(function(_results){
       console.log(_results.data);
       $scope.queryResults = _results.data.results;
       $scope.geodata = $scope.queryResults[0].geometry;
       $scope.mapCenter = {
         lat: $scope.geodata.location.lat,
         lng: $scope.geodata.location.lng,
         zoom: 14
       };
	   places.meta($scope.mapCenter.lat, $scope.mapCenter.lng, 5000).success(function(data) {
         $scope.geodata = data;
         $scope.mapMarkers = geodataToMarkers($scope.geodata);
       });
     },
     function error(_error){
        $scope.queryError = _error;
     })
	});
  }
}]);