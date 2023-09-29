(function () {
  "use strict";

  consultarCep.service("viaCep", [
    "$q",
    function ($q) {
      var client = ZAFClient.init();
      return {
        consultarCep: function (cep) {
          var url = "https://viacep.com.br/ws/" + cep + "/json/";
          var deferred = $q.defer();
          let options = {
            url: url,
            type: "GET",
            contentType: "application/json",
          };
          client
            .request(options)
            .then(function (data) {
              deferred.resolve(data);
            })
            .catch(function (error) {
              deferred.reject(error);
            });
          return deferred.promise;
        },
      };
    },
  ]);
})();
