
routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('testn', {
      url: '/test',
      template: require('./testn.html'),
      controller: 'TestingController',
      controllerAs: 'vm'
    })
}
