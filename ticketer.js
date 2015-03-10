angular.module('ticketerApp', [])
  .controller('ticketController', ['$scope', function($scope) {
    $scope.tickets = [];
 
    $scope.addTicket = function() {
      $scope.tickets.push({text:$scope.ticketTitle, done:false});
      $scope.ticketTitle = '';
    };
 
    $scope.remaining = function() {
      var count = 0;
      angular.forEach($scope.tickets, function(ticket) {
        count += ticket.done ? 0 : 1;
      });
      return count;
    };
 
    $scope.archive = function() {
      var oldTickets = $scope.tickets;
      $scope.tickets = [];
      angular.forEach(oldTickets, function(ticket) {
        if (!ticket.done) $scope.tickets.push(ticket);
      });
    };
  }]);