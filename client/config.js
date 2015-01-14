var fs = require('fs')

module.exports = function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('tournaments')

  $stateProvider
    .state('tournaments', {
      url: '/tournaments',
      template: fs.readFileSync(__dirname + '/ui-views/tournaments/template.html')
    })
    .state('tournamentDetail', {
      url: '/tournaments/:id',
      template: fs.readFileSync(__dirname + '/ui-views/tournamentDetail/template.html'),
      controller: require('./ui-views/tournamentDetail/controller'),
      controllerAs: 'vm'
    })
    .state('authentications', {
      url: '/authentications',
      template: fs.readFileSync(__dirname + '/ui-views/authentications/template.html')
    })
    .state('groups', {
      url: '/groups/:id',
      template: fs.readFileSync(__dirname + '/ui-views/groups/template.html'),
      controller: require('./ui-views/groups/controller'),
      controllerAs: 'vm'
    })
}
