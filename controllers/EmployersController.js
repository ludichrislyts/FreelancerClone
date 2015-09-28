freelancerClone.controller('EmployersCtrl', function EmployersCtrl($scope, EmployersFactory){
  $scope.employers = EmployersFactory.workers;
  $scope.EmployersFacory = EmployersFactory;
});
