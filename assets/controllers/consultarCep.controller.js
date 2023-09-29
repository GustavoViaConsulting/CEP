consultarCep.controller("consultarCep", [
  "$scope",
  "viaCep",
  function ($scope, viaCep) {
    $scope.consultarCep = function () {
      viaCep
        .consultarCep($scope.cep)
        .then(function (data) {
          $scope.logradouro = data.logradouro;
          $scope.complemento = data.complemento;
          $scope.bairro = data.bairro;
          $scope.localidade = data.localidade;
          $scope.uf = data.uf;
        })
        .catch(function (error) {
          console.log(error);
        });
    };
  },
]);
