import angular from 'angular';

export function capitaliseString(){
  return (angular.isString(s) && s.length > 0) ? s[0].toUpperCase() + s.substr(1).toLowerCase() : s;
}

export function storyTypeClass(storytype){
  switch (storytype) {
    case "bug":
      return "label-danger";
    case "feature":
      return "label-primary";
    case "chore":
      return "label-default";
    default:
      return "label-warning"
  }
}
