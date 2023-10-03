(function () {
  "use strict";

  consultarCep.service("viaCep", [
    "$q",
    function ($q) {
      var cliente = ZAFClient.init();

      return {
        consultarCep: function (url, cep) {
          var fullUrl = url.replace("{{CEP}}", cep);
          var deferred = $q.defer();
          let options = {
            url: fullUrl,
            type: "GET",
            contentType: "application/json",
          };
          cliente
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
