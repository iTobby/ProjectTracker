
import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './about.routes';

import AboutController from './about.controller';
import pivotalSvc from '../../services/pivotalData.service';


export default angular.module('app.about', [uirouter, pivotalSvc])
  .config(routing)
  .controller('AboutController', AboutController)
  .name;
