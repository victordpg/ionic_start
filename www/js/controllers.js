angular.module('starter.controllers', [])

.controller('FormCTRL', function($scope, $filter, $state) {
    $scope.defaultAccount = true;
    $scope.selfAccount = false;

    $scope.reset = function() {
        console.log('enter reset');
        $scope.loan={}
    };

    $scope.calculate = function(loan) {
        //console.log('enter calculate');
        console.log('贷款信息', loan);
        //console.log('开始时间', $filter('date')(loan.start, "yyyy-MM-dd"));
        $state.go("loanList");
    };

    $scope.swtichAccount  = function(){
        console.log("enter swtichAccount");
        var dft = $scope.defaultAccount;
        if (dft==true){
            $scope.defaultAccount = false;
            $scope.selfAccount = true;
        }else{
            $scope.defaultAccount = true;
            $scope.selfAccount = false;
        }
    };
})

.controller('ListCTRL', function($scope, $ionicHistory) {
    this.items = [];
    for (var i = 0; i < 20; i++) this.items.push(i);

    $scope.back = function() {
        console.log('enter ListCTRL.back');
        $ionicHistory.goBack();
    };
});
