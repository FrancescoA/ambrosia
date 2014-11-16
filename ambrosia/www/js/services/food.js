ambrosia.service('foodService', function($http, NUTRITION_REF, NUTRITION_KEY, NUTRITION_SECRET) {
  
  this.search = function(query, callback) { 
   	$http.post(NUTRITION_REF, 

   		{
	 		"appId": NUTRITION_KEY,
	 		"appKey": NUTRITION_SECRET,
	 		"fields":["item_name","item_description", "brand_name","nf_calories", "nf_total_fat", "nf_saturated_fat","nf_monounsaturated_fat","nf_polyunsaturated_fat","nf_trans_fatty_acid","nf_total_carbohydrate","nf_protein"],
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
  	  	console.log(data)
  	  	callback(data.hits);
  	  }).
  	  error(function(data, status, headers, config) {


  	  });
	}
});