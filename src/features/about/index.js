
import './about.css';
import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './about.routes';
import AboutController from './about.controller';
import randomNames from '../../services/randomNames.service';
import greeting from '../../directives/greeting.directive';

export default angular.module('app.', [uirouter, randomNames, greeting])
  .config(routing)
  .controller('AboutController', AboutController)
  .name;
