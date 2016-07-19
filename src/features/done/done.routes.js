
routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('done', {
      url: '/done',
      template: require('./done.html'),
      controller: 'DoneController',
      controllerAs: 'vm'
    })
}
