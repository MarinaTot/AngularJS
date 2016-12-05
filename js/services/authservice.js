myApp.service('authservice',['$rootScope','$http','$location', '$cookieStore' ,
	function($rootScope,$http,$location,$cookieStore){
		this.login = function(user,users){
			for(var i = 0; i < users.length; i++){
		  		if(user.email == users[i].email && user.password == users[i].password){
		  			$location.path('/users/' + users[i]._id);
		  			$cookieStore.put(users[i], user[i]._id);
		  			return;
		  		}
		  	}
		  		$rootScope.message = "You need valid email and password!";
		  			$location.path('/login');
		};//login
		this.registration = function(user,users){
			var oop;
			var ind = true;
			for(var i = 0; i < users; i++){
				if(users[i].email == user.email){
					$rootScope.message = 'Error, email alredy exist. ';
					ind = false;
				}
			}
				if(ind != false){
					$http.post('http://localhost:3000/api/users', user)
						.success(function(user){
							$rootScope.message = 'Hi ' + user.firstname + user.lastname + " log in now";
							$location.path('/login');
						});
				}		
		};//registartion
		this.getAll = function(){
			$http.get('http://localhost:3000/api/users/')
				.success(function(data){
					$rootScope.users = data.results;
				});
		}//gettAll
		this.getUserById = function(id){
			$http.get('http://localhost:3000/api/users/'+id)
				.success(function(data){
					$rootScope.user = data;
				});		
		};//getUserById
		this.logout = function(){
			$cookieStore.remove(user_id);
			$rootScope.message = "";
			$rootScope.user = {};
			
		};//logout

}]);//service