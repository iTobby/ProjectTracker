import angular from 'angular';

export default function capitaliseString(){
  return (angular.isString(s) && s.length > 0) ? s[0].toUpperCase() + s.substr(1).toLowerCase() : s;
}
