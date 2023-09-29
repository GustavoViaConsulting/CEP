(function () {
  "use strict";

  consultarCep.service("viaCep", [
    "$q",
    function ($q) {
      return {
        consultarCep: function (cep) {
          var url = "https://viacep.com.br/ws/" + cep + "/json/";
          var deferred = $q.defer();
          let options = {
            url: url,
            type: "GET",
            contentType: "application/json",
          };
          $.ajax(options)
            .done(function (data) {
              deferred.resolve(data);
            })
            .fail(function (error) {
              deferred.reject(error);
            });
          return deferred.promise;
        },
      };
    },
  ]);
})();
