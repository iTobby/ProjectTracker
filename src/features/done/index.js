
import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './done.routes';

import DoneController from './done.controller';
import pivotalSvc from '../../services/pivotalData.service';

export default angular.module('app.done', [uirouter, pivotalSvc])
  .config(routing)
  .controller('DoneController', DoneController)
  .name;
