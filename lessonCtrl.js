angular.module('directivePractice').controller('lessonCtrl', function($scope) {

$scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

$scope.test = 'Two-way data binding!';

$scope.announceDay = function (lesson,day){
  if(day === undefined){
    alert(lesson +' has not been taught yet')
   }
  else{
  alert(lesson + ' is active on ' + day + '.')
}
}


});
