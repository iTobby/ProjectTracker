
import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './testn.routes';

import TestingController from './testn.controller';
import pivotalSvc from '../../services/pivotalData.service';

export default angular.module('app.testn', [uirouter, pivotalSvc])
  .config(routing)
  .controller('TestingController', TestingController)
  .name;
