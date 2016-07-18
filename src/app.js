
import 'bootstrap/dist/css/bootstrap.css';
import './public/navbar.css'

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import home from './features/home';
import about from './features/about';


const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uirouter, home, about])
  .config(routing);

export default MODULE_NAME;
