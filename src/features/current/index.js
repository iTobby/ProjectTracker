
import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './current.routes';

import CurrentController from './current.controller';
import pivotalSvc from '../../services/pivotalData.service';

export default angular.module('app.current', [uirouter, pivotalSvc])
  .config(routing)
  .controller('CurrentController', CurrentController)
  .name;
