
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './style/navbar.css'

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import home from './features/home';
import testn from './features/testing';
import current from './features/current';
import done from './features/done';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uirouter, home, testn, current, done])
  .config(routing);

export default MODULE_NAME;
