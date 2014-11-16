ambrosia.service('foodService', function($http, $firebase, NUTRITION_REF, NUTRITION_KEY, NUTRITION_SECRET, FIREBASE_REF, userSession) {
  

  var firebase = new Firebase(FIREBASE_REF);
  this.foods = [];
  var that = this;
  firebase.onAuth(function(authData) {
  	if (authData) {
    	var restaurants = firebase.child('users').child(authData.uid).child('restaurants');
    	console.log("User ID: " + authData.uid + ", Provider: " + authData.provider);
    	var sync = $firebase(restaurants);
  		that.foods = sync.$asArray();
		console.log(that.foods);
  	} else {
    	// user is logged out
  	}
	});


  this.queryResult = [];

  this.advancedSearch = function(queryObj){
  	   	return $http.post(NUTRITION_REF, 

   		{
	 		"appId": NUTRITION_KEY,
	 		"appKey": NUTRITION_SECRET,
	 		"fields":["item_id","item_name","item_description", "brand_id","brand_name","nf_calories", "nf_total_fat", "nf_saturated_fat","nf_monounsaturated_fat","nf_polyunsaturated_fat","nf_trans_fatty_acid","nf_total_carbohydrate","nf_protein"],
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

  	  }).
  	  error(function(data, status, headers, config) {


  	  });
  }


  this.cleanData = function(data) {
    var foods = {};
  	data.hits.forEach(function(item){
	  	var brand_name = item.fields.brand_name;
	  	if (foods[brand_name]) {
		  foods[brand_name].push(item.fields);
	  	} else {
	  	  foods[brand_name] = [item.fields];
	  	}
  	});
  	var ret = [];
 	for (var key in foods) {
 		var obj = {name: key, menu: foods[key]};
 		ret.push(obj);
	}
  	return ret;
  }

  //deprecated
  this.search = function(query) { 
   	return $http.post(NUTRITION_REF, 

   		{
	 		"appId": NUTRITION_KEY,
	 		"appKey": NUTRITION_SECRET,
	 		"fields":["item_id","item_name","item_description", "brand_id","brand_name","nf_calories", "nf_total_fat", "nf_saturated_fat","nf_monounsaturated_fat","nf_polyunsaturated_fat","nf_trans_fatty_acid","nf_total_carbohydrate","nf_protein"],
	 		"offset": 100,
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

  	  }).
  	  error(function(data, status, headers, config) {


  	  });
	}




	this.searchBrand = function(brandName) {
		return $http.post(NUTRITION_REF,
		{
  			"appId":NUTRITION_KEY,
  			"appKey":NUTRITION_SECRET,
  			"fields":["item_id","item_name","item_description", "brand_id","brand_name","nf_calories", "nf_total_fat","nf_total_carbohydrate","nf_protein"],
  			"offset": 0,
  			"limit" : 50,
  			"queries":{
    			"brand_name": brandName
  			},
  			"sort" : {
  				"field" : "brand_name.sortable_na",
  				"order" : "asc"
  			},
  			"filters" : {
  				"item_type" : 1
  			}
		});
	}

});