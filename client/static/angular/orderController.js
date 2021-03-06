myApp.controller('orderController', function ($scope, $location, $routeParams, $location, orderFactory, customerFactory, productFactory) { 

	//3 create scope for array 
	$scope.orders = [];
	//3 get data from factory



	if ($routeParams.id){
		var idOrder = $routeParams.id;

		orderFactory.infoOrder(idOrder, function(data){
			$scope.order = data;
		})

	} 
	else {

			orderFactory.getOrders(function (data){
				$scope.orders = data;
				//console.log('questionFactory.getQuestions', data);
			})


	//3 create scope for array 
		$scope.customers = [];
			//3 get data from factory
			customerFactory.getCustomers(function (data){
				$scope.customers = data;
				//console.log('questionFactory.getQuestions', data);
			})

	//3 create scope for array 
	$scope.products = [];
	//3 get data from factory
			productFactory.getProducts(function (data){
				$scope.products = data;
				//console.log('questionFactory.getQuestions', data);
			})
	}


	//2a ng-click add
	$scope.addOrder = function (newOrder) {				
		console.log('con addO', $scope.newOrder);
		orderFactory.addOrder($scope.newOrder);
			 $scope.newOrder = {};
	}

	$scope.editOrder = function(order){
		orderFactory.editOrder(order, function(result){
			// $scope.order = update;
			alert(result.message);
			$location.path('/orders');
		});
	}
	
	//2a ng-click delete
	$scope.delete = function(order) {
		console.log('$scope.delete', order);
		orderFactory.delete(order);
	}



}); //ends controller