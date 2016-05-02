app.service('places', ['$http', function($http) {
            return {
				meta: function(lat, lng, radius) { 
				console.log('lat: '+lat);
				console.log('lng: '+lng);
				console.log('radius: '+radius);
				return $http.jsonp('https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gsradius='+radius+'&gscoord='+lat+'%7C'+lng+'&gslimit=30&format=json&callback=JSON_CALLBACK').success(function(data) {
                  return data;
                  }).error(function(err) {
                      return err;
                  });
			    }
			}
        }]);