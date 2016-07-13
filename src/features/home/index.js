
import './home.css';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './home.routes';

import HomeController from './home.controller';
import pivotalSvc from '../../services/pivotalData.service';

export default angular.module('app.home', [uirouter, pivotalSvc])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;
