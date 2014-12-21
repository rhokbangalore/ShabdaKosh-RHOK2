(function(){
	var app=angular.module('game',[]);
 

	app.controller('formCtrl',function($scope){
  	$scope.isVisible=false;
    $scope.count=0;
		$scope.x=-1;
		$scope.translations=[];
		$scope.words=["Radio","Train","Welcome!","table"];
        $scope.image=["radio.png","train.jpg","welcome!.jpg","table.jpg"];


           $scope.submit=function(){

           	if(	$scope.x<$scope.words.length){
           	$scope.x++;
            if($scope.input)
            $scope.count++;
            $scope.translations.push($scope.input); 
            $scope.input="";
            

 




         }
         
      }
      
       $scope.onItemClicked=function(item){
        
       	$scope.isVisible=true;
       }
          







	});
       











})();
