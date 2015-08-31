 //This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.
nasInFinderApp
  .service('dirService', function ($http) {
  	// only for test
  	var nasAPIBase = 'http://device*******-*******.wd2go.com/api/2.6/rest/';
  	var authString = 'device_user_id=*******&device_user_auth_code=*******';
    this.getList = function (path) {
    	var url = nasAPIBase +'dir' + path + '?' +authString+'&path='+path+'&show_is_linked=true&include_dir_count=true&format=json';
 		return $http.get(url);
        };
	});