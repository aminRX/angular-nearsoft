var crudController = angular.module('crudApp', []);

crudController.controller('crudCrtl', function ($scope) {
  $scope.users = [
    {name: 'Amin Ogarrio', email: 'amin.ogarrio@gmail.com'},
    {name: 'Ariel Cota', email: 'ariel.cota@gmail.com'},
    {name: 'Mario Talamante', email: 'mario.talamante@gmail.com'},
    {name: 'Mizael Galvez', email: 'mizael.galvez@gmail.com'}
  ];
  $scope.add = function () {
    if (this.agregarNombre && this.agregarCorreo) {
      $scope.users.push({name: this.agregarNombre, email: this.agregarCorreo});
    }
  };
  $scope.delete = function(index) {
    $scope.users.splice(index, 1);
  };
  $scope.update = function(index) {
    $scope.users[index] = {name: this.editarNombre, email: this.editarCorreo};
  };
});