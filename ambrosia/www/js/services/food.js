ambrosia.service('foodService', function($http, NUTRITION_REF, NUTRITION_KEY, NUTRITION_SECRET) {
  
  this.search = function() { 
   	$http.post(NUTRITION_REF, 

   		{
	 		"appId": NUTRITION_KEY,
	 		"appKey": NUTRITION_SECRET,
	 		"fields":["item_name","brand_name","nf_calories", "ng"],
	 		"offset": 0,
	 		"limit" : 50,
	  		"sort":{
	    		"field":"brand_name.sortable_na",
	    		"order":"asc"
	  		},
	  		"filters":{
	    		"item_type":1
	  		}
		}


   		).
  	  success(function(data, status, headers, config) {

    	console.log(data);
  	  }).
  	  error(function(data, status, headers, config) {


  	  });
	}
});