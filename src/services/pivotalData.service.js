import angular from 'angular';

class PivotalData {

  constructor($http, $q, $log) {
    this.$http = $http;
    this.$q = $q;
    this.$log = $log;
    this.api = {
      method: 'GET',
      url: 'https://www.pivotaltracker.com/services/v5/projects/442903'
    };
  }

  getProjectDetail() {
    const self = this;
    return self.$http(self.api)
      .then((response) => { return response.data; })
      .catch((error) => { return error; });
  }
}

PivotalData.$inject = ['$http', '$q', '$log'];

export default angular.module('services.pivotalData', [])
  .service('PivotalDataSvc', PivotalData)
  .name;
