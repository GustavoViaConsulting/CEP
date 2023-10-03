consultarCep.controller("consultarCep", [
  "$scope",
  "viaCep",
  function ($scope, viaCep) {
    var prosseguir = false;
    var url;
    cliente.metadata().then(function (parameters) {
      url = parameters.settings.url;
      prosseguir = true;
    });

    $scope.consultarCep = function (cep) {
      if (prosseguir == true) {
        viaCep
          .consultarCep(url, cep)
          .then(function (data) {
            $scope.logradouro = data.logradouro;
            $scope.complemento = data.complemento;
            $scope.bairro = data.bairro;
            $scope.localidade = data.localidade;
            $scope.uf = data.uf;
          })
          .catch(function (error) {
            console.log(error);
            mensagemDeErro("Erro ao consultar cep");
          });
      } else {
        mensagemDeErro("Erro ao consultar cep");
      }
    };

    function mensagemDeErro(mensagem) {
      cliente.invoke("notify", "<b>" + mensagem + "</b>", "error", 3000);
    }
  },
]);
