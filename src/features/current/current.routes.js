
routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('current', {
      url: '/current',
      template: require('./current.html'),
      controller: 'CurrentController',
      controllerAs: 'vm'
    })
}
