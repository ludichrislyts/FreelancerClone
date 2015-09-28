freelancerClone.controller('WorkerCtrl', function WorkerCtrl($scope, WorkersFactory){
  $scope.workers = WorkersFactory.workers;
  $scope.WorkersFacory = WorkersFactory;
});
