import angular from 'angular';
import * as types from '../utils/storyTypes';

const PROJECT_ID = '442903';
const ROOT_URL = 'https://www.pivotaltracker.com/services/v5';

const api = {
  project: {
    method: 'GET',
    url: `${ROOT_URL}/projects/${PROJECT_ID}`
  },
  iterations : {
    method: 'GET',
    // cache: true,
    url: `${ROOT_URL}/projects/${PROJECT_ID}/iterations`
  },
  doneCurrentStories : {
    method: 'GET',
    // cache: true,
    url: `${ROOT_URL}/projects/${PROJECT_ID}/iterations?scope=done_current`
  },
  doneStories : {
    method: 'GET',
    // cache: true,
    url: `${ROOT_URL}/projects/${PROJECT_ID}/iterations?scope=done`
  },
  currentStories : {
    method: 'GET',
    // cache: true,
    url: `${ROOT_URL}/projects/${PROJECT_ID}/iterations?scope=current`
  }
};

class PivotalData {

  constructor($http, $log) {
    this.$http = $http;
    this.$log = $log;
    this.pivotalApi = api;
  }

  getProjectDetail() {
    return this.$http(this.pivotalApi.project)
      .then((response) => { return response.data; })
      .catch((error) => { return error; });
  }

  getProjectIterations() {
    return this.$http(this.pivotalApi.iterations)
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
    return self.$http(self.pivotalApi.currentCompletedStories)
      .then((response) => { return self.getStories(response.data); })
      .catch((error) => { return error; });
  }

  getStoriesUrl(type) {
    const self = this;

    switch (type) {
      case types.CURRENT:
        return self.pivotalApi.currentStories;
        break;
      case types.DONE:
        return self.pivotalApi.doneStories;
        break;
      case types.DONE_CURRENT:
        return self.pivotalApi.doneCurrentStories;
        break;
      default:
        return self.pivotalApi.currentStories;
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
