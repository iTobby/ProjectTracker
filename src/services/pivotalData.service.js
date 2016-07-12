import angular from 'angular';
import * as types from '../utils/storyTypes';
import {api} from '../utils/project';

const PROJECT_ID = '442903';
const ROOT_URL = 'https://www.pivotaltracker.com/services/v5';

class PivotalData {

  constructor($http, $log) {
    this.$http = $http;
    this.$log = $log;
  }

  getProjectDetail() {
    return this.$http(api.project)
      .then((response) => { return response.data; })
      .catch((error) => { return error; });
  }

  getProjectIterations() {
    return this.$http(api.iterations)
      .then((response) => { return response.data; })
      .catch((error) => { return error; });
  }

  getIterationStories(storyType) {
    const self = this;
    const url = self.getStoriesUrl(storyType);

    return self.$http(url)
      .then((response) => { return self.getStoriesFromIterations(response.data); })
      .catch((error) => { return error; });

  }

  getCurrentStories() {
    const self = this;
    return self.$http(api.currentCompletedStories)
      .then((response) => { return self.getStories(response.data); })
      .catch((error) => { return error; });
  }

  getStoriesUrl(type) {
    const self = this;

    switch (type) {
      case types.CURRENT:
        return api.currentStories;
        break;
      case types.DONE:
        return api.doneStories;
        break;
      case types.DONE_CURRENT:
        return api.doneCurrentStories;
        break;
      default:
        return api.currentStories;
    }
  }

  getStoriesFromIterations(iterations){
    const arrayStories = [];
    for (const i of iterations){
      const {stories} = i;
      if (stories.length > 0)
        arrayStories.push(...stories);
    }
    return arrayStories;
  }
}

PivotalData.$inject = ['$http', '$log'];

export default angular.module('services.pivotalData', [])
  .service('PivotalDataSvc', PivotalData)
  .name;
